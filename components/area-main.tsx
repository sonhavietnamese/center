// @ts-nocheck
'use client'

import { TIME_INTERVALS } from '@/config/interval'
import { connection } from '@/config/pyth'
import { type TimeInterval, useTimeIntervalStore } from '@/stores/interval'
import { type Mode, useModeStore } from '@/stores/mode'
import { usePriceStore } from '@/stores/price'
import { formatPrice } from '@/utils'
import { OCR2Feed } from '@chainlink/solana-sdk'
import { AnchorProvider } from '@coral-xyz/anchor'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { Divider } from '@nextui-org/divider'
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown'
import { Input } from '@nextui-org/input'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'
import { ChevronDown, Search } from 'lucide-react'
import { useEffect } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts'
import CBinance from './c-binance'
import CChainlink from './c-chainlink'
import CCoinbase from './c-coinbase'
import CPyth from './c-pyth'
import MBinance from './m-binance'
import MChainlink from './m-chainlink'
import MCoinbase from './m-coinbase'
import MPyth from './m-pyth'

export default function AreaMain() {
  const [mode, setMode] = useModeStore((s) => [s.mode, s.setMode])
  const [timeInterval, setTimeInterval] = useTimeIntervalStore((s) => [s.timeInterval, s.setTimeInterval])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [
    allData,
    pythData,
    chainlinkData,
    binanceData,
    coinbaseData,
    appendPythData,
    appendChainlinkData,
    appendBinanceData,
    appendCoinbaseData,
    updateData,
  ] = usePriceStore((s) => [
    s.allData,
    s.pythData,
    s.chainlinkData,
    s.binanceData,
    s.coinbaseData,
    s.appendPythData,
    s.appendChainlinkData,
    s.appendBinanceData,
    s.appendCoinbaseData,
    s.updateData,
  ])

  // PYTH
  useEffect(() => {
    const fetchPythData = async () => {
      const priceIds = ['0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43']

      connection.subscribePriceFeedUpdates(priceIds, (priceFeed) => {
        const data = priceFeed.getPriceNoOlderThan(60)
        if (data) {
          appendPythData({ conf: Number(data.conf), price: Number(data.price) / 1e8 })
          updateData('pyth', Number(data.price) / 1e8)
        }
      })
    }

    fetchPythData()

    return () => {
      connection.closeWebSocket()
    }
  }, [])

  // COINBASE
  useEffect(() => {
    const fetchCoinbaseData = async () => {
      const response = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot')
      const data = await response.json()
      appendCoinbaseData({ conf: 0, price: Number(data.data.amount) })
      updateData('coinbase', Number(data.data.amount))
    }

    const intervalCoinbasePrice = setInterval(() => {
      fetchCoinbaseData()
    }, 1000)

    return () => {
      clearInterval(intervalCoinbasePrice)
    }
  }, [])

  // CHAINLINK
  useEffect(() => {
    const fetchChainlinkData = async () => {
      const feedAddress = new PublicKey('6PxBx93S8x3tno1TsFZwT5VqP8drrRCbCXygEXYNkFJe')
      const CHAINLINK_PROGRAM_ID = new PublicKey('cjg3oHmg9uuPsP8D6g29NWvhySJkdYdAo9D25PRbKXJ')

      const { solana } = window

      const provider = new AnchorProvider(new Connection(clusterApiUrl(WalletAdapterNetwork.Devnet)), solana)

      const dataFeed = await OCR2Feed.load(CHAINLINK_PROGRAM_ID, provider)
      let listener = null
      listener = dataFeed.onRound(feedAddress, (event) => {
        appendChainlinkData({ conf: Number(event.answer), price: Number(event.answer) / 1e8 })
        updateData('chainlink', Number(event.answer) / 1e8)
      })
    }

    fetchChainlinkData()
  }, [])

  // BINANCE
  useEffect(() => {
    const fetchBinanceData = async () => {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
      const data = await response.json()
      appendBinanceData({ conf: 0, price: Number(data.price) })
      updateData('binance', Number(data.price))
    }

    const intervalBinancePrice = setInterval(() => {
      fetchBinanceData()
    }, 1000)

    return () => {
      clearInterval(intervalBinancePrice)
    }
  }, [])

  const switchMode = (mode: Mode) => {
    setMode(mode)
  }

  const switchInterval = (interval: TimeInterval) => {
    setTimeInterval(interval)
  }

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='relative grid flex-1 grid-cols-5 gap-6 p-6'>
        <div className='relative z-10 col-span-4 flex w-full flex-col gap-6'>
          <div className=' flex items-center justify-between'>
            <button type={'button'} onClick={onOpen} className='flex items-center gap-1'>
              <h1 className='font-semibold text-[30px] leading-none'>BTC/USD</h1>
              <ChevronDown className='mt-1 text-default-500' />
            </button>
            <div className='flex items-center gap-2'>
              <Chip size='sm'>3 Providers</Chip>
              <Dropdown backdrop='blur'>
                <DropdownTrigger>
                  <Button variant='bordered' className='border-1' size='sm'>
                    <span className='relative flex h-3 w-3'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75' />
                      <span className='relative inline-flex h-3 w-3 rounded-full bg-success-400' />
                    </span>
                    <span>{timeInterval.label}</span>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant='faded' aria-label='Dropdown menu with description'>
                  <DropdownSection title='Intervals'>
                    {TIME_INTERVALS.map((interval) => (
                      <DropdownItem onClick={() => switchInterval(interval)} key={interval.id} description='Create a new file'>
                        {interval.label}
                      </DropdownItem>
                    ))}
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>

              <Dropdown backdrop='blur'>
                <DropdownTrigger>
                  <Button variant='bordered' className='border-1' size='sm'>
                    {mode === 'individual' ? 'Individual' : 'Dual'}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant='faded' aria-label='Dropdown menu with description'>
                  <DropdownSection title='Mode'>
                    <DropdownItem onClick={() => switchMode('individual')} key='individual' description='Each price per provider'>
                      Individual
                    </DropdownItem>
                    <DropdownItem onClick={() => switchMode('dual')} key='dual' description='Multiple provider at once'>
                      Dual
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          {mode === 'individual' ? (
            <div className='relative grid h-full w-full grid-cols-4 grid-rows-2 gap-4'>
              <CPyth />
              <CChainlink />
              <CBinance />
              <CCoinbase />
            </div>
          ) : (
            <div className='relative h-full w-full gap-4'>
              <Card radius='lg' className=' h-full border border-content1 bg-background'>
                <CardBody className=''>
                  <div className='flex w-full gap-6 px-2 py-1'>
                    <MPyth />
                    <Divider orientation='vertical' />
                    <MChainlink />
                    <Divider orientation='vertical' />
                    <MBinance />
                    <Divider orientation='vertical' />
                    <MCoinbase />
                  </div>

                  {allData.length > 1 && (
                    <div className='absolute bottom-0 left-0 h-[67%] w-full'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <AreaChart
                          width={200}
                          height={60}
                          data={allData}
                          margin={{
                            top: 5,
                            right: 5,
                            left: 0,
                            bottom: 0,
                          }}>
                          <defs>
                            <linearGradient id='colorPythUv' x1='0' y1='0' x2='0' y2='1'>
                              <stop offset='40%' stopColor='#795FF6' stopOpacity={0.4} />
                              <stop offset='100%' stopColor='#000' stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <defs>
                            <linearGradient id='colorChainlinkUv' x1='0' y1='0' x2='0' y2='1'>
                              <stop offset='40%' stopColor='#0C48F7' stopOpacity={0.4} />
                              <stop offset='100%' stopColor='#000' stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <defs>
                            <linearGradient id='colorCoinbaseUv' x1='0' y1='0' x2='0' y2='1'>
                              <stop offset='40%' stopColor='#0C51FE' stopOpacity={0.4} />
                              <stop offset='100%' stopColor='#000' stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <defs>
                            <linearGradient id='colorBinanceUv' x1='0' y1='0' x2='0' y2='1'>
                              <stop offset='40%' stopColor='#F0B90B' stopOpacity={0.4} />
                              <stop offset='100%' stopColor='#000' stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <Tooltip coordinate={undefined} content={<p />} />
                          <YAxis domain={['auto', 'auto']} orientation='right' />
                          <Area
                            animateNewValues
                            isAnimationActive={false}
                            type='monotone'
                            dataKey='pyth'
                            strokeWidth={2}
                            stroke='#795FF6'
                            fill='url(#colorPythUv)'
                          />
                          <Area
                            animateNewValues
                            isAnimationActive={false}
                            type='monotone'
                            dataKey='chainlink'
                            strokeWidth={2}
                            stroke='#0C48F7'
                            fill='url(#colorChainlinkUv)'
                          />
                          <Area
                            animateNewValues
                            isAnimationActive={false}
                            type='monotone'
                            dataKey='binance'
                            strokeWidth={2}
                            stroke='#F0B90B'
                            fill='url(#colorBinanceUv)'
                          />

                          <Area
                            animateNewValues
                            isAnimationActive={false}
                            type='monotone'
                            dataKey='coinbase'
                            strokeWidth={2}
                            stroke='#0C51FE'
                            fill='url(#colorCoinbaseUv)'
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </CardBody>
              </Card>
            </div>
          )}
        </div>

        <div className='absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(0deg,#000_5%,transparent_65%)]' />

        <div className='relative col-span-1 flex flex-col justify-between rounded-2xl border border-content1 py-1 pt-0'>
          <div className='flex flex-col p-6'>
            <div className='flex flex-col '>
              <span className='font-semibold text-[20px]'>Summary</span>
              <small className='text-default-500'>Average from 3 providers</small>
            </div>

            {pythData.length > 1 && binanceData.length > 1 && coinbaseData.length > 1 && chainlinkData.length > 1 && (
              <div className='mt-5 flex flex-col'>
                <small className='text-default-500'>Average Price</small>
                <span className='mt-1 font-normal text-[32px] leading-none'>
                  <span className='text-[24px]'>$</span>
                  {formatPrice(
                    (pythData[pythData.length - 1].price +
                      chainlinkData[chainlinkData.length - 1].price +
                      binanceData[binanceData.length - 1].price +
                      coinbaseData[coinbaseData.length - 1].price) /
                      4,
                  )}
                </span>
              </div>
            )}
          </div>
          <button type='button' className='button-g relative left-0 w-full rounded-[28px] border-[16px] border-transparent p-4'>
            <span className='font-semibold text-sm'>View on DEX</span>
            <span className='particle' style={{ '--a': '-45deg', '--x': '53%', '--y': '15%', '--d': '4em', '--f': '.7', '--t': '.15' }} />
            <span className='particle' style={{ '--a': '150deg', '--x': '40%', '--y': '70%', '--d': '7.5em', '--f': '.8', '--t': '.08' }} />
            <span className='particle' style={{ '--a': '10deg', '--x': '90%', '--y': '65%', '--d': '7em', '--f': '.6', '--t': '.25' }} />
            <span className='particle' style={{ '--a': '-120deg', '--x': '15%', '--y': '10%', '--d': '4em' }} />
            <span className='particle' style={{ '--a': '-175deg', '--x': '10%', '--y': '25%', '--d': '5.25em', '--f': '.6', '--t': '.32' }} />
            <span className='particle' style={{ '--a': '-18deg', '--x': '80%', '--y': '25%', '--d': '4.75em', '--f': '.5', '--t': '.4' }} />
            <span className='particle' style={{ '--a': '-160deg', '--x': '30%', '--y': '5%', '--d': '9em', '--f': '.9', '--t': '.5' }} />
            <span className='particle' style={{ '--a': '175deg', '--x': '9%', '--y': '30%', '--d': '6em', '--f': '.95', '--t': '.6' }} />
            <span className='particle' style={{ '--a': '-10deg', '--x': '89%', '--y': '25%', '--d': '4.5em', '--f': '.55', '--t': '.67' }} />
            <span className='particle' style={{ '--a': '-140deg', '--x': '40%', '--y': '10%', '--d': '5em', '--f': '.85', '--t': '.75' }} />
            <span className='particle' style={{ '--a': '90deg', '--x': '45%', '--y': '65%', '--d': '4em', '--f': '.5', '--t': '.83' }} />
            <span className='particle' style={{ '--a': '30deg', '--x': '70%', '--y': '80%', '--d': '6.5em', '--f': '.75', '--t': '.92' }} />
          </button>
        </div>
      </div>

      <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange} className={''} placement='top-center'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <span>Search pairs</span>
              </ModalHeader>
              <ModalBody className='px-4 pt-0'>
                <Input
                  aria-label='Search'
                  classNames={{
                    inputWrapper: 'bg-default-100',
                    input: 'text-sm',
                  }}
                  autoFocus
                  labelPlacement='outside'
                  placeholder='Search...'
                  startContent={<Search width={17} className=' pointer-events-none flex-shrink-0 text-default-400' />}
                  type='search'
                />

                <div className='mt-3 w-full space-y-1'>
                  <Card isHoverable className='bg-transparent py-2 pt-1 pb-3 shadow-none'>
                    <CardHeader className='flex w-full items-center justify-between px-4 pt-2 pb-0'>
                      <div className='flex flex-col gap-2'>
                        <p className='font-bold text-tiny uppercase '>SOL/USDC</p>
                        <Chip size='sm' className='h-5'>
                          2 providers
                        </Chip>
                      </div>
                      <div className='flex flex-col items-end gap-1'>
                        <small className='font-semibold text-sm'>$2.00</small>
                        <small className='text-xs'>+14%</small>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

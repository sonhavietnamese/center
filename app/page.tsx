'use client'
import AreaLogo from '@/components/area-logo'
import AreaNav from '@/components/area-nav'
import AreaProvider from '@/components/area-provider'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Chip, type ChipProps } from '@nextui-org/chip'
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown'
import { Input } from '@nextui-org/input'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { ChevronDown, MoveDownLeft, MoveUpRight, Search } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <section className='relative grid h-screen w-screen grid-cols-[280px,1fr] grid-rows-[80px,1fr] overflow-hidden'>
      <AreaLogo />
      <AreaNav />
      <AreaProvider />
      <div className='flex h-full w-full flex-col'>
        <div className='relative grid flex-1 grid-cols-5 gap-6 p-6'>
          <div className='relative z-10 col-span-4 flex w-full flex-col gap-6'>
            <div className=' flex items-center justify-between'>
              <button onClick={onOpen} type={'button'} className='flex items-center gap-1'>
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
                      Live
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu variant='faded' aria-label='Dropdown menu with description'>
                    <DropdownSection title='Intervals'>
                      <DropdownItem key='new' description='Create a new file'>
                        15 minutes
                      </DropdownItem>
                      <DropdownItem key='copy' description='Copy the file link'>
                        1 hour
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown backdrop='blur'>
                  <DropdownTrigger>
                    <Button variant='bordered' className='border-1' size='sm'>
                      Individual
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu variant='faded' aria-label='Dropdown menu with description'>
                    <DropdownSection title='Mode'>
                      <DropdownItem key='new' description='Each price per provider'>
                        Individual
                      </DropdownItem>
                      <DropdownItem key='copy' description='Multiple provider at once'>
                        Multiple
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className='relative grid h-full w-full grid-cols-4 grid-rows-2 gap-4'>
              {/* <Card isFooterBlurred radius='lg' className=' rounded-3xl bg-background '>
                <CardHeader className='relative flex w-full items-center gap-4 px-6 pt-6 pb-0'>
                  <figure className='aspect-square w-[44px] animate-appearance-in rounded-lg bg-[#E7DBFE] p-1.5'>
                    <svg className='h-full w-full' width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <title>{}</title>
                      <path fill-rule='evenodd' clip-rule='evenodd' d='M24.2677 40.1743H15V66.7677L24.2677 76.1498V40.1743Z' fill='#1A182D' />
                      <path fill-rule='evenodd' clip-rule='evenodd' d='M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z' fill='#1A182D' />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z'
                        fill='#1A182D'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z'
                        fill='#1A182D'
                      />
                    </svg>
                  </figure>
                  <div className='space-y-1 leading-none'>
                    <small className='text-default-500'>12 Pairs</small>
                    <p className=' text-md '>Pyth Network</p>
                  </div>
                </CardHeader>
                <CardBody className='mt-5 px-6'>
                  <small className='text-default-500'>Price Feed</small>
                  <span className='mt-1 font-light text-[32px] leading-none'>
                    <span className='text-[24px]'>$</span>50.340,345
                  </span>
                  <div className='flex gap-2 items-center text-default-500 mt-2'>
                    <div className='w-[24px] h-[24px] bg-success-600/50 rounded-md flex items-center justify-center'>
                      <div className=' aspect-square w-[20px] h-[20px] rounded-full flex items-center justify-center p-1 bg-success-400'>
                        <MoveUpRight width={15} className='text-success-50' />
                      </div>
                    </div>
                    <span className='text-success-400 text-md'>6.25%</span>
                  </div>
                  <div className='w-full absolute bottom-0 left-0 h-[54%]'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <AreaChart
                        width={200}
                        height={60}
                        data={data}
                        margin={{
                          top: 5,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        }}>
                        <defs>
                          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset='5%' stopColor='#795FF6' stopOpacity={0.4} />
                            <stop offset='90%' stopColor='#D0C7F9' stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <Tooltip coordinate={undefined} content={<p />} />
                        <Area type='bump' dataKey='uv' strokeWidth={2} stroke='#E7DBFE' fill='url(#colorUv)' />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardBody>
                <div className='w-full absolute bottom-[60px] '>
                  <svg width='373' height='1' viewBox='0 0 373 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <title>{}</title>
                    <path d='M1 1H372' stroke='#4C4C53' stroke-linecap='round' stroke-dasharray='4 4' />
                  </svg>
                </div>
              </Card> */}

              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} radius='lg' className=' bg-background border border-content1'>
                  <CardHeader className='relative flex w-full items-center gap-4 px-6 pt-6 pb-0'>
                    <figure className='aspect-square w-[44px] animate-appearance-in rounded-lg bg-[#E7DBFE] p-1.5'>
                      <svg className='h-full w-full' width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <title>{}</title>
                        <path fill-rule='evenodd' clip-rule='evenodd' d='M24.2677 40.1743H15V66.7677L24.2677 76.1498V40.1743Z' fill='#1A182D' />
                        <path fill-rule='evenodd' clip-rule='evenodd' d='M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z' fill='#1A182D' />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z'
                          fill='#1A182D'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z'
                          fill='#1A182D'
                        />
                      </svg>
                    </figure>
                    <div className='space-y-1 leading-none'>
                      <small className='text-default-500'>12 Pairs</small>
                      <p className=' text-md '>Pyth Network</p>
                    </div>
                  </CardHeader>
                  <CardBody className='mt-5 px-6'>
                    <small className='text-default-500'>Price Feed</small>
                    <span className='mt-1 font-light text-[32px] leading-none'>
                      <span className='text-[24px]'>$</span>50.340,345
                    </span>
                    <div className='mt-2 flex items-center gap-2 text-default-500'>
                      <div className='flex h-[24px] w-[24px] items-center justify-center rounded-md bg-danger-600/50'>
                        <div className=' flex aspect-square h-[20px] w-[20px] items-center justify-center rounded-full bg-danger-400 p-1'>
                          <MoveDownLeft width={15} className='text-danger-50' />
                        </div>
                      </div>
                      <span className='text-danger-400 text-md'>6.25%</span>
                    </div>
                    <div className='absolute bottom-0 left-0 h-[54%] w-full'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <AreaChart
                          width={200}
                          height={60}
                          data={data}
                          margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 0,
                          }}>
                          <defs>
                            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                              <stop offset='40%' stopColor='#795FF6' stopOpacity={0.4} />
                              <stop offset='100%' stopColor='#000' stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <Tooltip coordinate={undefined} content={<p />} />
                          <Area type='bump' dataKey='uv' strokeWidth={2} stroke='#E7DBFE' fill='url(#colorUv)' />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardBody>
                  <div className='absolute bottom-[60px] w-full '>
                    <svg width='373' height='1' viewBox='0 0 373 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <title>{}</title>
                      <path d='M1 1H372' stroke='#4C4C53' stroke-linecap='round' stroke-dasharray='4 4' />
                    </svg>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className='absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(0deg,#000_5%,transparent_65%)]' />

          <div className='relative col-span-1 flex flex-col justify-between rounded-2xl border border-content1 py-1 pt-0'>
            <div className='flex flex-col p-6'>
              <div className='flex flex-col '>
                <span className='font-semibold text-[20px]'>Summary</span>
                <small className='text-default-500'>Average from 3 providers</small>
              </div>

              <div className='mt-5 flex flex-col'>
                <small className='text-default-500'>Average Price</small>
                <span className='mt-1 font-normal text-[32px] leading-none'>
                  <span className='text-[24px]'>$</span>50.340,345
                </span>
              </div>
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

                <div className='w-full space-y-1 mt-3'>
                  <Card isHoverable className='py-2 pt-1 pb-3 bg-transparent shadow-none'>
                    <CardHeader className='flex justify-between w-full pb-0 pt-2 px-4  items-center'>
                      <div className='flex flex-col gap-2'>
                        <p className='text-tiny uppercase font-bold '>SOL/USDC</p>
                        <Chip size='sm' className='h-5'>
                          2 providers
                        </Chip>
                      </div>
                      <div className='flex flex-col gap-1 items-end'>
                        <small className='text-sm font-semibold'>$2.00</small>
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
    </section>
  )
}

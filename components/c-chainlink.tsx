import { usePriceStore } from '@/stores/price'
import { formatPrice } from '@/utils'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { MoveDownLeft, MoveUpRight } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts'
import { PROVIDERS } from './area-provider'

export default function CChainlink() {
  const [chainlinkData] = usePriceStore((state) => [state.chainlinkData])

  return (
    <Card radius='lg' className=' border border-content1 bg-background'>
      <CardHeader className='relative flex w-full items-center gap-4 px-6 pt-6 pb-0'>
        <figure className='aspect-square w-[44px] animate-appearance-in rounded-lg bg-[#0B48F7] p-1.5'>{PROVIDERS.chainlink.logo}</figure>
        <div className='space-y-1 leading-none'>
          <small className='text-default-500'>Cross-chain</small>
          <p className=' text-md '>Chainlink</p>
        </div>
      </CardHeader>
      {chainlinkData.length > 1 ? (
        <CardBody className='mt-5 px-6'>
          <small className='text-default-500'>Price </small>
          <span className='mt-1 font-light text-[32px] leading-none'>
            <span className='text-[24px]'>$</span>
            {formatPrice(chainlinkData[chainlinkData.length - 1].price)}
          </span>
          <div className='mt-2 flex items-center gap-2 text-default-500'>
            {((chainlinkData[chainlinkData.length - 1].price - chainlinkData[chainlinkData.length - 2].price) /
              chainlinkData[chainlinkData.length - 2].price) *
              100 <=
            0 ? (
              <>
                <div className='flex h-[24px] w-[24px] items-center justify-center rounded-md bg-danger-600/50'>
                  <div className=' flex aspect-square h-[20px] w-[20px] items-center justify-center rounded-full bg-danger-400 p-1'>
                    <MoveDownLeft width={15} className='text-danger-50' />
                  </div>
                </div>
                <span className='text-danger-400 text-md'>
                  {formatPrice(
                    ((chainlinkData[chainlinkData.length - 1].price - chainlinkData[chainlinkData.length - 2].price) /
                      chainlinkData[chainlinkData.length - 2].price) *
                      100,
                  )}
                  %
                </span>
              </>
            ) : (
              <>
                <div className='flex h-[24px] w-[24px] items-center justify-center rounded-md bg-success-600/50'>
                  <div className=' flex aspect-square h-[20px] w-[20px] items-center justify-center rounded-full bg-success-400 p-1'>
                    <MoveUpRight width={15} className='text-success-50' />
                  </div>
                </div>
                <span className='text-md text-success-400'>
                  {formatPrice(
                    ((chainlinkData[chainlinkData.length - 1].price - chainlinkData[chainlinkData.length - 2].price) /
                      chainlinkData[chainlinkData.length - 2].price) *
                      100,
                  )}
                  %
                </span>
              </>
            )}
          </div>
          <div className='absolute bottom-0 left-0 h-[54%] w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart
                width={200}
                height={60}
                data={chainlinkData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}>
                <defs>
                  <linearGradient id='colorChainlinkUv' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='40%' stopColor='#0C48F7' stopOpacity={0.4} />
                    <stop offset='100%' stopColor='#000' stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <YAxis domain={['auto', 'auto']} hide />

                <Tooltip coordinate={undefined} content={<p />} />
                <Area
                  animateNewValues
                  isAnimationActive={false}
                  type='monotone'
                  dataKey='price'
                  strokeWidth={2}
                  stroke='#0C48F7'
                  fill='url(#colorChainlinkUv)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardBody>
      ) : (
        <div className='mt-6 flex flex-col px-6'>
          <span className='text-default-500'>Fetching</span>
        </div>
      )}

      <div className='absolute bottom-[60px] w-full '>
        <svg width='373' height='1' viewBox='0 0 373 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <title>{}</title>
          <path d='M1 1H372' stroke='#4C4C53' stroke-linecap='round' stroke-dasharray='4 4' />
        </svg>
      </div>
    </Card>
  )
}

import { usePriceStore } from '@/stores/price'
import { formatPrice } from '@/utils'
import { MoveDownLeft, MoveUpRight } from 'lucide-react'
import { PROVIDERS } from './area-provider'

export default function MPyth() {
  const [pythData] = usePriceStore((state) => [state.pythData])

  return (
    <div className='w-[220px] p-4 px-4'>
      <div className='relative flex w-full items-center gap-4 pb-0'>
        <figure className='aspect-square w-[44px] animate-appearance-in rounded-lg bg-[#E7DBFE] p-1.5'>{PROVIDERS.pyth.logoDark}</figure>
        <div className='space-y-1 leading-none'>
          <small className='text-default-500'>Cross-chain</small>
          <p className=' text-md '>Pyth Network</p>
        </div>
      </div>

      {pythData.length > 1 && (
        <div className='mt-6 flex flex-col'>
          <small className='text-default-500'>Price </small>
          <span className='mt-1 font-light text-[32px] leading-none'>
            <span className='text-[24px]'>$</span>
            {formatPrice(pythData[pythData.length - 1].price)}
          </span>
          <div className='mt-2 flex items-center gap-2 text-default-500'>
            {((pythData[pythData.length - 1].price - pythData[pythData.length - 2].price) / pythData[pythData.length - 2].price) * 100 <= 0 ? (
              <>
                <div className='flex h-[24px] w-[24px] items-center justify-center rounded-md bg-danger-600/50'>
                  <div className=' flex aspect-square h-[20px] w-[20px] items-center justify-center rounded-full bg-danger-400 p-1'>
                    <MoveDownLeft width={15} className='text-danger-50' />
                  </div>
                </div>
                <span className='text-danger-400 text-md'>
                  {formatPrice(
                    ((pythData[pythData.length - 1].price - pythData[pythData.length - 2].price) / pythData[pythData.length - 2].price) * 100,
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
                    ((pythData[pythData.length - 1].price - pythData[pythData.length - 2].price) / pythData[pythData.length - 2].price) * 100,
                  )}
                  %
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

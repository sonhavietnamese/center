import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Kbd } from '@nextui-org/kbd'
import { Search, Wallet } from 'lucide-react'

export default function AreaNav() {
  return (
    <div className='flex h-full w-full items-center border-divider border-b-1'>
      <div className='flex h-full w-full items-center justify-between px-5 '>
        <div />
        <div className='flex gap-2'>
          {/* <Input
            aria-label='Search'
            classNames={{
              inputWrapper: 'bg-default-100',
              input: 'text-sm',
            }}
            endContent={
              <Kbd className='hidden lg:inline-block' keys={['command']}>
                K
              </Kbd>
            }
            labelPlacement='outside'
            placeholder='Search...'
            startContent={<Search width={17} className=' pointer-events-none flex-shrink-0 text-default-400' />}
            type='search'
          /> */}

          {/* <Button className='bg-[#9353D3] px-6'>
            <span className='flex items-center gap-2'>
              <Wallet width={16} /> Connect
            </span>
          </Button> */}
        </div>
      </div>
    </div>
  )
}

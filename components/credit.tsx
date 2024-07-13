'use client'

import { Squircle } from '@squircle-js/react'
import { Heart } from 'lucide-react'

export default function Credit() {
  return (
    <Squircle cornerRadius={20} cornerSmoothing={0.5} className='select-none flex items-center gap-3 bg-content1 p-3 px-4 text-white'>
      <div>
        <Heart size={16} />
      </div>
      <div className='flex flex-col gap-0.5'>
        <span className='text-default-800 text-sm'>@sonhavietnamese</span>
        <small className='text-default-400 text-tiny'>
          Application for <span className='underline'>Talent Olympic</span>
        </small>
      </div>
    </Squircle>
  )
}

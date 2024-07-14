'use client'

import AreaLogo from '@/components/area-logo'
import AreaMain from '@/components/area-main'
import AreaNav from '@/components/area-nav'
import AreaProvider from '@/components/area-provider'
import { Suspense } from 'react'

export default function Home() {
  return (
    <section className='relative grid h-screen w-screen grid-cols-[280px,1fr] grid-rows-[80px,1fr] overflow-hidden'>
      <AreaLogo />
      <AreaNav />
      <AreaProvider />
      <Suspense>
        <AreaMain />
      </Suspense>
    </section>
  )
}

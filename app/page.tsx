'use client'
import AreaLogo from '@/components/area-logo'
import AreaNav from '@/components/area-nav'
import AreaProvider from '@/components/area-provider'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Chip, type ChipProps } from '@nextui-org/chip'
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown'
import { Input } from '@nextui-org/input'
import { Kbd } from '@nextui-org/kbd'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'
import { User as UserComponent } from '@nextui-org/user'
import { ChevronDown, MoveDownLeft, MoveUpRight, Search, Wallet } from 'lucide-react'
import { type Key, useCallback } from 'react'
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

const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'active',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Technical Lead',
    team: 'Development',
    status: 'paused',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Senior Developer',
    team: 'Development',
    status: 'active',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'Community Manager',
    team: 'Marketing',
    status: 'vacation',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'Sales Manager',
    team: 'Sales',
    status: 'active',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
]

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ROLE', uid: 'role' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ACTIONS', uid: 'actions' },
]

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
}

type User = (typeof users)[0]

export default function Home() {
  const renderCell = useCallback((user: User, columnKey: Key) => {
    const cellValue = user[columnKey as keyof User]

    switch (columnKey) {
      case 'name':
        return (
          <UserComponent avatarProps={{ radius: 'lg', src: user.avatar }} description={user.email} name={cellValue}>
            {user.email}
          </UserComponent>
        )
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold text-default-400 text-sm capitalize'>{user.team}</p>
          </div>
        )
      case 'status':
        return (
          <Chip className='capitalize' color={statusColorMap[user.status]} size='sm' variant='flat'>
            {cellValue}
          </Chip>
        )
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            {/* <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip> */}
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <section className='relative grid h-screen w-screen grid-cols-[280px,1fr] grid-rows-[80px,1fr]'>
      <AreaLogo />
      <AreaNav />
      <AreaProvider />
      <div className='flex h-full w-full flex-col'>
        <div className='grid flex-1 grid-cols-5 gap-6 p-6'>
          <div className='col-span-4 flex w-full flex-col gap-6'>
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
                      <span className='relative flex h-2 w-2'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75' />
                        <span className='relative inline-flex h-2 w-2 rounded-full bg-success-400' />
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

            <div className='grid h-full w-full grid-cols-4 gap-4'>
              <Card isFooterBlurred radius='lg' className=' rounded-3xl bg-background '>
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
              </Card>

              <Card isFooterBlurred radius='lg' className=' rounded-3xl bg-background '>
                <CardHeader className='pb-0 relative flex w-full pt-6 px-6 gap-4 items-center'>
                  <figure className='w-[44px] rounded-lg aspect-square p-1.5 animate-appearance-in bg-[#E7DBFE]'>
                    <svg className='w-full h-full' width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                  <div className='leading-none space-y-1'>
                    <small className='text-default-500'>12 Pairs</small>
                    <p className=' text-md '>Pyth Network</p>
                  </div>
                </CardHeader>
                <CardBody className='px-6 mt-5'>
                  <small className='text-default-500'>Price Feed</small>
                  <span className='text-[32px] font-light leading-none mt-1'>
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
              </Card>

              <Card isFooterBlurred radius='lg' className=' rounded-3xl bg-background '>
                <CardHeader className='pb-0 relative flex w-full pt-6 px-6 gap-4 items-center'>
                  <figure className='w-[44px] rounded-lg aspect-square p-1.5 animate-appearance-in bg-[#E7DBFE]'>
                    <svg className='w-full h-full' width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                  <div className='leading-none space-y-1'>
                    <small className='text-default-500'>12 Pairs</small>
                    <p className=' text-md '>Pyth Network</p>
                  </div>
                </CardHeader>
                <CardBody className='px-6 mt-5'>
                  <small className='text-default-500'>Price Feed</small>
                  <span className='text-[32px] font-light leading-none mt-1'>
                    <span className='text-[24px]'>$</span>50.340,345
                  </span>
                  <div className='flex gap-2 items-center text-default-500 mt-2'>
                    <div className='w-[24px] h-[24px] bg-danger-600/50 rounded-md flex items-center justify-center'>
                      <div className=' aspect-square w-[20px] h-[20px] rounded-full flex items-center justify-center p-1 bg-danger-400'>
                        <MoveDownLeft width={15} className='text-danger-50' />
                      </div>
                    </div>
                    <span className='text-danger-400 text-md'>6.25%</span>
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
              </Card>
            </div>
          </div>

          <div className='p-6 py-5 col-span-1 border border-content1 rounded-2xl'>
            <div className='flex flex-col'>
              <span className='font-semibold text-[20px]'>Summary</span>
              <small className='text-default-500'>Average price from 3 providers</small>
            </div>

            <div className='flex flex-col mt-5'>
              <small className='text-default-500'>Price</small>
              <span className='text-[32px] font-normal leading-none mt-1'>
                <span className='text-[24px]'>$</span>50.340,345
              </span>
            </div>
          </div>
        </div>

        <div className='flex-1 relative border-t-1 border-divider'>
          <div className='w-full h-full absolute inset-0 p-6'>
            <div className='w-full h-full'>
              <Table aria-label='Example table with custom cells'>
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                      {column.name}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={users}>
                  {(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className='absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(0deg,#000_5%,transparent_65%)]' />
        </div>
      </div>

      <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
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
              </ModalHeader>
              <ModalBody>
                {/* <Input
                  autoFocus
                  endContent={<MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />}
                  label='Email'
                  placeholder='Enter your email'
                  variant='bordered'
                />
                <Input
                  endContent={<LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />}
                  label='Password'
                  placeholder='Enter your password'
                  type='password'
                  variant='bordered'
                /> */}
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='flat' onPress={onClose}>
                  Close
                </Button>
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

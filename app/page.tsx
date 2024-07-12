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
import { User } from '@nextui-org/user'
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
					<User avatarProps={{ radius: 'lg', src: user.avatar }} description={user.email} name={cellValue}>
						{user.email}
					</User>
				)
			case 'role':
				return (
					<div className="flex flex-col">
						<p className="text-bold text-sm capitalize">{cellValue}</p>
						<p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
					</div>
				)
			case 'status':
				return (
					<Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
						{cellValue}
					</Chip>
				)
			case 'actions':
				return (
					<div className="relative flex items-center gap-2">
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
		<section className="relative grid h-screen w-screen grid-cols-[280px,1fr] grid-rows-[80px,1fr]">
			<AreaLogo />
			<AreaNav />
			<AreaProvider />
			<div className="w-full h-full flex flex-col">
				<div className="grid grid-cols-5 flex-1 gap-6 p-6">
					<div className="col-span-4 w-full flex gap-6 flex-col">
						<div className=" flex justify-between  items-center">
							<button onClick={onOpen} className="flex gap-1 items-center">
								<h1 className="font-semibold leading-none text-[30px]">BTC/USD</h1>
								<ChevronDown className="text-default-500 mt-1" />
							</button>
							<div className="flex items-center gap-2">
								<Chip size="sm">3 Providers</Chip>
								<Dropdown backdrop="blur">
									<DropdownTrigger>
										<Button variant="bordered" className="border-1" size="sm">
											<span className="relative flex h-2 w-2">
												<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
												<span className="relative inline-flex rounded-full h-2 w-2 bg-success-400"></span>
											</span>
											Live
										</Button>
									</DropdownTrigger>
									<DropdownMenu variant="faded" aria-label="Dropdown menu with description">
										<DropdownSection title="Intervals">
											<DropdownItem key="new" description="Create a new file">
												15 minutes
											</DropdownItem>
											<DropdownItem key="copy" description="Copy the file link">
												1 hour
											</DropdownItem>
										</DropdownSection>
									</DropdownMenu>
								</Dropdown>

								<Dropdown backdrop="blur">
									<DropdownTrigger>
										<Button variant="bordered" className="border-1" size="sm">
											Individual
										</Button>
									</DropdownTrigger>
									<DropdownMenu variant="faded" aria-label="Dropdown menu with description">
										<DropdownSection title="Mode">
											<DropdownItem key="new" description="Each price per provider">
												Individual
											</DropdownItem>
											<DropdownItem key="copy" description="Multiple provider at once">
												Multiple
											</DropdownItem>
										</DropdownSection>
									</DropdownMenu>
								</Dropdown>
							</div>
						</div>

						<div className="w-full h-full grid grid-cols-4 gap-4">
							<Card isFooterBlurred radius="lg" className=" rounded-3xl bg-background ">
								<CardHeader className="pb-0 relative flex w-full pt-6 px-6 gap-4 items-center">
									<figure className="w-[44px] rounded-lg aspect-square p-1.5 animate-appearance-in bg-[#E7DBFE]">
										<svg
											className="w-full h-full"
											width="100"
											height="100"
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M24.2677 40.1743H15V66.7677L24.2677 76.1498V40.1743Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z"
												fill="#1A182D"
											/>
										</svg>
									</figure>
									<div className="leading-none space-y-1">
										<small className="text-default-500">12 Pairs</small>
										<p className=" text-md ">Pyth Network</p>
									</div>
								</CardHeader>
								<CardBody className="px-6 mt-5">
									<small className="text-default-500">Price Feed</small>
									<span className="text-[32px] font-light leading-none mt-1">
										<span className="text-[24px]">$</span>50.340,345
									</span>
									<div className="flex gap-2 items-center text-default-500 mt-2">
										<div className="w-[24px] h-[24px] bg-success-600/50 rounded-md flex items-center justify-center">
											<div className=" aspect-square w-[20px] h-[20px] rounded-full flex items-center justify-center p-1 bg-success-400">
												<MoveUpRight width={15} className="text-success-50" />
											</div>
										</div>
										<span className="text-success-400 text-md">6.25%</span>
									</div>
									<div className="w-full absolute bottom-0 left-0 h-[54%]">
										<ResponsiveContainer width="100%" height="100%">
											<AreaChart
												width={200}
												height={60}
												data={data}
												margin={{
													top: 5,
													right: 0,
													left: 0,
													bottom: 0,
												}}
											>
												<defs>
													<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
														<stop offset="5%" stopColor="#795FF6" stopOpacity={0.4} />
														<stop offset="90%" stopColor="#D0C7F9" stopOpacity={0.1} />
													</linearGradient>
												</defs>
												<Tooltip coordinate={undefined} content={<></>} />
												<Area type="bump" dataKey="uv" strokeWidth={2} stroke="#E7DBFE" fill="url(#colorUv)" />
											</AreaChart>
										</ResponsiveContainer>
									</div>
								</CardBody>
								<div className="w-full absolute bottom-[60px] ">
									<svg width="373" height="1" viewBox="0 0 373 1" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1H372" stroke="#4C4C53" stroke-linecap="round" stroke-dasharray="4 4" />
									</svg>
								</div>
							</Card>

							<Card isFooterBlurred radius="lg" className=" rounded-3xl bg-background ">
								<CardHeader className="pb-0 relative flex w-full pt-6 px-6 gap-4 items-center">
									<figure className="w-[44px] rounded-lg aspect-square p-1.5 animate-appearance-in bg-[#E7DBFE]">
										<svg
											className="w-full h-full"
											width="100"
											height="100"
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M24.2677 40.1743H15V66.7677L24.2677 76.1498V40.1743Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z"
												fill="#1A182D"
											/>
										</svg>
									</figure>
									<div className="leading-none space-y-1">
										<small className="text-default-500">12 Pairs</small>
										<p className=" text-md ">Pyth Network</p>
									</div>
								</CardHeader>
								<CardBody className="px-6 mt-5">
									<small className="text-default-500">Price Feed</small>
									<span className="text-[32px] font-light leading-none mt-1">
										<span className="text-[24px]">$</span>50.340,345
									</span>
									<div className="flex gap-2 items-center text-default-500 mt-2">
										<div className="w-[24px] h-[24px] bg-success-600/50 rounded-md flex items-center justify-center">
											<div className=" aspect-square w-[20px] h-[20px] rounded-full flex items-center justify-center p-1 bg-success-400">
												<MoveUpRight width={15} className="text-success-50" />
											</div>
										</div>
										<span className="text-success-400 text-md">6.25%</span>
									</div>
									<div className="w-full absolute bottom-0 left-0 h-[54%]">
										<ResponsiveContainer width="100%" height="100%">
											<AreaChart
												width={200}
												height={60}
												data={data}
												margin={{
													top: 5,
													right: 0,
													left: 0,
													bottom: 0,
												}}
											>
												<defs>
													<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
														<stop offset="5%" stopColor="#795FF6" stopOpacity={0.4} />
														<stop offset="90%" stopColor="#D0C7F9" stopOpacity={0.1} />
													</linearGradient>
												</defs>
												<Tooltip coordinate={undefined} content={<></>} />
												<Area type="bump" dataKey="uv" strokeWidth={2} stroke="#E7DBFE" fill="url(#colorUv)" />
											</AreaChart>
										</ResponsiveContainer>
									</div>
								</CardBody>
								<div className="w-full absolute bottom-[60px] ">
									<svg width="373" height="1" viewBox="0 0 373 1" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1H372" stroke="#4C4C53" stroke-linecap="round" stroke-dasharray="4 4" />
									</svg>
								</div>
							</Card>

							<Card isFooterBlurred radius="lg" className=" rounded-3xl bg-background ">
								<CardHeader className="pb-0 relative flex w-full pt-6 px-6 gap-4 items-center">
									<figure className="w-[44px] rounded-lg aspect-square p-1.5 animate-appearance-in bg-[#E7DBFE]">
										<svg
											className="w-full h-full"
											width="100"
											height="100"
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M24.2677 40.1743H15V66.7677L24.2677 76.1498V40.1743Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z"
												fill="#1A182D"
											/>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z"
												fill="#1A182D"
											/>
										</svg>
									</figure>
									<div className="leading-none space-y-1">
										<small className="text-default-500">12 Pairs</small>
										<p className=" text-md ">Pyth Network</p>
									</div>
								</CardHeader>
								<CardBody className="px-6 mt-5">
									<small className="text-default-500">Price Feed</small>
									<span className="text-[32px] font-light leading-none mt-1">
										<span className="text-[24px]">$</span>50.340,345
									</span>
									<div className="flex gap-2 items-center text-default-500 mt-2">
										<div className="w-[24px] h-[24px] bg-danger-600/50 rounded-md flex items-center justify-center">
											<div className=" aspect-square w-[20px] h-[20px] rounded-full flex items-center justify-center p-1 bg-danger-400">
												<MoveDownLeft width={15} className="text-danger-50" />
											</div>
										</div>
										<span className="text-danger-400 text-md">6.25%</span>
									</div>
									<div className="w-full absolute bottom-0 left-0 h-[54%]">
										<ResponsiveContainer width="100%" height="100%">
											<AreaChart
												width={200}
												height={60}
												data={data}
												margin={{
													top: 5,
													right: 0,
													left: 0,
													bottom: 0,
												}}
											>
												<defs>
													<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
														<stop offset="5%" stopColor="#795FF6" stopOpacity={0.4} />
														<stop offset="90%" stopColor="#D0C7F9" stopOpacity={0.1} />
													</linearGradient>
												</defs>
												<Tooltip coordinate={undefined} content={<></>} />
												<Area type="bump" dataKey="uv" strokeWidth={2} stroke="#E7DBFE" fill="url(#colorUv)" />
											</AreaChart>
										</ResponsiveContainer>
									</div>
								</CardBody>
								<div className="w-full absolute bottom-[60px] ">
									<svg width="373" height="1" viewBox="0 0 373 1" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1H372" stroke="#4C4C53" stroke-linecap="round" stroke-dasharray="4 4" />
									</svg>
								</div>
							</Card>
						</div>
					</div>

					<div className="p-6 py-5 col-span-1 border border-content1 rounded-2xl">
						<div className="flex flex-col">
							<span className="font-semibold text-[20px]">Summary</span>
							<small className="text-default-500">Average price from 3 providers</small>
						</div>

						<div className="flex flex-col mt-5">
							<small className="text-default-500">Price</small>
							<span className="text-[32px] font-normal leading-none mt-1">
								<span className="text-[24px]">$</span>50.340,345
							</span>
						</div>
					</div>
				</div>

				<div className="flex-1 relative border-t-1 border-divider">
					<div className="w-full h-full absolute inset-0 p-6">
						<div className="w-full h-full">
							<Table aria-label="Example table with custom cells">
								<TableHeader columns={columns}>
									{(column) => (
										<TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
											{column.name}
										</TableColumn>
									)}
								</TableHeader>
								<TableBody items={users}>
									{(item) => (
										<TableRow key={item.id}>
											{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
										</TableRow>
									)}
								</TableBody>
							</Table>
						</div>
					</div>
					<div className="h-full w-full absolute bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(0deg,#000_5%,transparent_65%)]"></div>
				</div>
			</div>

			<Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								<Input
									aria-label="Search"
									classNames={{
										inputWrapper: 'bg-default-100',
										input: 'text-sm',
									}}
									autoFocus
									labelPlacement="outside"
									placeholder="Search..."
									startContent={<Search width={17} className=" text-default-400 pointer-events-none flex-shrink-0" />}
									type="search"
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
								<Button color="danger" variant="flat" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
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

export const MailIcon = (props) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
			fill="currentColor"
		/>
	</svg>
)

export const LockIcon = (props) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
			fill="currentColor"
		/>
		<path
			d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
			fill="currentColor"
		/>
	</svg>
)

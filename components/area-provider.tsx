import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { ArrowUpRight, Plus } from 'lucide-react'

export default function AreaProvider() {
	return (
		<div className="w-full h-full border-r-1 border-divider">
			<div className="w-full items-center flex justify-between px-5 pl-6 pt-5">
				<span className="font-bold">Providers</span>
				<Button variant="light" size="sm" className="p-1 min-w-0 h-fit aspect-square">
					<Plus width={16} />
				</Button>
			</div>

			<div className="w-full flex gap-3 flex-col p-4">
				<Card className="py-2 border-none bg-background hover:bg-content1 pb-4 group">
					<CardHeader className="pb-0 relative flex w-full pt-2 px-4 gap-4 items-start">
						<figure className="w-[44px] bg-default-50 rounded-lg aspect-square p-1.5 animate-appearance-in group-hover:bg-[#E7DBFE]">
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
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z"
									fill="white"
								/>
							</svg>
						</figure>
						<div>
							<p className=" text-sm font-semibold">Pyth Network</p>
							<small className="text-default-500">12 Pairs</small>
						</div>
						<Button
							variant="light"
							size="sm"
							className="absolute top-0 text-default-500 right-2 p-1 min-w-0 h-fit aspect-square"
						>
							<ArrowUpRight width={16} className="" />
						</Button>
					</CardHeader>
					<CardBody className="px-4 pb-0">
						<Chip size="sm" className="py-0 leading-none h-5">
							Cross-chain
						</Chip>
					</CardBody>
				</Card>

				<Card className="py-2 border-none bg-background hover:bg-content1 pb-4 group">
					<CardHeader className="pb-0 relative flex w-full pt-2 px-4 gap-4 items-start">
						<figure className="w-[44px] bg-default-50 rounded-lg aspect-square p-1.5 animate-appearance-in group-hover:bg-[#E7DBFE]">
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
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z"
									fill="white"
								/>
							</svg>
						</figure>
						<div>
							<p className=" text-sm font-semibold">Switchboard</p>
							<small className="text-default-500">12 Pairs</small>
						</div>
						<Button
							variant="light"
							size="sm"
							className="absolute top-0 text-default-500 right-2 p-1 min-w-0 h-fit aspect-square"
						>
							<ArrowUpRight width={16} className="" />
						</Button>
					</CardHeader>
					<CardBody className="px-4 pb-0">
						<Chip size="sm" className="py-0 leading-none h-5">
							Cross-chain
						</Chip>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}

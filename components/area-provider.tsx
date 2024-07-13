import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { cn } from '@nextui-org/theme'
import { ArrowUpRight, Plus } from 'lucide-react'
import Link from 'next/link'
import Credit from './credit'

export const PROVIDERS = {
  chainlink: {
    id: 'chainlink',
    name: 'Chainlink',
    pairs: 1,
    chain: ['cross-chain'],
    logo: (
      <svg className='h-full w-full' width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title> </title>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M50.024 25.5863L29.269 37.8855V61.7061L50.024 73.6209L70.779 61.706V37.8855L50.024 25.5863ZM85.048 29.755L50.024 9L15 29.755V69.9677L50.024 90.0741L85.048 69.9677V29.755Z'
          fill='white'
        />
      </svg>
    ),
    brandColor: '#0B48F7',
    website: 'https://chain.link/',
    tag: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <title>{}</title>
        <path
          d='M11.8903 0.644C10.0379 1.936 8.46667 3.909 7.58667 6.007C6.99487 5.972 6.4 6.085 5.85128 6.349C3.84308 7.297 2.12923 9.737 2.00923 13.781C2.00205 13.871 2 14.01 2 14.249C2 19.628 6.48308 23.999 12 23.999C17.5292 23.984 22 19.621 22 14.249C22 14.108 21.9928 13.956 21.9815 13.755C21.9774 13.695 21.9774 13.695 21.9744 13.637C21.9662 13.509 21.9579 13.394 21.9518 13.309C21.7426 10.656 20.8462 8.735 19.1744 6.488C19.0472 6.316 18.9477 6.185 18.7292 5.898C18.3662 5.422 18.2174 5.223 18.0554 4.991C17.5467 4.264 17.3846 3.856 17.3846 3.376C17.3846 2.111 16.6595 0.955 15.5097 0.376C15.0103 0.124 14.4667 0 13.9231 0C13.2072 0 12.4944 0.216 11.8903 0.644Z'
          fill='white'
        />
        <path
          d='M13.6997 3.07C12.0013 4.256 10.5848 6.253 10.0884 8.158C9.74484 9.485 9.69971 10.976 9.69356 11.962C8.12433 11.635 7.76946 9.347 7.76535 9.323C7.74792 9.204 7.67407 9.1 7.56535 9.044C7.45561 8.988 7.3274 8.984 7.21664 9.037C7.13458 9.076 5.19817 10.036 5.08535 13.867C5.07715 13.995 5.07715 14.122 5.07715 14.249C5.07715 17.971 8.18279 20.999 12.0002 20.999C15.8279 20.989 18.9233 17.965 18.9233 14.249C18.9233 14.062 18.8833 13.538 18.8833 13.538C18.672 10.854 17.39 9.172 16.2597 7.688C15.2125 6.313 14.3079 5.126 14.3079 3.376C14.3079 3.235 14.2269 3.106 14.0997 3.042C14.0433 3.014 13.9828 3 13.9223 3C13.8433 3 13.7654 3.024 13.6997 3.07Z'
          fill='url(#paint0_linear_750_8375)'
        />
        <path
          d='M11.6372 13.206C11.4454 13.985 11.4311 14.847 11.4311 15.595C11.4311 15.885 11.19 16.12 10.8916 16.12C9.98492 16.12 9.42594 15.518 9.11415 14.864C8.94697 15.219 8.79517 15.751 8.77363 16.532C8.76953 16.609 8.76953 16.673 8.76953 16.736C8.76953 18.587 10.2188 20.091 12.0003 20.091C13.7818 20.091 15.2311 18.587 15.2311 16.736C15.2311 16.638 15.2239 16.548 15.2177 16.458C15.1049 14.936 14.4608 14.043 13.8372 13.18C13.4013 12.576 12.9562 11.958 12.7265 11.194C12.2126 11.783 11.8065 12.517 11.6372 13.206Z'
          fill='#FFD753'
        />
        <defs>
          <linearGradient id='paint0_linear_750_8375' x1='20.6541' y1='28.8736' x2='6.24228' y2='2.92092' gradientUnits='userSpaceOnUse'>
            <stop stop-color='#FF002C' />
            <stop offset='1' stop-color='#FFCE00' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  pyth: {
    id: 'pyth-network',
    name: 'Pyth Network',
    pairs: 12,
    chain: ['cross-chain'],
    logo: (
      <svg className='h-full w-full' width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title> </title>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M24.2677 40.1743H15V66.7677L24.2677 76.1498V40.1743Z' fill='white' />
        <path fill-rule='evenodd' clip-rule='evenodd' d='M41.6446 40.7539H32.377V84.3591L41.6446 93.7413V40.7539Z' fill='white' />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M58.4423 40.4644C58.4423 45.1029 54.682 48.8632 50.0435 48.8632C49.9465 48.8632 49.8499 48.8616 49.7537 48.8583V58.1286C49.8501 58.1302 49.9467 58.1309 50.0435 58.1309C59.8005 58.1309 67.71 50.2214 67.71 40.4644C67.71 30.7074 59.8005 22.7979 50.0435 22.7979C40.2865 22.7979 32.377 30.7074 32.377 40.4644C32.377 47.1812 36.1254 53.0225 41.6444 56.0105V40.754H41.6495C41.6463 40.6579 41.6446 40.5613 41.6446 40.4644C41.6446 35.8258 45.4049 32.0655 50.0435 32.0655C54.682 32.0655 58.4423 35.8258 58.4423 40.4644Z'
          fill='white'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M49.7538 66.24C63.8295 66.24 75.24 54.8295 75.24 40.7538C75.24 26.6782 63.8295 15.2677 49.7538 15.2677C35.6782 15.2677 24.2677 26.6782 24.2677 40.7538C24.2677 41.3379 24.2873 41.9173 24.326 42.4915H24.2677V64.3821C18.5163 58.1814 15 49.8783 15 40.7538C15 21.5598 30.5598 6 49.7538 6C68.9479 6 84.5077 21.5598 84.5077 40.7538C84.5077 59.9479 68.9479 75.5077 49.7538 75.5077C49.7535 75.5077 49.7532 75.5077 49.7529 75.5077V66.24C49.7532 66.24 49.7535 66.24 49.7538 66.24ZM41.6436 64.9225C38.1573 63.753 35.0073 61.8503 32.3769 59.3976V70.8582C35.2336 72.5108 38.3474 73.7684 41.6436 74.5563V64.9225Z'
          fill='white'
        />
      </svg>
    ),
    brandColor: '#E7DBFE',
    website: 'https://pyth.network/',
    tag: (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <title>{}</title>
        <path
          d='M11.8903 0.644C10.0379 1.936 8.46667 3.909 7.58667 6.007C6.99487 5.972 6.4 6.085 5.85128 6.349C3.84308 7.297 2.12923 9.737 2.00923 13.781C2.00205 13.871 2 14.01 2 14.249C2 19.628 6.48308 23.999 12 23.999C17.5292 23.984 22 19.621 22 14.249C22 14.108 21.9928 13.956 21.9815 13.755C21.9774 13.695 21.9774 13.695 21.9744 13.637C21.9662 13.509 21.9579 13.394 21.9518 13.309C21.7426 10.656 20.8462 8.735 19.1744 6.488C19.0472 6.316 18.9477 6.185 18.7292 5.898C18.3662 5.422 18.2174 5.223 18.0554 4.991C17.5467 4.264 17.3846 3.856 17.3846 3.376C17.3846 2.111 16.6595 0.955 15.5097 0.376C15.0103 0.124 14.4667 0 13.9231 0C13.2072 0 12.4944 0.216 11.8903 0.644Z'
          fill='white'
        />
        <path
          d='M13.6997 3.07C12.0013 4.256 10.5848 6.253 10.0884 8.158C9.74484 9.485 9.69971 10.976 9.69356 11.962C8.12433 11.635 7.76946 9.347 7.76535 9.323C7.74792 9.204 7.67407 9.1 7.56535 9.044C7.45561 8.988 7.3274 8.984 7.21664 9.037C7.13458 9.076 5.19817 10.036 5.08535 13.867C5.07715 13.995 5.07715 14.122 5.07715 14.249C5.07715 17.971 8.18279 20.999 12.0002 20.999C15.8279 20.989 18.9233 17.965 18.9233 14.249C18.9233 14.062 18.8833 13.538 18.8833 13.538C18.672 10.854 17.39 9.172 16.2597 7.688C15.2125 6.313 14.3079 5.126 14.3079 3.376C14.3079 3.235 14.2269 3.106 14.0997 3.042C14.0433 3.014 13.9828 3 13.9223 3C13.8433 3 13.7654 3.024 13.6997 3.07Z'
          fill='url(#paint0_linear_750_8375)'
        />
        <path
          d='M11.6372 13.206C11.4454 13.985 11.4311 14.847 11.4311 15.595C11.4311 15.885 11.19 16.12 10.8916 16.12C9.98492 16.12 9.42594 15.518 9.11415 14.864C8.94697 15.219 8.79517 15.751 8.77363 16.532C8.76953 16.609 8.76953 16.673 8.76953 16.736C8.76953 18.587 10.2188 20.091 12.0003 20.091C13.7818 20.091 15.2311 18.587 15.2311 16.736C15.2311 16.638 15.2239 16.548 15.2177 16.458C15.1049 14.936 14.4608 14.043 13.8372 13.18C13.4013 12.576 12.9562 11.958 12.7265 11.194C12.2126 11.783 11.8065 12.517 11.6372 13.206Z'
          fill='#FFD753'
        />
        <defs>
          <linearGradient id='paint0_linear_750_8375' x1='20.6541' y1='28.8736' x2='6.24228' y2='2.92092' gradientUnits='userSpaceOnUse'>
            <stop stop-color='#FF002C' />
            <stop offset='1' stop-color='#FFCE00' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
}

export default function AreaProvider() {
  return (
    <div className='flex h-full w-full flex-col justify-between border-divider border-r-1'>
      <div className='flex flex-col'>
        <div className='flex w-full items-center justify-between px-5 pt-5 pl-6'>
          <span className='font-bold'>Providers</span>
          <Button variant='light' size='sm' className='aspect-square h-fit min-w-0 p-1'>
            <Plus width={16} />
          </Button>
        </div>

        <div className='flex w-full flex-col gap-3 p-4'>
          {Object.values(PROVIDERS).map((provider) => (
            <Card key={provider.id} className='group border-none bg-background py-2 pb-4 hover:bg-content1'>
              <CardHeader className='relative flex w-full items-start gap-4 px-4 pt-2 pb-0'>
                <figure className={cn('aspect-square w-[44px] animate-appearance-in rounded-lg bg-default-50 p-1.5 ')}>{provider.logo}</figure>
                <div>
                  <p className=' font-semibold text-sm'>{provider.name}</p>
                  <small className='text-default-500'>{provider.pairs} Pairs</small>
                </div>
                <Link href={provider.website} target='_blank'>
                  <Button variant='light' size='sm' className='absolute top-0 right-2 aspect-square h-fit min-w-0 p-1 text-default-500'>
                    <ArrowUpRight width={16} className='' />
                  </Button>
                </Link>
              </CardHeader>
              <CardBody className='px-4 pb-0'>
                {provider.chain.length > 3 ? (
                  <>
                    {provider.chain.map((chain) => (
                      <Chip key={chain} size='sm' className='h-5 py-0 leading-none'>
                        {chain}
                      </Chip>
                    ))}
                  </>
                ) : (
                  <Chip size='sm' className='h-5 py-0 leading-none'>
                    Cross-chain
                  </Chip>
                )}

                <figure className='absolute right-3 bottom-0'>{provider.tag}</figure>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <div className='w-full p-5 pb-6 '>
        <Credit />
      </div>
    </div>
  )
}

export type Service = {
  id: string
  label: string
  icon: string
}

export type ServiceId = (typeof services)[number]['id']

export const services = [
  {
    id: 'trending-services',
    label: 'trending services',
    icon: '/trending-services.svg'
  },
  {
    id: 'voting-services',
    label: 'voting services',
    icon: '/voting-services.svg'
  },
  {
    id: 'listing-services',
    label: 'listing services',
    icon: '/listing-services.svg'
  },
  {
    id: 'crypto-influencers-service',
    label: 'crypto influencers service',
    icon: '/crypto-influencers-service.svg'
  },
  {
    id: 'crypto-social-media',
    label: 'crypto social media',
    icon: '/crypto-social-media.svg'
  },

  {
    id: 'hot',
    label: 'Hot 🔥',
    icon: '/hot.svg'
  },
  {
    id: 'crypto-ads',
    label: 'Crypto ADS',
    icon: '/crypto-ads.svg'
  },
  {
    id: 'ico-services',
    label: 'ICO Services',
    icon: '/ico-services.svg'
  },
  {
    id: 'cex-listings',
    label: 'CEX Listings',
    icon: '/cex-listings.svg'
  },
  {
    id: 'press-releases-articles',
    label: 'Press Releases & Articles',
    icon: '/press-releases-articles.svg'
  }
] as const

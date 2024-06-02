import { type StaticImageData } from 'next/image'

export interface TeamLeads {
  title: string
  cards: TeamLeadCard[]
}

export interface TeamLeadCard {
  name: string
  texts: string[]
  image: StaticImageData
  altText: string
}

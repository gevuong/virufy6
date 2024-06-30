import { type Section } from './OurStory'

export interface Publications {
  publicationsSection: Section
  publicationsCards: PublicationCard[]
  coughSection: PublicationsCoughSection
}

export interface PublicationCard {
  title: string
  date: string
  url: string
  linkText: string
}

interface PublicationsCoughSection {
  title: string
  linkText: string
}

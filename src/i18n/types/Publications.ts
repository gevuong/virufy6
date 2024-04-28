import { type Section } from './AboutUs'

export interface Publications {
  publicationsSection: Section
  publicationCards: PublicationCard[]
  coughSection: PublicationsCoughSection
}

export interface PublicationCard {
  title: string
  date: string
  url: string
  linkText: string
}

interface PublicationsCoughSection extends Section {
  linkText: string
}

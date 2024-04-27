import { type StaticImageData } from 'next/image'

export interface AboutUs {
  aboutUsSection: AboutUsSection
  storySection: StorySection
  valuesSection: ValuesSection
  privacySection: PrivacySection
}

interface ValuesSection {
  title: string
  cards: ValuesCard[]
}

export interface ValuesCard {
  title: string
  image: StaticImageData
  imageText: string
  text: string
}

interface Section {
  title: string
  texts: string[]
}

interface StorySection {
  title: string
  texts: StorySectionText[][]
}

interface StorySectionText {
  type: 'text' | 'link'
  text: string
  url?: string
}

type AboutUsSection = Section
type PrivacySection = Section

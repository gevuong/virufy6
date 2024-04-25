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

interface ValuesCard {
  title: string
  card: StaticImageData
  text: string
}

interface Section {
  title: string
  texts: string[]
}

type AboutUsSection = Section
type StorySection = Section
type PrivacySection = Section

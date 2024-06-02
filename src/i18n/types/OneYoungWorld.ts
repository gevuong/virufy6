import { type StaticImageData } from 'next/image'

export interface OneYoungWorld {
  header: HeaderSection
  oneYoungWorld: OneYoungWorldSection
}

interface HeaderSection {
  text: string
  image: StaticImageData
  altText: string
}

// One Young World
export interface OneYoungWorldSection {
  backgroundImage: StaticImageData
  altText: string
  virufyAndOyw: VirufyAndOywSection
  whyOyw: WhyOywSection
  volunteerStories: VolunteerStoriesSection
}

interface VirufyAndOywSection {
  title: string
  texts: string[]
  videoUrl: string
}

// Why One Young World
interface WhyOywSection {
  title: string
  cards: OywCard[]
}

interface OywCard {
  title: string
  text: string
  image: StaticImageData
  altText: string
}

// Volunteer Stories
interface VolunteerStoriesSection {
  title: string
  text: string
  testimonials: Testimonial[]
}

export interface Testimonial {
  name: string
  origin: string
  image: StaticImageData
  altText: string
  testimonial: string
}

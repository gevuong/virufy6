import { type StaticImageData } from 'next/image'

export interface OneYoungWorld {
  header: HeaderSection
  oneYoungWorld: OneYoungWorldSection
  teamLeads: TeamLeadsSection
}

interface HeaderSection {
  text: string
  image: StaticImageData
  altText: string
}

// One Young World
export interface OneYoungWorldSection {
  virufyAndOyw: VirufyAndOywSection
  whyOyw: WhyOywSection
  volunteerStories: VolunteerStoriesSection
}

interface VirufyAndOywSection {
  title: string
  texts: string[]
  videoUrl: string
}

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

// Team Leads
export interface TeamLeadsSection {
  title: string
  cards: TeamLeadCard[]
}

export interface TeamLeadCard {
  name: string
  texts: string[]
  image: StaticImageData
  altText: string
}

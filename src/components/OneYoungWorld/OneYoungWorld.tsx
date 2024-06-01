import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import TestimonialCarousel from '~/components/Carousel/TestimonialCarousel'
import {
  AmbassadorIcon,
  DiverseIcon,
  GlobeIcon,
  YouthIcon,
} from '../../assets/static/images/oneYoungWorld/index'
import {
  type OneYoungWorldSection,
  type TeamLeadsSection,
} from '../../i18n/types/OneYoungWorld'
import TeamLeads from './TeamLeads'

interface Props {
  oneYoungWorld: OneYoungWorldSection
  teamLeads: TeamLeadsSection
}

export const OneYoungWorld = ({ oneYoungWorld, teamLeads }: Props) => {
  const [showTeamLeads, setShowTeamLeads] = useState(false)

  return (
    <>
      {/* only show background image in One Young World tab */}
      {!showTeamLeads && (
        <Image
          src={oneYoungWorld.backgroundImage}
          alt=""
          className="hidden md:absolute md:block md:h-full md:w-full md:object-cover md:opacity-30"
          priority
        />
      )}

      {/* Navbar Container */}
      <nav className="font-medium text-white md:pt-2 md:opacity-95">
        <ul className="m-0 flex cursor-pointer justify-around border-b border-t border-gray-500 p-0 text-center md:items-center md:justify-center md:gap-x-24 md:border-none md:font-semibold">
          <li
            className={`w-1/2 py-4 md:w-auto md:bg-inherit md:text-xl ${
              showTeamLeads
                ? 'md:border-b-2 md:border-transparent'
                : 'bg-green-800 font-bold md:border-b-2 md:border-[#30DA74] md:font-semibold'
            }`}
            onClick={() => setShowTeamLeads(false)}
          >
            One Young World
          </li>
          <li
            className={`w-1/2 py-4 md:w-auto md:bg-inherit md:text-xl ${
              showTeamLeads
                ? 'bg-green-800 font-bold md:border-b-2 md:border-[#30DA74] md:font-semibold'
                : 'md:border-b-2 md:border-transparent'
            }`}
            onClick={() => setShowTeamLeads(true)}
          >
            Team Leads
          </li>
        </ul>
      </nav>

      {showTeamLeads ? (
        <TeamLeads {...teamLeads} />
      ) : (
        <div className="mx-auto max-w-5xl">
          {/* One Young World Section */}
          <section>
            {/* OYW Container */}
            <div className="flex flex-col items-center justify-center px-8 py-12 text-white opacity-95 md:py-20">
              {/* Virufy & OYW Text Container */}
              <div>
                <h1 className="hidden md:mb-4 md:block md:text-5xl md:text-[#3074dc]">
                  One Young World
                </h1>
                <h2 className="mb-8 text-center text-2xl font-bold md:text-left md:text-3xl md:font-medium">
                  Virufy & One Young World
                </h2>

                {/* Text Container */}
                <div className="mb-12 space-y-8">
                  <p className="text-sm font-medium leading-relaxed md:text-base">
                    Our world needs great leadership. The new generation is one
                    of the most informed, educated and well connected
                    generations in world history. One Young World identifies,
                    promotes and connects the most impactful young leaders
                    across the globe to create a better world: a world with more
                    responsible and effective leadership.
                  </p>
                  <p className="text-sm font-medium leading-relaxed md:text-base">
                    Virufy has been featured on various OYW platforms, including
                    in the Americas and Japan, ambassadors in action , and
                    ambassadors on the frontline for COVID-19 response . We are
                    also collaborating with OYW coordinating ambassadors across
                    various regions for outreach efforts.
                  </p>
                </div>
              </div>

              {/* Video */}
              {/* <iframe
                className="mb-12 rounded-lg lg:h-[577px] lg:w-[904px]"
                src="https://www.youtube.com/watch?v=hvJgwPNYnZo"
              /> */}
              {/* <div className="">
                <ReactPlayer
                  controls
                  // pip
                  width=""
                  height=""
                  url="https://www.youtube.com/watch?v=hvJgwPNYnZo"
                />
              </div> */}
            </div>
          </section>

          {/* Horizontal divider */}
          <div className="mx-8 border-b border-b-white pb-12 md:hidden"></div>

          {/* Why OYW Section */}
          <section className="mb-16 md:opacity-95">
            {/* Why OYW Container */}
            <div className="mx-8 flex flex-col text-white">
              <h2 className="my-14 text-center text-2xl font-bold md:my-10 md:text-left md:text-3xl md:font-medium">
                Why One Young World?
              </h2>

              {/* Card Container */}
              <div className="space-y-16 rounded-2xl bg-[#3578de4f] py-10 pr-4 font-medium md:grid md:grid-cols-2 md:gap-12 md:space-y-0 md:space-x-0 md:bg-inherit md:py-0">
                {/* Ambassador Container */}
                <div className="flex justify-center space-x-2">
                  <Image
                    className="my-auto h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
                    src={AmbassadorIcon}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl">Ambassador driven</h3>
                    <p className="text-sm md:text-base">
                      Our organization structure matches One Young World with
                      youth ambassadors leading operations in each country, with
                      regional coordinating ambassadors.
                    </p>
                  </div>
                </div>

                {/* Youth Container */}
                <div className="flex justify-center space-x-2">
                  <Image
                    className="my-auto h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
                    src={YouthIcon}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl">Youth led</h3>
                    <p className="text-sm md:text-base">
                      Our growing team is led by youth from over a dozen
                      countries and are advised by global leaders.
                    </p>
                  </div>
                </div>

                {/* Global Impact Container */}
                <div className="flex justify-center space-x-2">
                  <Image
                    className="my-auto h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
                    src={GlobeIcon}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl">
                      Focused on global impact
                    </h3>
                    <p className="text-sm md:text-base">
                      Collect data and provide equitable solutions for people in
                      developing countries across the world.
                    </p>
                  </div>
                </div>

                {/* Diverse Container */}
                <div className="flex justify-center space-x-2">
                  <Image
                    className="my-auto h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
                    src={DiverseIcon}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl">
                      Diverse representation
                    </h3>
                    <p className="text-sm md:text-base">
                      Our team has representation from over 25 universities and
                      15 countries and includes more than 10 One Young World
                      ambassadors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Horizontal divider */}
          <div className="mx-8 border-b border-b-white md:opacity-95"></div>

          {/* Volunteer Section */}
          <section className="pb-14 md:opacity-95">
            {/* Volunteer Container */}
            <div className="mx-8 flex flex-col items-center space-y-10 text-white lg:pt-12">
              {/* Title and Text Container */}
              <div className="md:pb-12">
                <h2 className="my-12 text-center text-2xl font-bold md:mb-6 md:mt-16 md:text-left md:text-3xl md:font-medium">
                  Volunteer Stories
                </h2>
                <p className="text-sm font-medium leading-relaxed md:text-base">
                  Our team is led by students dedicated to social good from
                  reputable institutions like Stanford, Princeton, and One Young
                  World. We have strong trust in members of the One Young World
                  community and warmly welcome any ambassadors interested to
                  pitch in.
                </p>
              </div>

              {/* Carousel Container */}
              <TestimonialCarousel
                testimonials={oneYoungWorld.volunteerStories.testimonials}
              />

              <Link
                className="w-auto rounded-full bg-gradient-to-b from-[#38b76b] to-[#3578de] px-6 py-4 text-sm font-medium md:py-4 md:px-12 md:text-base"
                href="#"
              >
                Join our Team
              </Link>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

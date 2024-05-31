import Image from 'next/image'
import Video from '~/components/atoms/videoAtom/Video'
import { useState } from 'react'
import TestimonialCarousel from '~/components/Carousel/TestimonialCarousel'
import {
  type OneYoungWorldSection,
  type TeamLeadsSection,
} from '../../i18n/types/OneYoungWorld'
import {
  AmbassadorIcon,
  YouthIcon,
  GlobeIcon,
  DiverseIcon,
} from '../../assets/static/images/oneYoungWorld/index'
import TeamLeads from './TeamLeads'

interface Props {
  oneYoungWorld: OneYoungWorldSection
  teamLeads: TeamLeadsSection
}

export const OneYoungWorld = ({ oneYoungWorld, teamLeads }: Props) => {
  const [showTeamLeads, setShowTeamLeads] = useState(false)

  return (
    <>
      {/* Navbar Container */}
      <nav className="pt-4 font-medium text-white">
        <ul className="m-0 flex cursor-pointer justify-around border-b border-t border-gray-500 p-0 text-center md:items-center md:justify-center md:gap-x-24 md:border-none md:font-semibold">
          <li
            className={`w-1/2 py-4 md:w-auto md:bg-inherit md:text-2xl ${
              showTeamLeads
                ? ''
                : 'bg-green-800 font-bold md:border-b-2 md:border-[#30DA74] md:font-semibold'
            }`}
            onClick={() => setShowTeamLeads(false)}
          >
            One Young World
          </li>
          <li
            className={`w-1/2 py-4 md:w-auto md:bg-inherit md:text-2xl ${
              showTeamLeads
                ? 'bg-green-800 font-bold md:border-b-2 md:border-[#30DA74] md:font-semibold'
                : ''
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
        <div>
          {/* One Young World Section */}
          <section>
            <div className="flex flex-col items-center justify-center px-8 text-white opacity-95">
              <h2 className="my-12 text-center text-2xl font-bold">
                Virufy & One Young World
              </h2>

              {/* Text Container */}
              <div className="mb-12 space-y-8">
                <p className="text-sm font-medium leading-normal">
                  Our world needs great leadership. The new generation is one of
                  the most informed, educated and well connected generations in
                  world history. One Young World identifies, promotes and
                  connects the most impactful young leaders across the globe to
                  create a better world: a world with more responsible and
                  effective leadership.
                </p>
                <p className="text-sm font-medium leading-normal">
                  Virufy has been featured on various OYW platforms, including
                  in the Americas and Japan, ambassadors in action , and
                  ambassadors on the frontline for COVID-19 response . We are
                  also collaborating with OYW coordinating ambassadors across
                  various regions for outreach efforts.
                </p>
              </div>

              {/* Video */}
              <iframe
                className="mb-12 rounded-lg"
                src="https://www.youtube.com/watch?v=hvJgwPNYnZo"
              />
              <Video
                width="285px"
                height="182px"
                url="https://www.youtube.com/watch?v=hvJgwPNYnZo"
              />
            </div>
          </section>

          {/* Horizontal divider */}
          <div className="mx-8 border-b border-b-white pb-12"></div>

          {/* Why OYW Section */}
          <section className="mb-12">
            {/* Why OYW Container */}
            <div className="mx-8 flex flex-col text-white">
              <h2 className="my-12 text-center text-2xl font-bold">
                Why One Young World?
              </h2>

              {/* Card Container */}
              <div className="space-y-16 rounded-2xl bg-[#3578DE4F] py-10 pr-4 font-medium">
                {/* Ambassador Container */}
                <div className="flex items-center justify-center space-x-2">
                  <Image
                    className="h-[80px] w-[80px]"
                    src={AmbassadorIcon}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg">Ambassador driven</h3>
                    <p className="text-sm">
                      Our organization structure matches One Young World with
                      youth ambassadors leading operations in each country, with
                      regional coordinating ambassadors.
                    </p>
                  </div>
                </div>

                {/* Youth Container */}
                <div className="flex items-center justify-center space-x-2">
                  <Image className="h-[80px] w-[80px]" src={YouthIcon} alt="" />
                  <div className="space-y-4">
                    <h3 className="text-lg">Youth led</h3>
                    <p className="text-sm">
                      Our growing team is led by youth from over a dozen
                      countries and are advised by global leaders.
                    </p>
                  </div>
                </div>

                {/* Global Impact Container */}
                <div className="flex items-center justify-center space-x-2">
                  <Image className="h-[80px] w-[80px]" src={GlobeIcon} alt="" />
                  <div className="space-y-4">
                    <h3 className="text-lg">Focused on global impact</h3>
                    <p className="text-sm">
                      Collect data and provide equitable solutions for people in
                      developing countries across the world.
                    </p>
                  </div>
                </div>

                {/* Diverse Container */}
                <div className="flex items-center justify-center space-x-2">
                  <Image
                    className="h-[80px] w-[80px]"
                    src={DiverseIcon}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg">Diverse representation</h3>
                    <p className="text-sm">
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
          <div className="mx-8 border-b border-b-white"></div>

          {/* Volunteer Section */}
          <section className="pb-16">
            {/* Volunteer Container */}
            <div className="mx-8 flex flex-col items-center space-y-10 text-white">
              {/* Title and Text Container */}
              <div>
                <h2 className="my-10 text-center text-2xl font-bold">
                  Volunteer Stories
                </h2>
                <p className="text-sm">
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
            </div>
          </section>
        </div>
      )}
    </>
  )
}

import Image from 'next/image'
import {
  LoopIcon,
  GlobeIcon,
  HeartRhythmIcon,
  TeamIcon,
  FingerSnapIcon,
  PhoneInHandIcon,
} from '~/assets/static/images/aboutUs/index'

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-black to-[#2e5790]">
      {/* Story Section */}
      <section>
        {/* Story Container */}
        <div className="mx-auto max-w-2xl space-y-10 py-32 px-12 text-center text-white lg:text-left">
          <h2 className="text-5xl">Our Story</h2>
          {/* Text Container */}
          <div className="space-y-6">
            <p>
              When the pandemic hit, Virufy’s founder, Amil Khanzada, knew
              smartphones were omnipresent and that COVID impacted the nose,
              throat, and lungs.
            </p>
            <p>
              He hypothesized that breathing and cough sounds could be analyzed
              with machine learning to detect COVID patterns.
            </p>
            <p>
              Wanting to make a positive impact, he orchestrated a clinical
              study with 362 patients in an esteemed university hospital. The
              original team of Virufy, beginning with Stanford graduate AI
              students, expanded to volunteers from universities globally.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        {/* Values Container */}
        <div className="pb-40">
          <h2 className="mb-10 px-12 text-center text-5xl text-white">
            Our Values
          </h2>

          {/* Cards Container */}
          <div className="flex flex-col items-center space-y-10 px-8">
            {/* Card 1 Container */}
            <div className="w-full rounded-xl bg-[#15253d] px-14 py-10">
              {/* Title Container */}
              <div className="mb-4 flex items-center space-x-2 lg:mb-0">
                <h3 className="text-2xl font-semibold text-[#3686ff]">
                  Transformation
                </h3>
                <Image alt="asdf" src={LoopIcon} width={35} height={35} />
              </div>
              <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                ___
              </p>
              <p className="max-w-md text-white">
                We aim to transform expensive healthcare systems by using
                technology to drive necessary changes.
              </p>
            </div>

            {/* Card 2 Container */}
            <div className="w-full rounded-xl bg-[#15253d] px-14 py-10">
              {/* Title Container */}
              <div className="mb-4 flex items-center space-x-2 lg:mb-0">
                <h3 className="text-2xl font-semibold text-[#3686ff]">
                  Collaboration
                </h3>
                <Image alt="asdf" src={GlobeIcon} width={35} height={35} />
              </div>
              <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                ___
              </p>
              <p className="max-w-md text-white">
                We commit to making rapid disease detection available to every
                person in the world, regardless of background.
              </p>
            </div>

            {/* Card 3 Container */}
            <div className="w-full rounded-xl bg-[#15253d] px-14 py-10">
              {/* Title Container */}
              <div className="mb-4 flex items-center space-x-2 lg:mb-0">
                <h3 className="text-2xl font-semibold text-[#3686ff]">
                  Health
                </h3>
                <Image
                  alt="asdf"
                  src={HeartRhythmIcon}
                  width={35}
                  height={35}
                />
              </div>
              <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                ___
              </p>
              <p className="max-w-md text-white">
                We commit to always putting the health and well-being of all
                people across the globe first and foremost.
              </p>
            </div>

            {/* Card 4 Container */}
            <div className="w-full rounded-xl bg-[#15253d] px-14 py-10">
              {/* Title Container */}
              <div className="mb-4 flex items-center space-x-2 lg:mb-0">
                <h3 className="text-2xl font-semibold text-[#3686ff]">
                  Affordability
                </h3>
                <Image alt="asdf" src={TeamIcon} width={35} height={35} />
              </div>
              <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                ___
              </p>
              <p className="max-w-md text-white">
                We aim to use technology to make disease prevention and
                detection free for all people around the world
              </p>
            </div>

            {/* Card 5 Container */}
            <div className="w-full rounded-xl bg-[#15253d] px-14 py-10">
              {/* Title Container */}
              <div className="mb-4 flex items-center space-x-2 lg:mb-0">
                <h3 className="text-2xl font-semibold text-[#3686ff]">
                  Efficiency
                </h3>
                <Image alt="asdf" src={FingerSnapIcon} width={35} height={35} />
              </div>
              <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                ___
              </p>
              <p className="max-w-md text-white">
                We commit to always putting the health and well-being of all
                people across the globe first and foremost.
              </p>
            </div>

            {/* Card 6 Container */}
            <div className="w-full rounded-xl bg-[#15253d] px-14 py-10">
              {/* Title Container */}
              <div className="mb-4 flex items-center space-x-2 lg:mb-0">
                <h3 className="text-2xl font-semibold text-[#3686ff]">
                  Innovation
                </h3>
                <Image
                  alt="asdf"
                  src={PhoneInHandIcon}
                  width={35}
                  height={35}
                />
              </div>
              <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                ___
              </p>
              <p className="max-w-md text-white">
                We aim to use technology to make disease prevention and
                detection free for all people around the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section>
        {/* Privacy Container */}
        <div className="mx-auto max-w-2xl px-12 pb-40 text-center">
          <h2 className="mb-10 text-5xl text-white">Commitment to Privacy</h2>
          <p className="leading-10 text-white">
            Virufy takes the privacy and protection of your personal information
            seriously. Our legal team has prepared a detailed Privacy Policy and
            Cookie Policy to protect the personal information you share with us
            through use of our website.
          </p>
        </div>
      </section>
    </div>
  )
}

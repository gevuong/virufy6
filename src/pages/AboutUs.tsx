import Image from 'next/image'
import {
  LoopIcon,
  GlobeIcon,
  HeartRhythmIcon,
  TeamIcon,
  FingerSnapIcon,
  PhoneInHandIcon,
  MaskHeader,
  HalfToneDots,
} from '~/assets/static/images/aboutUs/index'

export default function AboutUs() {
  return (
    <div>
      <section className="h-[52vh]">
        {/* About Us Container */}
        <div className="absolute top-0 left-0 h-[60vh] w-full bg-gradient-to-b from-black to-[#162b4c]">
          <Image
            className="h-full w-full object-cover opacity-40"
            src={MaskHeader}
            alt="image of a person wearing face mask"
          />

          {/* Text Position Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:right-56">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl space-y-6 px-10 text-center font-medium text-white lg:max-w-2xl lg:text-left">
              <h2 className="text-5xl font-normal">About Us</h2>
              <p>
                Our innovative approach aims to offer superior COVID
                pre-screening for patients, clinicians and governments,
                especially in low-income countries.
              </p>
              <p>
                We aspire to be the leading nonprofit organization for
                technology - enabled disease identification, transforming global
                healthcare and inspiring others to support and invest in this
                mission with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <Image
          src={HalfToneDots}
          alt="background with dots"
          className="absolute h-full w-full object-cover opacity-40"
        />

        {/* Story, Values, Privacy Container */}
        <div className="py-40">
          {/* Story Section */}
          <div className="">
            <section className="mb-40">
              {/* Story Container */}
              <div className="relative flex items-center justify-center lg:right-28">
                {/* Sizing & Spacing Container */}
                <div className="max-w-xl space-y-6 px-10 text-center font-medium text-white opacity-95 lg:max-w-2xl lg:text-left">
                  <h2 className="text-5xl font-normal">Story</h2>
                  <p>
                    When the pandemic hit, Virufy’s founder, Amil Khanzada, knew
                    smartphones were omnipresent and that COVID impacted the
                    nose, throat, and lungs.
                  </p>
                  <p>
                    He hypothesized that breathing and cough sounds could be
                    analyzed with machine learning to detect COVID patterns.
                  </p>
                  <p>
                    Wanting to make a positive impact, he orchestrated a
                    clinical study with 362 patients in an esteemed university
                    hospital. The original team of Virufy, beginning with
                    Stanford graduate AI students, expanded to volunteers from
                    universities globally.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Values Section */}
          <section className="mb-40">
            {/* Values Container */}
            <div className="flex items-center justify-center">
              {/* Sizing & Spacing Container */}
              <div className="max-w-3xl space-y-6 px-10 text-left font-medium text-white opacity-95 lg:max-w-4xl">
                <h2 className="text-center text-5xl font-normal lg:text-left">
                  Values
                </h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 grid-rows-6 gap-y-6 rounded-3xl bg-[#132D62] px-16 py-12 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-y-16 lg:gap-x-20 lg:space-y-0 lg:px-20">
                  {/* Card 1 Container */}
                  <div>
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
                    <p className="max-w-xl text-white lg:max-w-md">
                      We aim to transform expensive healthcare systems by using
                      technology to drive necessary changes.
                    </p>
                  </div>

                  {/* Card 2 Container */}
                  <div>
                    {/* Title Container */}
                    <div className="mb-4 flex items-center space-x-2 lg:mb-0">
                      <h3 className="text-2xl font-semibold text-[#3686ff]">
                        Collaboration
                      </h3>
                      <Image
                        alt="asdf"
                        src={GlobeIcon}
                        width={35}
                        height={35}
                      />
                    </div>
                    <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                      ___
                    </p>
                    <p className="max-w-xl text-white lg:max-w-md">
                      We commit to making rapid disease detection available to
                      every person in the world, regardless of background.
                    </p>
                  </div>

                  {/* Card 3 Container */}
                  <div>
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
                    <p className="max-w-xl text-white">
                      We commit to always putting the health and well-being of
                      all people across the globe first and foremost.
                    </p>
                  </div>

                  {/* Card 4 Container */}
                  <div>
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
                    <p className="max-w-xl text-white">
                      We aim to use technology to make disease prevention and
                      detection free for all people around the world
                    </p>
                  </div>

                  {/* Card 5 Container */}
                  <div>
                    {/* Title Container */}
                    <div className="mb-4 flex items-center space-x-1 lg:mb-0">
                      <h3 className="text-2xl font-semibold text-[#3686ff]">
                        Efficiency
                      </h3>
                      <Image
                        alt="asdf"
                        src={FingerSnapIcon}
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                      ___
                    </p>
                    <p className="max-w-xl text-white">
                      We commit to always putting the health and well-being of
                      all people across the globe first and foremost.
                    </p>
                  </div>

                  {/* Card 6 Container */}
                  <div>
                    {/* Title Container */}
                    <div className="mb-4 flex items-center space-x-1 lg:mb-0">
                      <h3 className="text-2xl font-semibold text-[#3686ff]">
                        Innovation
                      </h3>
                      <Image
                        alt="asdf"
                        src={PhoneInHandIcon}
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="mb-4 hidden font-black text-[#3686ff] lg:block">
                      ___
                    </p>
                    <p className="max-w-xl text-white">
                      We aim to use technology to make disease prevention and
                      detection free for all people around the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Section */}
          <section>
            {/* Privacy Container */}
            <div className="mx-auto max-w-xl px-10 text-center font-medium text-white opacity-95 lg:max-w-2xl">
              <h2 className="mb-10 text-5xl font-normal">
                Our Commitment to Privacy
              </h2>
              <p className="leading-10 lg:leading-normal">
                Virufy takes the privacy and protection of your personal
                information seriously. Our legal team has prepared a detailed
                Privacy Policy and Cookie Policy to protect the personal
                information you share with us through use of our website.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

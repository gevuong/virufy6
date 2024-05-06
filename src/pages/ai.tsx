import Image from 'next/image'
import Link from 'next/link'
import howItWorks1 from '~/assets/static/images/howItWorks/1.jpg'
import waveImg from '~/assets/static/images/howItWorks/wave.jpg'

export default function HowItWorks() {
  return (
    <div className="relative -top-24">
      {/* Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <Image
            className="absolute h-full w-full object-cover opacity-60"
            src={howItWorks1}
            alt=""
            priority
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center pt-60 pb-40 lg:right-[100px]">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl space-y-28 px-10 text-center text-white lg:max-w-3xl lg:text-left">
              <h2 className="text-4xl font-semibold lg:text-5xl lg:font-normal">
                Science behind <span className="text-blue-500">Virufy</span>
              </h2>
              <div className="space-y-16">
                <p className="text-xl">
                  Artificial Intelligence (AI) is capable of detecting minute
                  differences in vocal patterns to detect disease presence.
                </p>
                <div>
                  <Link
                    className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 px-10 py-6 text-2xl font-medium lg:py-4 lg:px-8 lg:text-lg"
                    href="/publications"
                  >
                    See our Research
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative -mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <Image
          src={waveImg}
          alt=""
          className="absolute h-full w-full object-cover opacity-40"
        />

        {/* AI Section */}
        <section>
          {/* Title & Cards Container */}
          <div className="flex items-center justify-center py-28">
            {/* Spacing & Typography Container */}
            <div className="space-y-8 px-10 text-left">
              <h2 className="text-left text-4xl font-normal text-white opacity-95">
                How does AI work?
              </h2>

              {/* Cards Container */}
              <div className="space-y-16">
                {/* Card One Container */}
                <div className="flex items-center justify-between space-x-8 rounded-3xl bg-[#2d69c1] p-8 lg:space-x-16 lg:px-20 lg:py-12">
                  {/* Left Number Container */}
                  <div className="bg-gradient-to-b from-green-500 to-blue-500 bg-clip-text font-bold text-transparent opacity-80">
                    <h3 className="text-7xl font-bold">01</h3>
                  </div>
                  <p className="max-w-xl font-medium text-white opacity-95">
                    Our revolutionary CoughCheck app employs cutting-edge AI
                    technology. By Simply coughing into your phone, our app
                    captures and analyzes distinct cough patterns using
                    sophisticated machine learning algorithms and neural
                    networks.
                  </p>
                </div>

                {/* Card Two Container */}
                <div className="flex items-center justify-center space-x-8 rounded-3xl bg-[#2d69c1] p-8 lg:space-x-16 lg:px-20 lg:py-12">
                  {/* Left Number Container */}
                  <div className="bg-gradient-to-b from-green-500 to-blue-500 bg-clip-text font-bold text-transparent opacity-80">
                    <h3 className="text-7xl font-bold">02</h3>
                  </div>
                  <p className="max-w-xl font-medium text-white opacity-95">
                    It scrutinizes various elements of the cough, such as
                    duration, frequency, and intensity. Leveraging a
                    comprehensive database, the Al meticulously compares
                    recorded cough patterns against known indicators of
                    respiratory diseases, allowing for the early detection of
                    potential health issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

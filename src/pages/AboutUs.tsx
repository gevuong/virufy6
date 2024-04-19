import Image from 'next/image'

import AboutUsImage from '~/assets/static/images/aboutUs/mask_header.png'

export default function AboutUs() {
  return (
    // About Us Section
    <section id="about-us">
      {/* About Us Container */}
      <div>
        <Image
          className="absolute top-0 left-0 z-0 h-[50vh] w-full object-cover"
          alt="close up of a man wearing a face mask"
          src={AboutUsImage}
          priority={true}
        />
        {/* Text Container */}
        <div className="z-10 mx-auto max-w-md py-40 text-center font-medium text-white lg:max-w-2xl lg:text-left">
          <h2 className="mb-6 text-4xl">About Us</h2>
          <div className="space-y-8">
            <p>
              Our innovative approach aims to offer superior COVID pre-screening
              for patients, clinicians and governments, especially in low-income
              countries.
            </p>
            <p>
              We aspire to be the leading nonprofit organization for technology
              - enabled disease identification, transforming global healthcare
              and inspiring others to support and invest in this mission with
              us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

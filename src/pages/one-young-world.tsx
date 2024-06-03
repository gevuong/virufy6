import Image from 'next/image'
import MainContent from '~/components/OneYoungWorld/MainContent'
import { useI18n } from '~/i18n'

const OneYoungWorldPage = () => {
  const {
    OneYoungWorld: { header, navbarTexts, oyw },
  } = useI18n()

  return (
    <div className="relative -top-24">
      {/* Header/Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <Image
            className="absolute h-full w-full object-cover opacity-30"
            src={header.image}
            alt={header.altText}
            priority
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center pt-32 pb-12 md:pt-72 md:pb-48">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl px-8 text-center font-medium text-white md:max-w-4xl">
              <h1 className="text-2xl font-medium leading-loose md:text-3xl md:leading-normal">
                {header.text}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative -mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <MainContent oyw={oyw} navbarTexts={navbarTexts} />
      </div>
    </div>
  )
}

export default OneYoungWorldPage

import ImageinsText from '~/assets/static/images/ourSupporters/ImageinsText.png'
import TextinsImg2 from '~/components/molecules/TextinsImg/TextinsImg2'
import OurSupportersSection from '~/components/organisms/OurSupportersSection/OurSupportersSection2'
import { ImageSize } from '~/components/themes'
import { useI18n } from '~/i18n'

export default function SupportersPage() {
  const {
    OurSupporters: { titleImage, sectionSupporters },
  } = useI18n()

  return (
    <div className="bg-[#4064AD]">
      {/* Globe background img */}
      <TextinsImg2
        sizeImg={ImageSize}
        borderImg="none"
        src={ImageinsText}
        altImg=""
        Text={titleImage}
      />

      <div className="relative -top-24 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#111B2E] to-[#4064AD]">
        <div className="flex max-w-[1440px] flex-col items-center justify-center">
          <OurSupportersSection TextProps={sectionSupporters} />
        </div>
      </div>
    </div>
  )
}

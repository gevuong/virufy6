import TextinsImg2 from '~/components/molecules/TextinsImg/TextinsImg2'
import ImageinsText from '~/assets/static/images/ourSupporters/ImageinsText.png'

import { useI18n } from '~/i18n'

import OurSupportersSection from '~/components/organisms/OurSupportersSection/OurSupportersSection2'

export default function OurSupporters() {
  const {
    OurSupporters: {
      titleImage,
      sectionSupporters,
      sectionOneYoungWorld,
      sectionVolunterStories,
      sectionTeamLeads,
    },
  } = useI18n()

  return (
    <div className='h-full bg-[#4064AD]'>

      {/* Globe background img */}
      <TextinsImg2
        sizeImg=""
        borderImg="none"
        src={ImageinsText}
        altImg=""
        Text={titleImage} 
      />

      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#111B2E] to-[#4064AD] z-10 -top-24 relative">

        <div className="flex max-w-[1440px] flex-col items-center justify-center">
         <OurSupportersSection TextProps={sectionSupporters} />
        </div>
        
      </div>
    </div>
  )
}
// 
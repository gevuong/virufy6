//Organismo
import Section1 from '~/components/organisms/section-1/Section1'
import Section8 from '~/components/organisms/section-8/Section8'
import Image from 'next/image';

import howItWorks1 from '~/assets/static/images/howItWorks/1.jpg'
import howItWorksStep3 from '~/assets/static/images/howItWorks/step3.jpg'
import { useI18n } from '~/i18n'

export default function HowItWorks() {
  const {
    howItWorks: { sectionShareCougt, sectiontCovidTestExplanation },
  } = useI18n()

  const buttons = sectionShareCougt?.buttons

  return (
    <>
      <div className="flex flex-col items-center justify-center">

      {/* Background img 1   */}
      <Image src={howItWorks1} alt='background 1' className="absolute top-0 left-0 w-full h-full object-cover z-0 "/> 
      
        <div className="flex flex-col items-center justify-center text-white z-10">
        
          <Section1
            //TitleText
            TitleSize="h1"
            TitleLabel={sectionShareCougt?.title} // {subtitle}
            TextSize="normal"
            TextLabel={sectionShareCougt?.textLabel}
            ContainerTitleProps
            ContainerTextProps="items-start h-[100%] mr-4 max-w-5xl"

            //Image
            border="none"
            route={''}
            alt=""
            sizeImg=".w-full"

            //Buttons
            buttons={buttons}
            ImageStyleProps={''}
            buttonTechnology={false}
            shareButtonLabel={buttons?.[0]}
            learnMoreButtonLabel={buttons?.[1]}
          />

          <div className='w-full mt-60 z-10'>

          {/* Background img 2  */}
          <Image src={howItWorksStep3} alt='cards background' className="absolute left-0 w-full object-cover z-0 h-[87rem]
          xs:h-100 sm:h-[950px] md:h-[950px] lg:h-[900px] xl:h-[900px]"/>

            <Section8
              TitleLabel={sectiontCovidTestExplanation?.title}
              TitleSize="h2"
              ContainerTitleProps="text-left mr-[5vw] z-10"
              
              //Image
              sizeImg="pr30"
              border="none"
              route1={''}
              route2={''}
              route3={''}
              alt=""
              
              //TitleText
              TitleSize1="h10"
              TitleLabel1={sectiontCovidTestExplanation?.titleLabelRecording}
              TitleLabel2={sectiontCovidTestExplanation?.titleLabelProcessing}
              TitleLabel3={sectiontCovidTestExplanation?.titleLabelResults}
              TextSize="small"
              TextLabel1={sectiontCovidTestExplanation?.textLabelRecording}
              TextLabel2={sectiontCovidTestExplanation?.textLabelProcessing}
              TextLabel3={sectiontCovidTestExplanation?.textLabelResults}
              ContainerTextProps=""
              buttonLabel={sectiontCovidTestExplanation.button}
            />
          </div>
        </div>
      </div>
    </>
  )
}

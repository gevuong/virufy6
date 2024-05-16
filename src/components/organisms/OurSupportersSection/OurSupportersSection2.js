import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";

import { useI18n } from '~/i18n'

export default function OurSupportersSection({
  TextProps
}) {

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
    <>
      <div className="max-w-[1440px] w-[100vw] md:hidden mt-[80px]" >
        
        {/* Supporters mobile view */}

        <div className="w-full flex justify-center flex-wrap">
          {Array.from({ length: 27 }, (_, i) => (
            <div className="flex mx-1 justify-center basis-1/4" key={i}>
              <ImageAtomLocal
                imagesize=""
                alt=""
                border=""
                src={require(`~/assets/static/images/ourSupporters/icon-supports/supporter-${i + 1}.png`)}
                ImageStyleProps=""
              />
            </div>
          ))}
        </div>

      </div> 


    {/* Desktop view */}
      <div className="max-w-[1440px] w-full hidden md:block" >
        <div className="mb-40"></div>

        {/* Supporters */}

        <div className="w-full flex justify-center flex-wrap">
          {Array.from({ length: 27 }, (_, i) => (
            <div className="flex mx-0 justify-center basis-1/4" key={i} >
              <ImageAtomLocal
                imagesize=""
                alt=""
                border=""
                src={require(`~/assets/static/images/ourSupporters/icon-supports/supporter-${i + 1}.png`)}
                ImageStyleProps=""
              />
            </div>
          ))}
        </div>
        
      </div> 
    </>
  );
}

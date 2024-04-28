import Title from "~/components/atoms/Title/Title"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import logo1 from "~/assets/static/images/OurSupportersLogos/logo1.png"
import logo2 from "~/assets/static/images/OurSupportersLogos/logo2.png"
import logo3 from "~/assets/static/images/OurSupportersLogos/logo3.png"
import logo4 from "~/assets/static/images/OurSupportersLogos/logo4.png"
import logo5 from "~/assets/static/images/OurSupportersLogos/logo5.png"
import logo6 from "~/assets/static/images/OurSupportersLogos/logo6.png"
import logo7 from "~/assets/static/images/OurSupportersLogos/logo7.png"
import logo8 from "~/assets/static/images/OurSupportersLogos/logo8.png"
import logo9 from "~/assets/static/images/OurSupportersLogos/logo9.png"
import logo10 from "~/assets/static/images/OurSupportersLogos/logo10.png"
import logo11 from "~/assets/static/images/OurSupportersLogos/logo11.png"
import logo12 from "~/assets/static/images/OurSupportersLogos/logo12.png"
import logo13 from "~/assets/static/images/OurSupportersLogos/logo13.png"
import logo14 from "~/assets/static/images/OurSupportersLogos/logo14.png"
import logo15 from "~/assets/static/images/OurSupportersLogos/logo15.png"
import logo16 from "~/assets/static/images/OurSupportersLogos/logo16.png"
import logo17 from "~/assets/static/images/OurSupportersLogos/logo17.png"
import logo18 from "~/assets/static/images/OurSupportersLogos/logo18.png"
import logo19 from "~/assets/static/images/OurSupportersLogos/logo19.png"

import Supporter1 from '~/assets/static/images/ourSupporters/icon-supports/supporter-1.png'
import Supporter2 from '~/assets/static/images/ourSupporters/icon-supports/supporter-2.png'
import Supporter3 from '~/assets/static/images/ourSupporters/icon-supports/supporter-3.png'
import Supporter4 from '~/assets/static/images/ourSupporters/icon-supports/supporter-4.png'
import Supporter5 from '~/assets/static/images/ourSupporters/icon-supports/supporter-5.png'
import Supporter6 from '~/assets/static/images/ourSupporters/icon-supports/supporter-6.png'
import Supporter7 from '~/assets/static/images/ourSupporters/icon-supports/supporter-7.png'
import Supporter8 from '~/assets/static/images/ourSupporters/icon-supports/supporter-8.png'
import Supporter9 from '~/assets/static/images/ourSupporters/icon-supports/supporter-9.png'
import Supporter10 from '~/assets/static/images/ourSupporters/icon-supports/supporter-10.png'
import Supporter11 from '~/assets/static/images/ourSupporters/icon-supports/supporter-11.png'
import Supporter12 from '~/assets/static/images/ourSupporters/icon-supports/supporter-12.png'
import Supporter13 from '~/assets/static/images/ourSupporters/icon-supports/supporter-13.png'
import Supporter14 from '~/assets/static/images/ourSupporters/icon-supports/supporter-14.png'
import Supporter15 from '~/assets/static/images/ourSupporters/icon-supports/supporter-15.png'
import Supporter16 from '~/assets/static/images/ourSupporters/icon-supports/supporter-16.png'
import Supporter17 from '~/assets/static/images/ourSupporters/icon-supports/supporter-17.png'
import Supporter18 from '~/assets/static/images/ourSupporters/icon-supports/supporter-18.png'
import Supporter19 from '~/assets/static/images/ourSupporters/icon-supports/supporter-19.png'
import Supporter20 from '~/assets/static/images/ourSupporters/icon-supports/supporter-20.png'
import Supporter21 from '~/assets/static/images/ourSupporters/icon-supports/supporter-21.png'
import Supporter22 from '~/assets/static/images/ourSupporters/icon-supports/supporter-22.png'
import Supporter23 from '~/assets/static/images/ourSupporters/icon-supports/supporter-23.png'
import Supporter24 from '~/assets/static/images/ourSupporters/icon-supports/supporter-24.png'
import Supporter25 from '~/assets/static/images/ourSupporters/icon-supports/supporter-25.png'
import Supporter26 from '~/assets/static/images/ourSupporters/icon-supports/supporter-26.png'
import Supporter27 from '~/assets/static/images/ourSupporters/icon-supports/supporter-27.png'

import TextinsImg2 from "~/components/molecules/TextinsImg/TextinsImg2";
import ImageinsText from '~/assets/static/images/ourSupporters/ImageinsText.png'

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
        
        {/* Supporters mobile */}

        <div>
          <div className="w-full flex justify-center" >
            <div className="flex mx-1">
             <ImageAtomLocal imagesize="" alt="" border="" src={Supporter1} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter2} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter3} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter4} ImageStyleProps="" />
            </div>
          </div>
        </div>
        
        <div>
          <div className="w-full flex justify-center" >
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter5} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter6} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter7} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter8} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center" >
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter9} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter10} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter11} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter12} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center" >
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter13} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter14} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter15} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter16} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center" >
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter17} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter18} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter19} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter20} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center" >
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter21} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter22} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter23} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter24} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center" >
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter25} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter26} ImageStyleProps="" />
            </div>
            <div className="flex mx-1">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter27} ImageStyleProps="" />
            </div>
          </div>
        </div>

        {/* <div>
          <Title
            H="h3"
            Text={TextProps.Creators}
            TitleClassProps="text-center mt-16 mb-4"
          />
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo4} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo5} ImageStyleProps="" />
            </div>
          </div>
          <hr className="h-[3px] bg-[#828282]" />
        </div>
        <div>
          <Title
            H="h3"
            Text={TextProps.Collaborators}
            TitleClassProps="text-center mt-16 mb-4"
          />
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo6} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo7} ImageStyleProps="" />
            </div>
          </div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo8} ImageStyleProps="" />
            </div>
          </div>

          <hr className="h-[3px] bg-[#828282]" />
        </div>
        <div>
          <Title
            H="h3"
            Text={TextProps.Drivers}
            TitleClassProps="text-center mt-16 mb-4"
          />
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo9} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo10} ImageStyleProps="" />
            </div>
          </div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo11} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo12} ImageStyleProps="" />
            </div>
          </div>
          <hr className="h-[3px] bg-[#828282]" />
        </div>
        <div>
          <Title
            H="h3"
            Text={TextProps.Boosters}
            TitleClassProps="text-center mt-16 mb-4"
          />
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo13} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo14} ImageStyleProps="" />
            </div>
          </div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo15} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo16} ImageStyleProps="" />
            </div>
          </div>

          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo17} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo18} ImageStyleProps="" />
            </div>
          </div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={logo19} ImageStyleProps="" />
            </div>
          </div>
        </div>
        <hr className="h-[3px] bg-[#828282]" /> */}
      </div> 


    {/* Desktop view */}
      <div className="max-w-[1440px] w-full hidden md:block" >
        <div className="mb-40"></div>
        
        {/* Supporters by row */}
        <div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter1} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter2} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter3} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter4} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter5} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter6} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter7} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter8} ImageStyleProps="" />
            </div>
          </div>
        </div>
        
        <div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter9} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter10} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter11} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter12} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter13} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter14} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter15} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter16} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter17} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter18} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter19} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter20} ImageStyleProps="" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter21} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter22} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter23} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter24} ImageStyleProps="" />
            </div>
          </div>

          <div className="w-full flex justify-center my-14" >
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter25} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter26} ImageStyleProps="" />
            </div>
            <div className="flex mx-10">
              <ImageAtomLocal imagesize="" alt="" border="" src={Supporter27} ImageStyleProps="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

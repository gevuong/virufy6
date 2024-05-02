import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import Image from "next/image";

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

    const supporters = [];
    
    for (let index = 0; index < 28; index++) {
        supporters[index] = eval(`Supporter${index + 1}`);
    }

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

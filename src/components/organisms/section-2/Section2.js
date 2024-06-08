import { useI18n } from "~/i18n";
import Title from '~/components/atoms/Title/Title';
import ImageSection2 from '~/assets/static/images/section2/mobilecircle.png';
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal';
import TitleText from "~/components/molecules/TitleText/TitleText";

export default function Section2({
    text,
    subtext,
    title1,
    sub1,
    title2,
    sub2,
    title3,
    sub3,
    disclaimer
}) {
  const { } = useI18n();
  return (
    <div className="flex flex-col items-center justify-center w-full h-[929px] xl:h-[1174px] bg-[#0A0A0A]">
      <div className="w-full h-full flex items-center justify-center mt-[1rem] px-[20px] xl:px-[50px]">
        <div className="w-full h-full bg-[#132D62] rounded-[50px] flex flex-col items-center">
          <div className="flex flex-col items-center mt-[2rem] lg:mt-[4rem] w-full px-4 text-center">
            <Title
              Text={text}
              H=""
              TitleClassProps="text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[0.99rem] leading-[1rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"
            />
            <p className="mt-[1rem] px-[160px] text-[0.7rem] text-white leading-[0.9rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[2.5rem] font-bold">
              {subtext}
            </p>
          </div>
          <div className="flex flex-col xl:flex-row w-full mt-[2rem] xl:mt-[4rem] px-[100px] justify-between">
            <div className="flex flex-col xl:w-1/2 px-[6rem]">
              <div className="mt-[4rem] mb-[3rem]">
                <TitleText
                  TitleSize="h4"
                  TitleLabel={title1}
                  TextSize="h6"
                  TextLabel={sub1}
                  ContainerTitleProps=""
                  ContainerTextProps=""
                  TitleClassProps={"text-white font-bold mb-[1rem]"}
                  TextClassProps={"text-white"}
                />
              </div>
              <div className="mt-3 mb-[3rem]">
              <TitleText
                TitleSize="h4"
                TitleLabel={title2}
                TextSize="h6"
                TextLabel={sub2}
                ContainerTitleProps=""
                ContainerTextProps=""
                TitleClassProps={"text-white font-bold mb-[1rem]"}
                TextClassProps={"text-white"}
              />
              </div>
              <div className="mt-3">
              <TitleText
                TitleSize="h4"
                TitleLabel={title3}
                TextSize="h6"
                TextLabel={sub3}
                ContainerTitleProps=""
                ContainerTextProps=""
                TitleClassProps={"text-white font-bold mb-[1rem]"}
                TextClassProps={"text-white"}
              />
              </div>
              <div className="flex flex-col mt-1 xl:mt-4">
                <div className="w-full">
                  <p className="text-[0.4rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[0.8rem] text-white whitespace-nowrap">
                    {disclaimer}
                  </p>
                </div>
             </div>
            </div>
            <div className="flex justify-center xl:justify-end xl:w-1/2 mt-[2rem] xl:mt-0">
              <div className="sm:h-[212px] xl:h-[682px] w-full xl:w-auto relative">
                <ImageAtomLocal
                  ImageStyleProps=""
                  imagesize={{width: 656, height:747}}
                  border=""
                  src={ImageSection2}
                  alt="Image of a mobile with Virufy's logo on it"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

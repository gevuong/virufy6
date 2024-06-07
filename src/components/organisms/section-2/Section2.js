import { useI18n } from "~/i18n";
import Title from '~/components/atoms/Title/Title';
import ImageSection2 from '~/assets/static/images/section2/mobilecircle.png';
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal';

export default function Section2({
    text,
    subtext,
    title1,
    sub1,
    title2,
    sub2,
    title3,
    sub3
}) {
  const { } = useI18n();
  return (
    <div className="flex flex-col items-center justify-center w-full h-[929px] xl:h-[1174px] bg-[#0A0A0A]">
      <div className="w-full h-full flex items-center justify-center mt-[1rem] px-[20px] xl:px-[50px]">
        <div className="w-full h-full bg-[#132D62] rounded-[50px] flex flex-col xl:flex-row justify-center">
          <div className="flex flex-col mt-[2rem] lg:mt-[4rem] sm:text-center xl:text-left xl:w-1/2 px-4">
            <Title
              Text={text}
              H=""
              TitleClassProps="text-transparent text-center xl:text-left bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[0.99rem] leading-[1rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"
            />
            <p className="mt-[1rem] px-[10px] xl:px-[180px] text-center xl:text-left text-[0.7rem] text-white leading-[0.9rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[2.5rem] font-bold">
              {subtext}
            </p>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">{title1}</h2>
              <p className="text-white">{sub1}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">{title2}</h2>
              <p className="text-white">{sub2}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">{title3}</h2>
              <p className="text-white">{sub3}</p>
            </div>
          </div>
          <div className="flex justify-center xl:items-center xl:w-1/2 mt-8 xl:mt-0">
            <div className="sm:h-[212px] xl:h-[682px] w-full relative">
              <ImageAtomLocal
                ImageStyleProps=""
                imagesize=""
                border=""
                src={ImageSection2}
                alt="Image of a mobile with Virufy's logo on it"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

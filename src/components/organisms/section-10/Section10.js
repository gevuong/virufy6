import { useI18n } from "~/i18n";
import Title from '~/components/atoms/Title/Title';
import ImageSection3 from '~/assets/static/images/section3/Algorithm.jpg';
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal';


export default function Section2({
    title,
    subtitle,
    text
}) {
  const { } = useI18n();
  return (
    <div className="relative flex justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="contrast-1 brightness-100">
        <ImageAtomLocal
          ImageStyleProps=""
          imagesize=""
          border=""
          src={ImageSection3}
          alt=""
        />
      </div>
      <div className="absolute flex flex-col p-4 md:p-8 lg:p-[9.6rem] text-center">
        <div className="flex flex-col text-center">
        <div className="flex flex-col mt-[0.5rem] lg:mt-12 sm:text-center">
            <Title
              Text={title}
              H=""
              TitleClassProps="text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[20px] leading-[1rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"
            />
            <p className="mt-[1rem] px-[10px] xl:px-[160px] text-[12px] text-white leading-[1rem] xl:text-[24px] xl:leading-[2.5rem]">
              {subtitle}
            </p>
            <p className="mt-[1rem] xl:mt-[6rem] px-[9px] xl:px-[30px] text-[14px] text-white leading-[1rem] xl:text-[36px] xl:leading-[2.5rem] font-semibold">
              {text}
            </p>
          </div>
            </div>
            </div>
            </div>
  );
}

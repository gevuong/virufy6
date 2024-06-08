import { useI18n } from "~/i18n";
import Title from '~/components/atoms/Title/Title';
import ImageSection2 from '~/assets/static/images/section2/mobile.png';
import Image from "next/image";

export default function Section2({
    text,
    subtext,
    title1,
    sub1,
    title2,
    sub2,
    title3,
    sub3,
    disclaimer,
    buttonText
}) {
  const { } = useI18n();
  return (
    // Black background
    <div className="flex flex-col items-center justify-center w-full h-[1000px] xl:h-[1273px] bg-[#0A0A0A]"> 
        {/* padding margin */}
      <div className="w-full h-[929px] xl:h-[1174px] flex items-center justify-center mt-[1rem] px-[20px] xl:px-[50px]">
        {/* Blue foreground */}
        <div className="w-full h-full bg-[#132D62] rounded-[50px] flex flex-col items-center">

          <div className="flex flex-col items-center mt-[2rem] lg:mt-[4rem] w-full px-4 text-center">
            <Title
              Text={text}
              H=""
              TitleClassProps="text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[20px] leading-[1rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[48px] xl:leading-[3.5rem]"
            />
            <p className="mt-[1rem] px-[1px] xl:px-[160px] text-[14px] text-white leading-[1rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[24px] xl:leading-[2.5rem] xl:font-bold">
              {subtext}
            </p>
          </div>

          <div className="flex flex-col sm:flex-col xl:flex-row w-full mt-[2rem] xl:mt-[4rem] px-[2rem] text-center xl:text-start xl:px-[100px] justify-between">
            <div className="flex flex-col items-start sm:w-full xl:w-1/2 px-[0rem] xl:px-[6rem]">
              <div className="mt-[1rem] xl:mt-[2rem] mb-[1rem]">
                <Title H="h5spaced" Text={title1} TitleClassProps="text-white font-bold mb-[1rem]" />
                <p className="text-white text-[0.9rem] leading-[0.9rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[1rem] xl:leading-[1.3rem]">
                  {sub1}
                </p>
              </div>
              <div className="mt-[0rem] xl:mt-[1rem] mb-[1rem]">
                <Title H="h5spaced" Text={title2} TitleClassProps="text-white font-bold mb-[1rem]" />
                <p className="text-white text-[0.9rem] leading-[0.9rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[1rem] xl:leading-[1.3rem]">
                  {sub2}
                </p>
              </div>
              <div className="mt-[1rem] xl:mt-[1rem] mb-[0rem]">
                <Title H="h5spaced" Text={title3} TitleClassProps="text-white font-bold mb-[1rem] whitespace-nowrap" />
                <p className="text-white text-[0.9rem] leading-[0.9rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[1rem] xl:leading-[1.3rem]">
                  {sub3}
                </p>
              </div>
              <div className="flex flex-col mt-[2rem] xl:mt-[4rem] xl:whitespace-nowrap">
                <div className="w-full">
                  <p className="text-[0.4rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[0.6rem] text-white">
                    {disclaimer}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center xl:justify-end xl:w-1/2 mt-[2rem] xl:mt-0">
              <div className="sm:h-[212px] xl:h-[682px] w-full xl:w-auto relative">
                <Image
                  className="h-[212px] xl:h-[682px]"
                  src={ImageSection2}
                  width="0"
                  height="0"
                  alt="Image of a mobile with Virufy's logo on it"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-md md:max-w-lg items-center sm:px-0 mt-[2rem]">
            <button
                className={`medium primary text-white
                            w-[315px] h-[45px] top-1602 left-37 p-[9px_27px] gap-[10px] rounded-[50px] 
                            xl:w-[250px] xl:h-[65px] xl:top-3280 xl:left-631`}
                style={{
                  borderRadius:"50px",
                  background: "linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)",
                }}
                onClick={() => window.location.href = "/ai"}
              >
                {buttonText}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

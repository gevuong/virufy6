import Title from '~/components/atoms/Title/Title';
import ImageSection2 from '~/assets/static/images/section2/mobilecircle.png';
import Image from "next/image";

export default function Section3({
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
  return (
    // Black background
    <div className="flex flex-col items-center justify-center w-full min-h-[1050px] xl:min-h-[1273px] bg-[#0A0A0A] pb-[2rem]">
      {/* Padding and margin */}
      <div className="w-full flex items-center justify-center mt-[1rem] sm:px-[20px] xl:px-[50px]">
        {/* Blue foreground */}
        <div className="max-w-screen-xl bg-[#132D62] rounded-[50px] flex flex-col items-center pb-[2rem]">
          <div className="w-full max-w-screen-xl mx-auto">
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

            <div className="flex flex-col sm:flex-col xl:flex-row w-full mt-[0rem] xl:mt-[2rem] px-[2rem] text-center xl:text-start xl:px-[100px] justify-between">
              <div className="order-2 xl:order-1 flex flex-col items-center xl:items-start sm:w-full xl:w-1/2 px-[0rem] xl:px-[6rem] xl:mt-[4rem]">
                <div className="mt-[1rem] xl:mt-[2rem] mb-[1rem]">
                  <Title H="h5spaced" Text={title1} TitleClassProps="text-white font-bold mb-[1rem]" />
                  <p className="text-white text-[0.9rem] leading-[0.9rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[18px] xl:leading-[25px]">
                    {sub1}
                  </p>
                </div>
                <div className="mt-[0rem] xl:mt-[1rem] mb-[1rem]">
                  <Title H="h5spaced" Text={title2} TitleClassProps="text-white font-bold mb-[1rem]" />
                  <p className="text-white text-[0.9rem] leading-[0.9rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[18px] xl:leading-[25px]">
                    {sub2}
                  </p>
                </div>
                <div className="mt-[1rem] xl:mt-[1rem] mb-[0rem]">
                  <Title H="h5spaced" Text={title3} TitleClassProps="text-white font-bold mb-[1rem] whitespace-nowrap" />
                  <p className="text-white text-[0.9rem] leading-[0.9rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[18px] xl:leading-[25px]">
                    {sub3}
                  </p>
                </div>
                <div className="flex flex-col items-center xl:items-start mt-[2rem] xl:mt-[4rem] xl:whitespace-nowrap w-full">
                  <div className="w-full">
                    <p className="text-[0.4rem] px-[3rem] xl:px-[0rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[8px] text-white text-center xl:text-left">
                      {disclaimer}
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 xl:order-2 flex justify-center xl:w-1/2 mt-[2rem] xl:mt-[0rem]">
                <div className="w-auto relative">
                  <Image
                    className="w-auto h-[300px] xl:h-[800px]"
                    src={ImageSection2}
                    width="0"
                    height="0"
                    alt="Image of a mobile with Virufy's logo on it"
                  />
                </div>
              </div>
            </div>

            <div className="w-full mx-auto flex justify-center items-center max-w-md md:max-w-lg px-0 mt-[2rem] xl:mt-[0rem] mb-[2rem]">
              <button
                className={`medium primary text-white w-[315px] h-[45px] xl:w-[250px] xl:h-[65px]`}
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
    </div>
  );
}

import PropTypes from 'prop-types';
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal';
import Title from '~/components/atoms/Title/Title';
import Button1 from "~/components/atoms/button/Button1";

export default function TextinsImg3({
  sizeImg,
  borderImg,
  src,
  altImg,
  text,
  text2,
  mainText,
  subText,
  buttonText,
  disclaimer1,
  disclaimer2
}) {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <div className="contrast-1 brightness-100">
        <ImageAtomLocal
          ImageStyleProps=""
          imagesize={sizeImg}
          border={borderImg}
          src={src}
          alt={altImg}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 md:p-8 lg:p-12">
        <div className="absolute top-[100px] sm:top-[120px] md:top-[140px] lg:top-[160px] xl:top-[180px] 2xl:top-[200px] left-[50%] translate-x-[-50%] text-center">
          <Title Text={text} H="h1" TitleClassProps="text-white text-base sm:text-lg md:text-xl lg:text-2xl"/>
          <div className="relative top-[20px] sm:top-[50px]">
            <Title
              Text={text2}
              H="h1"
              TitleClassProps="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-base sm:text-lg md:text-xl lg:text-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-32 sm:mt-56 space-y-8 md:space-y-12 text-center md:text-left">
          <div className="w-full max-w-xs md:max-w-md">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              {mainText}
            </p>
          </div>

          <div className="w-full max-w-md md:max-w-lg">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
              {subText}
            </p>
          </div>
          
          <div className="w-full max-w-md md:max-w-lg px-4 sm:px-0 mt-2"> {/* Added margin-top */}
            <Button1 
              size="medium" 
              type="primary" 
              path="/ai"
              label={buttonText} 
              radius="50px"
              gradientBackground="linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)"
              width="315px"
              height="45px"
              className="md:w-[250px] md:h-[65px] p-[9px] px-[27px] gap-[10px]" // Removed absolute positioning
            />
          </div>
          
          <div className="w-full max-w-lg">
            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              {disclaimer1}
            </p>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              {disclaimer2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

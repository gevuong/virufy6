import Button from "~/components/atoms/button/Button"
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal"
import TitleText from "~/components/molecules/TitleText/TitleText"

export default function Section8({
  TitleLabel,
  TitleSize,
  TitleSize1,
  TitleLabel1,
  TitleLabel2,
  TitleLabel3,
  TextSize,
  TextLabel1,
  TextLabel2,
  TextLabel3,
  ContainerTitleProps,
  ContainerTextProps,
  sizeImg,
  border,
  route1,
  route2,
  route3,
  alt,
  buttonLabel
}) {
  return (
    <div className="mt-[80px] mb-[80px] flex flex-col">

      <TitleText
        TitleSize={TitleSize}
        TitleLabel={TitleLabel}
        TextSize={""}
        TextLabel={""}
        ContainerTitleProps={ContainerTitleProps}
        ContainerTextProps={""}
        TitleClassProps={"ml-24"}
        TextClassProps={""}
      />
      
      <div className="flex-col xl:flex-row mb-4 text-center xl:items-start items-center w-[100%] justify-center mt-[80px] z-10">

        <div className="bg-blue-500 bg-opacity-50 flex flex-row text-left items-center w-[250px] 
        sm:w-[500px] md:w-[500px] lg:w-[900px] xl:w-[1000px] 
        sm:h-[220px] md:h-[220px] lg:h-[200px] xl:h-[200px]
        sm:ml-2 md:ml-40 lg:ml-40 xl:ml-40 
        mt-0 rounded-3xl">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route1}
            alt={alt}
            ImageStyleProps={""}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel1}
            TextSize={TextSize}
            TextLabel={TextLabel1}
            ContainerTitleProps={"mt-[32px] bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text"}
            ContainerTextProps={`${ContainerTextProps}`}
            TitleClassProps={""}
            TextClassProps={"text-white p-20"}            
          />
        </div>

        <div className="bg-blue-500 bg-opacity-50 rounded-3xl flex flex-row text-left items-center w-[250px] 
        sm:w-[500px] md:w-[500px] lg:w-[900px] xl:w-[1000px] 
        sm:h-[250px] md:h-[250px] lg:h-[200px] xl:h-[200px] 
        sm:ml-2 md:ml-40 lg:ml-40 xl:ml-40 
        mb-4 mt-0 mt-3 ml-40">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route2}
            alt={alt}
            ImageStyleProps={""}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel2}
            TextSize={TextSize}
            TextLabel={TextLabel2}
            ContainerTitleProps={"mt-[32px] bg-gradient-to-b from-green-500 to-blue-500 text-transparent bg-clip-text"}
            ContainerTextProps={`${ContainerTextProps}`}
            TitleClassProps={""}
            TextClassProps={"text-white p-20"}
          />
        </div>

        <div className="flex flex-col text-center items-center w-[250px] sm:w-[250px] md:w-[250px] lg:w-[447px] xl:w-[447px] mb-4 mt-0">
          <ImageAtomLocal
            imagesize={sizeImg}
            border={border}
            src={route3}
            alt={alt}
            ImageStyleProps={""}
          />
          <TitleText
            TitleSize={TitleSize1}
            TitleLabel={TitleLabel3}
            TextSize={TextSize}
            TextLabel={TextLabel3}
            ContainerTitleProps={"mt-[32px]"}
            ContainerTextProps={`mt-[16px] mb-[40px] ${ContainerTextProps}`}
            TitleClassProps={""}
            TextClassProps={"text-[#6D7280]"}
          />
        </div>

      </div>
      {/* <div className="pt-5 text-center">
        <Button
          size="medium"
          type="primary"
          label={buttonLabel}
          path="https://virufy.org/study/welcome"
        />
      </div> */}
    </div>
  )
}
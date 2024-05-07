import TitleText from "~/components/molecules/TitleText/TitleText";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import ImageSection4 from "~/assets/static/images/section4/1.jpg";
import Button1 from "~/components/atoms/Button1.js/Button1";

export default function Section4({
  ContainerTitleProps,
  ContainerTextProps,
  border,
  alt,
  TitleSize1,
  TitleSize2,
  TitleLabel1,
  TitleLabel2,
  TextLabel,
  labelButton,
  buttonRoute,
  
}) {
  console.log(buttonRoute);
  console.log(labelButton);
  return (
    <div className="text-center mt-[100px] mb-[40px] flex flex-col space-y-4 space-x-4 ml-[5vw] mr-[5vw]">
      {/* <TitleText
        TitleSize={TitleSize1}
        TitleLabel={TitleLabel1}
        TextSize={""}
        TextLabel={""}
        ContainerTitleProps={{
          style: {
            background: "linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)"
          }
        }}
        ContainerTextProps={""}
        TitleClassProps={"text-center m-[5vw] bg-transparent bg-clip-text text-transparent bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]"}
        TextClassProps={""}
      /> */}
      <div className="flex items-center flex-1 mt-[80px]">
        <div className="w-1/2 flex items-center justify-start">
          <ImageAtomLocal
            imagesize={{ width: 643, height: 651 }}
            border={border}
            src={ImageSection4}
            alt={alt}
            ImageStyleProps={""}
          />
        </div>
        <div className="w-1/2 flex items-center justify-start sm:justify-center">
          <div className="w-full text-left flex flex-col gap-5">
          <TitleText
        TitleSize={TitleSize1}
        TitleLabel={TitleLabel1}
        TextSize={""}
        TextLabel={""}
        ContainerTitleProps={{
          style: {
            background: "linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)"
          }
        }}
        ContainerTextProps={""}
        TitleClassProps={"bg-transparent bg-clip-text text-transparent bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]"}
        TextClassProps={""}
      />
            <TitleText
              TitleSize={TitleSize2}
              TitleLabel={TitleLabel2}
              TextSize="normal"
              TextLabel={TextLabel}
              ContainerTitleProps={ContainerTitleProps}
              ContainerTextProps="text-white"
              TitleClassProps={"text-white"}
              TextClassProps={""}
            />
            <div className="hidden sm:flex flex-col justify-center">
            <Button1 
              size="medium" 
              type="primary" 
              path={buttonRoute} 
              label={labelButton} 
              style={{}}
              radius='50px'
              gradientBackground = "linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)"
              width="250px" 
              height="65px"
            />
          </div>

          </div>
        </div>
      </div>
      {/* <div className="flex sm:hidden justify-center">
        <Button size="medium" type="primary" path={buttonRoute} label={labelButton} style={style} />
      </div> */}
    </div>
  );
}

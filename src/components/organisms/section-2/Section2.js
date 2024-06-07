import { useI18n } from "~/i18n"

export default function Section2() {
    const { } = useI18n()
    return (
        <>
        <div className="absolute flex flex-col items-center justify-center bg-[#163063] rounded-[50px] opacity-100
        w-[350px] h-[929px] top-[771px] left-[20px]
        xl:w-[1388px] xl:h-[1174px] xl:top-[2223px] xl:left-[62px]">
        
        <p className="text-white">Section 2 Content</p>
      </div>
      </>
    )
}

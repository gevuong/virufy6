import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import Title from "~/components/atoms/Title/Title";

export default function TextinsImg({
  sizeImg,
  borderImg,
  src,
  altImg,
  Text
}) {
  return (
    <div className="flex justify-center -top-24 relative">
      <div className="h-[700px] object-cover w-full h-full object-cover">
        <ImageAtomLocal
        ImageStyleProps=""
          imagesize={sizeImg}
          border={borderImg}
          src={src}
          alt={altImg}
        />
      </div>
      <Title
        Text={Text}
        H="h1"
        TitleClassProps="
					absolute top-[50%] 
					left-[50%] 
					translate-y-[-50%] 
					translate-x-[-50%]
					text-white
					text-center
				"
      />

    </div>
  )
}
// 
// this is used in the Our Supporters page. the only difference from orginal TextingsImg is <div className=" contrast-50 brightness-50">

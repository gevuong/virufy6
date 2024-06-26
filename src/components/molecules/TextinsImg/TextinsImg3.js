import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";
import Title from "~/components/atoms/Title/Title";

// this is used in JobListing page only

export default function TextinsImg({
  sizeImg,
  borderImg,
  src,
  altImg,
  Text
}) {
  return (
    <div className="over overflow-hidden relative -top-24 flex justify-center">
      <div className="contrast-1 brightness-100 bg-black">
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
            absolute 
            top-[65%]
            sm:top-[60%] 
            md:top-[50%] 
            left-[50%] 
            translate-y-[-50%] 
            translate-x-[-50%]
            text-white
            md:text-center
            text-xs
            sm:text-base
            font-normal
            leading-[14px]
            sm:leading-[25px]
            md:leading-10
        "
      />

    </div>
  )
}

import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'
import Title from '~/components/atoms/Title/Title'

// this is used in job-listing page only

export default function TextinsImg({ sizeImg, borderImg, src, altImg, Text }) {
  return (
    <div className="over relative -top-24 flex justify-center overflow-hidden">
      <div className="contrast-1 bg-black brightness-100">
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
        H="h1JobListing"
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
            text-opacity-80
        "
      />
    </div>
  )
}

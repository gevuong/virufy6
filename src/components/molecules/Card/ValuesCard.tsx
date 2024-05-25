import Image from 'next/image'
import { type ValuesCard } from '../../../i18n/types/OurStory'

type Props = ValuesCard

const ValuesCard = ({ title, image, imageText, text }: Props) => {
  return (
    <>
      {/* Title Container */}
      <div className="mb-4 flex items-center space-x-2 lg:mb-0">
        <h3 className="text-lg font-semibold text-[#3686ff] sm:text-2xl">
          {title}
        </h3>
        <Image alt={imageText} src={image} width={35} height={35} />
      </div>

      <p className="mb-4 hidden font-black text-[#3686ff] lg:block">___</p>
      <p className="max-w-xl text-sm text-white lg:max-w-md">{text}</p>
    </>
  )
}

export default ValuesCard

import Image from 'next/image'
import { type TeamLeadCard } from '~/i18n/types/OneYoungWorld'

const TeamLeadCard = ({ name, texts, image, altText }: TeamLeadCard) => {
  return (
    <div className="relative">
      <Image className="" src={image} alt={altText} />

      {/* Text Container */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 px-4 py-2 text-center font-medium">
        <h2 className="font-bold">{name}</h2>
        {texts.map((text, i) => (
          <div key={i} className="text-xs">
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamLeadCard

import { type AiCard } from '../../../i18n/types/Ai'

const AiCard = ({ title, text, style }: AiCard) => {
  return (
    <div className="flex items-center justify-between space-x-8 rounded-3xl bg-[#2d69c1] p-8 lg:space-x-16 lg:px-20 lg:py-12">
      {/* Heading Container */}
      <div className="bg-gradient-to-b from-green-500 to-blue-500 bg-clip-text font-bold text-transparent opacity-80">
        <h3 className={'text-7xl font-bold ' + `${style}`}>{title}</h3>
      </div>

      <p className="max-w-xl font-medium text-white opacity-95">{text}</p>
    </div>
  )
}

export default AiCard

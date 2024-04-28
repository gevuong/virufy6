import Image from 'next/image'
import Link from 'next/link'
import PublicationCard from '~/components/molecules/Card/PublicationCard'
import { useI18n } from '~/i18n'
import {
  HexagonDottedBackground,
  PhoneHeader,
} from '../assets/static/images/OurPublications/index'

export default function OurPublications() {
  const {
    Publications: { publicationsSection, publicationCards, coughSection },
  } = useI18n()

  return (
    <div className="relative -top-24">
      {/* Publications/Hero Container */}
      <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
        <Image
          src={PhoneHeader}
          className="absolute h-full w-full object-cover opacity-40"
          alt=""
        />
        {/* Text Container */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 py-52 px-10 text-center font-medium opacity-95">
          <h1 className="text-5xl text-green-500">
            {publicationsSection.title}
          </h1>
          {publicationsSection.texts.map((text, i) => (
            <p key={i} className="text-white">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Gradient Overlay Container */}
      <div className="relative -mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <Image
          src={HexagonDottedBackground}
          className="absolute h-full w-full object-cover opacity-10"
          alt=""
        />

        {/* Cards Container */}
        <div className="relative flex flex-col items-center justify-center space-y-8 px-10 pt-28">
          {publicationCards.map((publication, i) => (
            <div
              key={i}
              className="space-y-4 rounded-xl bg-[#00000038] px-16 py-8 text-left text-white md:w-[700px] md:space-y-5"
            >
              <PublicationCard {...publication} />
            </div>
          ))}
        </div>

        {/* Record/Share Your Cough Container */}
        <div className="relative mx-auto max-w-4xl space-y-14 px-10 py-40 text-center font-medium text-white">
          <h2 className="text-5xl leading-normal md:text-4xl md:leading-relaxed">
            {coughSection.title}
          </h2>
          <button className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 px-10 py-6 text-3xl font-medium md:py-4 md:px-8 md:text-lg">
            <Link target="_blank" href="https://virufy.org/study/welcome">
              {coughSection.linkText}
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

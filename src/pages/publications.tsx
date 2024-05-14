import Image from 'next/image'
import { useState } from 'react'
import PublicationCard from '~/components/molecules/Card/PublicationCard'
import ShareYourCoughModal from '~/components/organisms/Modals/ShareYourCoughModal'
import { useI18n } from '~/i18n'
import {
  HexagonDottedBackground,
  PhoneHeader,
} from '../assets/static/images/publications/index'

export default function PublicationsPage() {
  const {
    Publications: { publicationsSection, publicationsCards, coughSection },
  } = useI18n()

  const [isShareYourCoughModalOpen, setIsShareYourCoughModalOpen] =
    useState(false)

  return (
    <div className="relative -top-24">
      {/* Hero Container */}
      <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
        <Image
          src={PhoneHeader}
          className="absolute h-full w-full object-cover opacity-40"
          alt=""
          priority
        />

        {/* Text Container */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 pt-64 pb-40 text-center font-medium opacity-95">
          <h1 className="text-4xl text-green-500 sm:text-5xl">
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
          className="absolute h-full w-full object-cover opacity-30"
          alt=""
          priority
        />

        {/* Cards Container */}
        <div className="relative flex flex-col items-center justify-center space-y-8 px-10 pt-28">
          {publicationsCards.map((publication, i) => (
            <div
              key={i}
              className="space-y-4 rounded-xl bg-[#00000060] px-10 py-8 text-left text-white sm:px-16 md:w-[700px] md:space-y-5"
            >
              <PublicationCard {...publication} />
            </div>
          ))}
        </div>

        {/* Record/Share Your Cough Container */}
        <div className="relative mx-auto max-w-4xl space-y-24 px-10 py-40 text-center font-medium text-white md:space-y-14">
          <h2 className="text-5xl leading-normal md:text-4xl md:leading-relaxed">
            {coughSection.title}
          </h2>

          <button
            className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 p-6 px-6 text-xl font-medium sm:px-8 sm:text-2xl md:py-4 md:px-8 md:text-lg"
            onClick={() => setIsShareYourCoughModalOpen(true)}
          >
            {coughSection.linkText}
          </button>
        </div>
      </div>

      {/* Share Your Cough Modal */}
      <ShareYourCoughModal
        isOpen={isShareYourCoughModalOpen}
        handleClose={() => setIsShareYourCoughModalOpen(false)}
      />
    </div>
  )
}

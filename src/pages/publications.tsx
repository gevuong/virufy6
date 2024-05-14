import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import VirufyLogo from '~/assets/static/images/logo/virufy.svg'
import PublicationCard from '~/components/molecules/Card/PublicationCard'
import { useI18n } from '~/i18n'
import {
  HexagonDottedBackground,
  PhoneHeader,
} from '../assets/static/images/publications/index'

export default function PublicationsPage() {
  const {
    Publications: { publicationsSection, publicationsCards, coughSection },
  } = useI18n()

  const modalRef = useRef<HTMLDialogElement>(null)

  const handleOpenModalClick = () => {
    modalRef.current?.showModal()
  }

  const handleCloseModalClick = () => {
    modalRef.current?.close()
  }

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
          className="absolute h-full w-full object-cover opacity-30"
          alt=""
          priority
        />

        {/* Cards Container */}
        <div className="relative flex flex-col items-center justify-center space-y-8 px-10 pt-28">
          {publicationsCards.map((publication, i) => (
            <div
              key={i}
              className="space-y-4 rounded-xl bg-[#00000060] px-16 py-8 text-left text-white md:w-[700px] md:space-y-5"
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
            className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 p-6 px-8 text-2xl font-medium md:py-4 md:px-8 md:text-lg"
            onClick={handleOpenModalClick}
          >
            Share Your Cough
          </button>
        </div>
      </div>

      {/* Share Your Cough Modal */}
      <dialog
        className="mx-auto max-w-xs rounded-3xl bg-gradient-to-b from-black to-[#3468B2] backdrop:bg-black/50 md:max-w-sm md:rounded-xl md:px-6"
        ref={modalRef}
      >
        {/* Modal Container */}
        <div className="py-16 text-center font-medium">
          {/* type cast to remove unsafe assignment error */}
          <div className="flex items-center justify-center">
            <Image
              src={VirufyLogo as string}
              alt="Virufy logo"
              width={140}
              height={50}
            />
          </div>
          <button
            onClick={handleCloseModalClick}
            className="absolute right-8 top-5 text-white duration-200 hover:scale-110"
          >
            X
          </button>
          <div className="my-10 text-sm text-white">
            An Independent Nonprofit Research Organization
          </div>
          <h1 className="mb-16 text-2xl text-green-500">
            Covid-19 Cough Data Collection Study
          </h1>

          {/* Link Container */}
          <div>
            <Link
              href="https://virufy.org/study/welcome"
              target="_blank"
              className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 py-4 px-12 text-xl text-white"
            >
              Lets Start!
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  )
}

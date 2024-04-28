import Image from 'next/image'

/* import Section9 from "~/components/organisms/section-9/Section9" */
import CardLargue from '~/components/organisms/section-9/CardLarge'

//image
import notebook from '~/assets/static/images/OurPublications/notebook1.png'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import { useI18n } from '~/i18n'

import PhoneHeader from '~/assets/static/images/OurPublications/phone_header.png'
import HexagonDottedBackground from '~/assets/static/images/OurPublications/hexagon_dotted_background.png'

export default function OurPublications() {
  const {
    ourPublications: { publicationCarts, helpText, buttonText },
  } = useI18n()

  const CardsData = [
    {
      route: notebook,
      text: publicationCarts?.cardStudy,
    },
    {
      route: notebook,
      text: publicationCarts?.cardVoice,
    },
    {
      route: notebook,
      text: publicationCarts?.cardSensibility,
    },
    {
      route: notebook,
      text: publicationCarts?.cardInvestigation,
    },
  ]

  return (
    <div>
      <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
        <Image
          src={PhoneHeader}
          className="absolute h-full w-full object-cover opacity-40"
          alt=""
        />
        {/* Text Container */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 py-60 text-center font-medium">
          <h1 className="text-5xl text-green-600">Publications</h1>
          <p className="text-white">
            Below you can find several of our papers that showcase the
            development and science behind the power of Virufy.
          </p>
        </div>
      </div>
      <div className="relative h-[2000px] bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <Image
          src={HexagonDottedBackground}
          className="absolute h-full w-full object-cover opacity-40"
          alt=""
        />

        {/* Cards Container */}
        <div className="flex flex-col items-center justify-center space-y-8 px-10 pt-40">
          {/* Card 1 Container */}
          <div className="max-w-4xl space-y-2 rounded-xl bg-[#132d62] px-16 py-8 text-left text-white">
            <h3 className="max-w-lg text-xl font-medium">
              Hierarchical Multi-modal Transformer for Automatic Detection of
              COVID-19
            </h3>
            <ul className="list-inside list-disc">
              <li>October 2022</li>
            </ul>
          </div>
          {/* Card 1 Container */}
          <div className="max-w-4xl space-y-2 rounded-xl bg-[#132d62] px-16 py-8 text-left text-white">
            <h3 className="max-w-lg text-xl font-medium">
              Hierarchical Multi-modal Transformer for Automatic Detection of
              COVID-19
            </h3>
            <ul className="list-inside list-disc">
              <li>October 2022</li>
            </ul>
          </div>
          {/* Card 1 Container */}
          <div className="max-w-4xl space-y-2 rounded-xl bg-[#132d62] px-16 py-8 text-left text-white">
            <h3 className="max-w-lg text-xl font-medium">
              Hierarchical Multi-modal Transformer for Automatic Detection of
              COVID-19
            </h3>
            <ul className="list-inside list-disc">
              <li>October 2022</li>
            </ul>
          </div>
          {/* Card 1 Container */}
          <div className="max-w-4xl space-y-2 rounded-xl bg-[#132d62] px-16 py-8 text-left text-white">
            <h3 className="max-w-lg text-xl font-medium">
              Hierarchical Multi-modal Transformer for Automatic Detection of
              COVID-19
            </h3>
            <ul className="list-inside list-disc">
              <li>October 2022</li>
            </ul>
          </div>
          {/* Card 1 Container */}
          <div className="max-w-4xl space-y-2 rounded-xl bg-[#132d62] px-16 py-8 text-left text-white">
            <h3 className="max-w-lg text-xl font-medium">
              Hierarchical Multi-modal Transformer for Automatic Detection of
              COVID-19
            </h3>
            <ul className="list-inside list-disc">
              <li>October 2022</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-14 px-10 pt-40 text-center text-white">
          <p className="text-5xl leading-normal">
            Let's help the world and save lives by recording your cough
          </p>
          <button className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 px-10 py-6 text-3xl font-medium opacity-95">
            Share Your Cough
          </button>
        </div>
      </div>
    </div>
  )
}

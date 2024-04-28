import Image from 'next/image'
import Link from 'next/link'
import {
  HexagonDottedBackground,
  PhoneHeader,
} from '../assets/static/images/OurPublications/index'

export default function OurPublications() {
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
          <h1 className="text-5xl text-green-500">Publications</h1>
          <p className="text-white">
            Below you can find several of our papers that showcase the
            development and science behind the power of Virufy.
          </p>
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
          {/* Card 1 Container */}
          <div className="space-y-4 rounded-xl bg-[#00000038] px-16 py-8 text-left text-white md:w-[700px] md:space-y-5">
            <h3 className="max-w-lg text-xl font-medium md:max-w-md">
              Hierarchical Multi-modal Transformer for Automatic Detection of
              COVID-19
            </h3>
            <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
              <ul className="list-inside list-disc">
                <li>October 2022</li>
              </ul>
              <button className="rounded-3xl bg-white py-2 px-8 text-[#123d62]">
                <Link
                  target="_blank"
                  href="https://dl.acm.org/doi/10.1145/3556384.3556414"
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>

          {/* Card 2 Container */}
          <div className="space-y-4 rounded-xl bg-[#00000038] px-16 py-8 text-left text-white md:w-[700px] md:space-y-5">
            <h3 className="max-w-lg text-xl font-medium md:max-w-md">
              Covid 19 Calculator -- Positive U.S. Socio-Economic Impact
            </h3>
            <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
              <ul className="list-inside list-disc">
                <li>January 2022</li>
              </ul>
              <button className="rounded-3xl bg-white py-2 px-8 text-[#123d62]">
                <Link
                  target="_blank"
                  href="https://dl.acm.org/doi/10.1145/3556384.3556414"
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>

          {/* Card 3 Container */}
          <div className="space-y-4 rounded-xl bg-[#00000038] px-16 py-8 text-left text-white md:w-[700px] md:space-y-5">
            <h3 className="max-w-lg text-xl font-medium md:max-w-md">
              Using Deep Learning with Large Aggregated Datasets for COVID-19
              Classification from Cough
            </h3>
            <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
              <ul className="list-inside list-disc">
                <li>January 2022</li>
              </ul>
              <button className="rounded-3xl bg-white py-2 px-8 text-[#123d62]">
                <Link
                  target="_blank"
                  href="https://dl.acm.org/doi/10.1145/3556384.3556414"
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>

          {/* Card 4 Container */}
          <div className="space-y-4 rounded-xl bg-[#00000038] px-16 py-8 text-left text-white md:w-[700px] md:space-y-5">
            <h3 className="max-w-lg text-xl font-medium md:max-w-md">
              Virufy: Global Applicability of Crowdsourced and Clinical Datasets
              for AI Detection of COVID-19 from Cough
            </h3>
            <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
              <ul className="list-inside list-disc">
                <li>November 2020</li>
              </ul>
              <button className="rounded-3xl bg-white py-2 px-8 text-[#123d62]">
                <Link
                  target="_blank"
                  href="https://dl.acm.org/doi/10.1145/3556384.3556414"
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>

          {/* Card 5 Container */}
          <div className="space-y-4 rounded-xl bg-[#00000038] px-16 py-8 text-left text-white md:w-[700px] md:space-y-5">
            <h3 className="max-w-lg text-xl font-medium md:max-w-md">
              Challenges and Opportunities in the Deploying of COVID-19 Cough AI
              Systems
            </h3>
            <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
              <ul className="list-inside list-disc">
                <li>September 2021</li>
              </ul>
              <button className="rounded-3xl bg-white py-2 px-8 text-[#123d62]">
                <Link
                  target="_blank"
                  href="https://dl.acm.org/doi/10.1145/3556384.3556414"
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Record/Share Your Cough Container */}
        <div className="relative mx-auto max-w-4xl space-y-14 px-10 py-40 text-center font-medium text-white">
          <p className="text-5xl leading-normal md:text-4xl md:leading-relaxed">
            Let's help the world and save lives by recording your cough
          </p>
          <button className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 px-10 py-6 text-3xl font-medium md:py-4 md:px-8 md:text-lg">
            <Link target="_blank" href="https://virufy.org/study/welcome">
              Share Your Cough
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

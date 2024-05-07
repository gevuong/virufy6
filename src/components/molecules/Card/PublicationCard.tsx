import Link from 'next/link'
import { type PublicationCard } from '~/i18n/types/Publications'

type Props = PublicationCard

const PublicationCard = ({ title, date, url, linkText }: Props) => {
  return (
    <>
      <h3 className="max-w-lg text-xl font-medium md:max-w-md">{title}</h3>
      <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
        <ul className="list-inside list-disc">
          <li>{date}</li>
        </ul>
        <Link
          className="rounded-3xl bg-white py-2 px-8 text-[#123d62]"
          target="_blank"
          href={url}
        >
          {linkText}
        </Link>
      </div>
    </>
  )
}

export default PublicationCard

import Link from 'next/link'
import { type PublicationCard } from '~/i18n/types/Publications'

const PublicationCard = ({ title, date, url, linkText }: PublicationCard) => {
  return (
    <>
      <h3 className="max-w-lg text-xl font-medium md:max-w-md">{title}</h3>
      <div className="items-center space-y-6 md:flex md:flex-row md:justify-between md:space-y-0">
        <ul className="list-inside list-disc pb-6">
          <li>{date}</li>
        </ul>
        <Link
          className="rounded-3xl bg-white py-2 px-4 text-[#123d62] sm:px-8"
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

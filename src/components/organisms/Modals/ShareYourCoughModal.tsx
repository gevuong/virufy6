import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '~/i18n'
import Modal from './Modal'

interface Prop {
  isOpen: boolean
  handleClose: () => void
}

const ShareYourCoughModal = ({ isOpen, handleClose }: Prop) => {
  const { ShareYourCough: ShareYourCough } = useI18n()

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {/* Modal Container */}
      <div className="py-16 text-center font-medium">
        {/* Image Container */}
        <div className="flex items-center justify-center">
          <Image
            src={ShareYourCough.image}
            alt="Virufy logo"
            width={140}
            height={50}
          />
        </div>

        {/* Text */}
        <div className="my-10 text-sm text-white">{ShareYourCough.text}</div>
        <h1 className="mb-16 text-2xl text-green-500">
          {ShareYourCough.title}
        </h1>

        {/* Link Container */}
        <div>
          <Link
            href={ShareYourCough.linkUrl}
            target="_blank"
            className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 py-4 px-12 text-xl text-white"
          >
            {ShareYourCough.linkText}
          </Link>
        </div>
      </div>
    </Modal>
  )
}

export default ShareYourCoughModal

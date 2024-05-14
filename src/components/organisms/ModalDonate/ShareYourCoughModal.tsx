import Image from 'next/image'
import Link from 'next/link'
import VirufyLogo from '~/assets/static/images/logo/virufy.svg'
import Modal from './Modal'

interface Prop {
  isOpen: boolean
  handleClose: () => void
}

const ShareYourCoughModal = ({ isOpen, handleClose }: Prop) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
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
    </Modal>
  )
}

export default ShareYourCoughModal

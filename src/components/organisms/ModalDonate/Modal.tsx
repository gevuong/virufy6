import { useEffect, useRef } from 'react'

interface Prop {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, handleClose, children }: Prop) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const modalEl = modalRef.current
    if (modalEl) {
      if (isOpen) {
        modalEl.showModal()
      } else {
        modalEl.close()
      }
    }
  }, [isOpen])

  return (
    <dialog
      className="mx-auto max-w-xs rounded-3xl bg-gradient-to-b from-black to-[#3468B2] backdrop:bg-black/50 md:max-w-sm md:rounded-xl md:px-6"
      ref={modalRef}
    >
      <button
        onClick={handleClose}
        className="absolute right-8 top-5 text-white duration-200 hover:scale-110"
      >
        X
      </button>
      {children}
    </dialog>
  )
}

export default Modal

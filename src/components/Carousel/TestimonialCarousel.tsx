import Image from 'next/image'
import { useState } from 'react'
import { type Testimonial } from '../../i18n/types/OneYoungWorld'

interface Props {
  testimonials: Testimonial[]
}

const TestimonialCarousel = ({ testimonials }: Props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const { name, origin, image, altText, testimonial } =
    testimonials[currentPage]

  return (
    <div className="mx-4 flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <button
        disabled={currentPage <= 0}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="h-[45px] w-[45px] rounded-full bg-[#3578de] bg-opacity-30 text-2xl"
      >
        &lt;
      </button>

      {/* Card Container */}
      <div className="flex w-48 flex-col items-center space-y-14 rounded-2xl bg-[#3578de] bg-opacity-30 px-4 py-10 text-center font-medium sm:w-64 sm:max-w-xs md:w-auto md:max-w-sm">
        <blockquote className="text-sm leading-loose">{testimonial}</blockquote>

        {/* Author Container */}
        <div className="space-y-4">
          <Image
            className="mx-auto rounded-full"
            src={image}
            alt={altText}
            width="64"
            height="64"
          />
          <div className="text-lg">{name}</div>
          <div className="text-sm">{origin}</div>
        </div>
      </div>

      {/* Next Button */}
      <button
        disabled={currentPage >= testimonials.length - 1}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="h-[45px] w-[45px] rounded-full bg-[#3578de] bg-opacity-30 text-2xl"
      >
        &gt;
      </button>
    </div>
  )
}

export default TestimonialCarousel

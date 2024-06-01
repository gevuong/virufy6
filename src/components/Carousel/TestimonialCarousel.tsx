import { useState } from 'react'
import { type Testimonial } from '../../i18n/types/OneYoungWorld'
import TestimonialCard from '../molecules/Card/TestimonialCard'

interface Props {
  testimonials: Testimonial[]
}

const TestimonialCarousel = ({ testimonials }: Props) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex((index) => {
      if (imageIndex === testimonials.length - 1) return 0
      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (imageIndex === 0) return testimonials.length - 1
      return index - 1
    })
  }

  return (
    <div className="flex items-center justify-center space-x-2 pb-12 md:space-x-6">
      {/* Previous Button */}
      <button
        disabled={imageIndex <= 0}
        onClick={showPrevImage}
        className="h-[48px] w-[48px] rounded-full bg-[#3578de] bg-opacity-30 text-2xl disabled:opacity-0"
      >
        &lt;
      </button>

      {/* Card Container */}
      <div className="md:max-w-[450px]">
        {/* <div className="w-48 sm:w-64 md:w-auto md:max-w-[450px]"> */}
        <div className="flex overflow-hidden">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              {...testimonial}
              totalTestimonials={testimonials.length}
              imageIndex={imageIndex}
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        disabled={imageIndex >= testimonials.length - 1}
        onClick={showNextImage}
        className="h-[48px] w-[48px] rounded-full bg-[#3578de] bg-opacity-30 text-2xl disabled:opacity-0"
      >
        &gt;
      </button>
    </div>
  )
}

export default TestimonialCarousel

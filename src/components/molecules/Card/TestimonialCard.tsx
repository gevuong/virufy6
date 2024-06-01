import Image from 'next/image'
import { type Testimonial } from '../../../i18n/types/OneYoungWorld'

interface Props extends Testimonial {
  totalTestimonials: number
  imageIndex: number
}

const TestimonialCard = ({
  testimonial,
  image,
  altText,
  name,
  origin,
  imageIndex,
  totalTestimonials,
}: Props) => {
  const offset = totalTestimonials === imageIndex + 1 ? 15 : 0
  const translatePercent = -100 * imageIndex + offset

  return (
    <div
      className={`h-full w-full shrink-0 grow-0 object-cover transition duration-500 ease-in-out md:w-11/12 translate-x-[${translatePercent}%]`}
    >
      <div className="flex h-[575px] w-48 flex-col items-center justify-between rounded-2xl bg-[#3578de] bg-opacity-30 px-4 py-8 text-center font-medium sm:h-[475px] sm:w-64 sm:max-w-xs md:h-[448px] md:w-auto md:max-w-sm md:px-6">
        <blockquote className="text-sm leading-loose md:text-base md:leading-relaxed">
          {testimonial}
        </blockquote>

        {/* Author Container */}
        <div className="space-y-4">
          <Image
            className="mx-auto rounded-full"
            src={image}
            alt={altText}
            width="64"
            height="64"
          />
          <div className="text-base">{name}</div>
          <div className="text-sm">{origin}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

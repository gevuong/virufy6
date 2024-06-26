import TextBelowImg from '~/components/molecules/TextinsImg/TextBelowImg'
import ImageinsText from '~/assets/static/images/JobListing/Hero.png'
import TitleText from '~/components/molecules/TitleText/TitleText'
import JobList from '~/components/organisms/JobList/JobList'
import { useI18n } from '~/i18n'
import TextinsImg from '~/components/molecules/TextinsImg/TextinsImg'
import TextinsImg3 from '~/components/molecules/TextinsImg/TextinsImg3'
import { ImageSize } from '~/components/themes'

export default function JobListing() {
  const {
    JobListing: { titleImage, title, text },
  } = useI18n()

  return (
    <div className='bg-[#142037]'>
      <TextinsImg3
        sizeImg="width-100vw"
        borderImg="none"
        src={ImageinsText}
        altImg=""
        Text={titleImage}
      />
      <div className="bg-gradient-to-b from-[#142037] to-[#3F64A8]">
        <div className="flex max-w-[1440px] flex-col mx-auto">
          
          <TitleText
            TitleSize={'h5'}
            TitleClassProps={'text-white text-center md:text-left'}
            TitleLabel={title}
            ContainerTitleProps={
              'md:mt-[40px] mb-5 md:ml-[10%]'
            }
            TextSize={'normal'}
            TextClassProps={'text-white text-left'}
            TextLabel={text}
            ContainerTextProps={'mt-[16px] mb-[40px] ml-[10%] w-[80%]'}
          />

          <JobList />
        </div>
      </div>
    </div>
  )
}

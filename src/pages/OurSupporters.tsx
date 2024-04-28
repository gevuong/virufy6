import TextinsImg2 from '~/components/molecules/TextinsImg/TextinsImg2'
import ImageinsText from '~/assets/static/images/ourSupporters/ImageinsText.png'
import CardLarge from '~/components/organisms/section-9/CardLarge'

import { useI18n } from '~/i18n'

import Card1 from '~/assets/static/images/ourSupporters/card1.jpg'
import Card2 from '~/assets/static/images/ourSupporters/card2.jpg'
import Card3 from '~/assets/static/images/ourSupporters/card3.jpg'
import Card4 from '~/assets/static/images/ourSupporters/card4.jpg'
import Title from '~/components/atoms/Title/Title'
import Card1TL from '~/assets/static/images/ourSupporters/card1.png'
import Card2TL from '~/assets/static/images/ourSupporters/card2.png'
import Card3TL from '~/assets/static/images/ourSupporters/card3.png'
import Card4TL from '~/assets/static/images/ourSupporters/card4.png'
import Card5TL from '~/assets/static/images/ourSupporters/card5.png'
import Card6TL from '~/assets/static/images/ourSupporters/card6.png'
import Card7TL from '~/assets/static/images/ourSupporters/card7.png'
import Card8TL from '~/assets/static/images/ourSupporters/card8.png'
import Card9TL from '~/assets/static/images/ourSupporters/card9.png'
import Card10TL from '~/assets/static/images/ourSupporters/card10.png'
import Card11TL from '~/assets/static/images/ourSupporters/card11.png'
import Card12TL from '~/assets/static/images/ourSupporters/card12.png'
import Card13TL from '~/assets/static/images/ourSupporters/card13.png'
import Card14TL from '~/assets/static/images/ourSupporters/card14.png'
import Card15TL from '~/assets/static/images/ourSupporters/card15.png'
import Card16TL from '~/assets/static/images/ourSupporters/card16.png'
import Card17TL from '~/assets/static/images/ourSupporters/card17.png'
import Card18TL from '~/assets/static/images/ourSupporters/card18.png'
import Card19TL from '~/assets/static/images/ourSupporters/card19.png'
import Card from '~/components/molecules/Card/Card'

import Supporter1 from '~/assets/static/images/ourSupporters/icon-supports/supporter-1.png'
import Supporter2 from '~/assets/static/images/ourSupporters/icon-supports/supporter-2.png'
import Supporter3 from '~/assets/static/images/ourSupporters/icon-supports/supporter-3.png'
import Supporter4 from '~/assets/static/images/ourSupporters/icon-supports/supporter-4.png'
import Supporter5 from '~/assets/static/images/ourSupporters/icon-supports/supporter-5.png'
import Supporter6 from '~/assets/static/images/ourSupporters/icon-supports/supporter-6.png'
import Supporter7 from '~/assets/static/images/ourSupporters/icon-supports/supporter-7.png'
import Supporter8 from '~/assets/static/images/ourSupporters/icon-supports/supporter-8.png'
import Supporter9 from '~/assets/static/images/ourSupporters/icon-supports/supporter-9.png'
import Supporter10 from '~/assets/static/images/ourSupporters/icon-supports/supporter-10.png'
import Supporter11 from '~/assets/static/images/ourSupporters/icon-supports/supporter-11.png'
import Supporter12 from '~/assets/static/images/ourSupporters/icon-supports/supporter-12.png'
import Supporter13 from '~/assets/static/images/ourSupporters/icon-supports/supporter-13.png'
import Supporter14 from '~/assets/static/images/ourSupporters/icon-supports/supporter-14.png'
import Supporter15 from '~/assets/static/images/ourSupporters/icon-supports/supporter-15.png'
import Supporter16 from '~/assets/static/images/ourSupporters/icon-supports/supporter-16.png'
import Supporter17 from '~/assets/static/images/ourSupporters/icon-supports/supporter-17.png'
import Supporter18 from '~/assets/static/images/ourSupporters/icon-supports/supporter-18.png'
import Supporter19 from '~/assets/static/images/ourSupporters/icon-supports/supporter-19.png'
import Supporter20 from '~/assets/static/images/ourSupporters/icon-supports/supporter-20.png'
import Supporter21 from '~/assets/static/images/ourSupporters/icon-supports/supporter-21.png'
import Supporter22 from '~/assets/static/images/ourSupporters/icon-supports/supporter-22.png'
import Supporter23 from '~/assets/static/images/ourSupporters/icon-supports/supporter-23.png'
import Supporter24 from '~/assets/static/images/ourSupporters/icon-supports/supporter-24.png'
import Supporter25 from '~/assets/static/images/ourSupporters/icon-supports/supporter-25.png'
import Supporter26 from '~/assets/static/images/ourSupporters/icon-supports/supporter-26.png'
import Supporter27 from '~/assets/static/images/ourSupporters/icon-supports/supporter-27.png'

/* import Card1VH from "~/assets/static/images/ourSupporters/card1-VH.png"
import Card2VH from "~/assets/static/images/ourSupporters/card2-VH.png" */

import SectionOneYoungWorld from '~/components/organisms/SectionOneYoungWorld/SectionOneYoungWorld'
import TitleText from '~/components/molecules/TitleText/TitleText'
import CardSliderTall from '~/components/organisms/CardSlider/CardSliderTall'
import OurSupportersSection from '~/components/organisms/OurSupportersSection/OurSupportersSection2'

export default function OurSupporters() {
  const {
    OurSupporters: {
      titleImage,
      sectionSupporters,
      sectionOneYoungWorld,
      sectionVolunterStories,
      sectionTeamLeads,
    },
  } = useI18n()

  const CardsData = [
    {
      route: Card1,
      name: sectionOneYoungWorld.cardTitles[0],
      text: sectionOneYoungWorld.cardTexts[0],
    },
    {
      route: Card2,
      name: sectionOneYoungWorld.cardTitles[1],
      text: sectionOneYoungWorld.cardTexts[1],
    },
    {
      route: Card3,
      name: sectionOneYoungWorld.cardTitles[2],
      text: sectionOneYoungWorld.cardTexts[2],
    },
    {
      route: Card4,
      name: sectionOneYoungWorld.cardTitles[3],
      text: sectionOneYoungWorld.cardTexts[3],
    },
  ]

  const CardsDataTL = [
    {
      route: Card1TL,
      name: sectionTeamLeads.names[0],
      text: sectionTeamLeads.texts[0],
    },
    {
      route: Card2TL,
      name: sectionTeamLeads.names[1],
      text: sectionTeamLeads.names[1],
    },
    {
      route: Card3TL,
      name: sectionTeamLeads.names[2],
      text: sectionTeamLeads.names[2],
    },
    {
      route: Card4TL,
      name: sectionTeamLeads.names[3],
      text: sectionTeamLeads.names[3],
    },
    {
      route: Card5TL,
      name: sectionTeamLeads.names[4],
      text: sectionTeamLeads.names[4],
    },
    {
      route: Card6TL,
      name: sectionTeamLeads.names[5],
      text: sectionTeamLeads.names[5],
    },
    {
      route: Card7TL,
      name: sectionTeamLeads.names[6],
      text: sectionTeamLeads.names[6],
    },
    {
      route: Card8TL,
      name: sectionTeamLeads.names[7],
      text: sectionTeamLeads.names[7],
    },
    {
      route: Card9TL,
      name: sectionTeamLeads.names[8],
      text: sectionTeamLeads.names[8],
    },
    {
      route: Card10TL,
      name: sectionTeamLeads.names[9],
      text: sectionTeamLeads.names[9],
    },
    {
      route: Card11TL,
      name: sectionTeamLeads.names[10],
      text: sectionTeamLeads.names[10],
    },
    {
      route: Card12TL,
      name: sectionTeamLeads.names[11],
      text: sectionTeamLeads.names[11],
    },
    {
      route: Card13TL,
      name: sectionTeamLeads.names[12],
      text: sectionTeamLeads.names[12],
    },
    {
      route: Card14TL,
      name: sectionTeamLeads.names[13],
      text: sectionTeamLeads.names[13],
    },
    {
      route: Card15TL,
      name: sectionTeamLeads.names[14],
      text: sectionTeamLeads.names[14],
    },
    {
      route: Card16TL,
      name: sectionTeamLeads.names[15],
      text: sectionTeamLeads.names[15],
    },
    {
      route: Card17TL,
      name: sectionTeamLeads.names[16],
      text: sectionTeamLeads.names[16],
    },
    {
      route: Card18TL,
      name: sectionTeamLeads.names[17],
      text: sectionTeamLeads.names[17],
    },
    {
      route: Card19TL,
      name: sectionTeamLeads.names[18],
      text: sectionTeamLeads.names[18],
    },
  ]

  /*   const cardSliderData = [
      {
        route: Card1VH,
        name: "Annelisse Torrez Daza",
        textLabel: "“Having suffered through COVID myself along with all of my family in a underprivileged country, I knew instantly that I could make a difference and prevent others from facing my same fate by joining Virufy.”",
        country: "Bolivia",
      },
      {
        route: Card2VH,
        name: "Sebastian Pedraza",
        textLabel: "“Virufy unites the power of youth and technology to transform the world. We hope that this solution will reach the whole world and that it will become a support for doctors, especially in low-income countries.”",
        country: "Columbia",
      },
    ] */

  return (
    <div className=''>

      {/* Globe background img */}
      <TextinsImg2
        sizeImg=""
        borderImg="none"
        src={ImageinsText}
        altImg="background img"
        Text={titleImage} 
      />

      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#111B2E] to-[#4064AD] z-10 -top-24 relative">

        <div className="flex max-w-[1440px] flex-col items-center justify-center" id='supps'>
         <OurSupportersSection TextProps={sectionSupporters} />
        </div>
        
      </div>
    </div>
  )
}

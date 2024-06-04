import Image from 'next/image'
import { useState } from 'react'
import {
  type OywNavbarTexts,
  type OywSection,
} from '~/i18n/types/OneYoungWorld'
import Navbar from './Navbar'
import OneYoungWorld from './OneYoungWorld'
import TeamLeads from './TeamLeads/TeamLeads'

interface Props {
  oyw: OywSection
  navbarTexts: OywNavbarTexts
}

const MainContent = ({ oyw, navbarTexts }: Props) => {
  const [showTeamLeads, setShowTeamLeads] = useState(false)

  return (
    <>
      {/* image is only shown under 'One Young World' tab in non-mobile view */}
      {!showTeamLeads && (
        <Image
          className="hidden md:absolute md:block md:h-full md:w-full md:rotate-180 md:object-cover md:opacity-30"
          src={oyw.bgImage}
          alt={oyw.altText}
          priority
        />
      )}

      <Navbar
        showTeamLeads={showTeamLeads}
        setShowTeamLeads={setShowTeamLeads}
        navbarTexts={navbarTexts}
      />

      {showTeamLeads ? <TeamLeads /> : <OneYoungWorld {...oyw} />}
    </>
  )
}

export default MainContent

import Image, { type StaticImageData } from 'next/image'
import { useState } from 'react'
import Navbar from './Navbar'
import OneYoungWorld from './OneYoungWorld/OneYoungWorld'
import TeamLeads from './TeamLeads/TeamLeads'

const MainContent = ({ bgImage }: { bgImage: StaticImageData }) => {
  const [showTeamLeads, setShowTeamLeads] = useState(false)

  return (
    <>
      {/* image is only shown under 'One Young World' tab in non-mobile view */}
      {!showTeamLeads && (
        <Image
          className="hidden md:absolute md:block md:h-full md:w-full md:object-cover md:opacity-30"
          src={bgImage}
          alt=""
          priority
        />
      )}

      <Navbar
        showTeamLeads={showTeamLeads}
        setShowTeamLeads={setShowTeamLeads}
      />

      {showTeamLeads ? <TeamLeads /> : <OneYoungWorld />}
    </>
  )
}

export default MainContent

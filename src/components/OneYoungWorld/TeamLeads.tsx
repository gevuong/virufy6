import { type TeamLeadsSection } from '~/i18n/types/OneYoungWorld'
import TeamLeadCard from '../molecules/Card/TeamLeadCard'

const TeamLeads = ({ title, cards }: TeamLeadsSection) => {
  return (
    <section className="">
      {/* Team Leads Container */}
      <div className="px-8 text-white">
        <h1 className="py-12 text-center text-2xl font-bold">{title}</h1>

        {/* Cards Container */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <TeamLeadCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamLeads

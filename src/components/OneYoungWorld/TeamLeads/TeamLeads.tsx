import TeamLeadCard from './TeamLeadCard'
import { useI18n } from '~/i18n'

const TeamLeads = () => {
  const {
    TeamLeads: { title, cards },
  } = useI18n()

  return (
    <section className="mx-auto flex items-center justify-center pb-24">
      {/* Team Leads Container */}
      <div className="px-6 text-white">
        <h1 className="py-14 text-center text-2xl font-bold md:py-20 md:text-left md:text-4xl md:font-semibold">
          {title}
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-2 gap-6 lg:gap-12 xl:grid-cols-3">
          {cards.map((card, i) => (
            <TeamLeadCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamLeads

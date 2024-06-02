interface Props {
  showTeamLeads: boolean
  setShowTeamLeads: React.Dispatch<React.SetStateAction<boolean>>
}

interface ListItemProps {
  text: string
  isActive: boolean
  onClick: () => void
}

const Navbar = ({ showTeamLeads, setShowTeamLeads }: Props) => {
  return (
    <nav className="font-medium text-white md:pt-2 md:opacity-95">
      <ul className="m-0 flex cursor-pointer justify-around border-b border-t border-gray-500 p-0 text-center md:items-center md:justify-center md:gap-x-24 md:border-none md:font-semibold">
        <ListItem
          isActive={!showTeamLeads}
          text="One Young World"
          onClick={() => setShowTeamLeads(false)}
        />
        <ListItem
          isActive={showTeamLeads}
          text="Team Leads"
          onClick={() => setShowTeamLeads(true)}
        />
      </ul>
    </nav>
  )
}

const ListItem = ({ text, isActive, onClick }: ListItemProps) => {
  const activeStyle =
    'bg-green-800 font-bold md:border-b-2 md:border-[#30DA74] md:font-semibold'
  const notActiveStyle = 'md:border-b-2 md:border-transparent'

  return (
    <li
      className={`w-1/2 py-4 md:w-auto md:bg-inherit md:text-xl ${
        isActive ? activeStyle : notActiveStyle
      }`}
      onClick={onClick}
    >
      {text}
    </li>
  )
}

export default Navbar

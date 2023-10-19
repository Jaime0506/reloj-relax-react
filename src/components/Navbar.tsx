interface Props {
    toggleDrawer: () => void
}

export const Navbar = ({ toggleDrawer }: Props) => {
  return (
    <nav className="flex p-4 items-center">
        <i className="fa-solid fa-bars text-white text-xl hover:cursor-pointer" onClick={toggleDrawer}></i>
    </nav>
  )
}

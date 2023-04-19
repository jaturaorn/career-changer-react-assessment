import Navbar from './Navbar';
const LayoutNav = ({ children,setSector }) => {
  return (
    <div>
        <Navbar  setSector={setSector} />
        {children}
    </div>
  )
}

export default LayoutNav
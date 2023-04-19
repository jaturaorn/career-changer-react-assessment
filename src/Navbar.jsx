
const Navbar = ({setSector}) => {
  return (
    <>
        <ul>
            <li><a href={'/'} onClick={() => setSector('')}>Home</a></li>
            <li><a href={'/Owner'}>Owner</a></li>
        </ul>
    </>
  )
}

export default Navbar
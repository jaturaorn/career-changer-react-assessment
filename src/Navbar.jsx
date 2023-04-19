import { Link } from 'react-router'

const Navbar = ({setSector}) => {
  return (
    <>
        <ul>
            <li><Link to={'/'} onClick={() => setSector('')}>Home</Link></li>
            <li><Link to={'/Owner'}>Owner</Link></li>
        </ul>
    </>
  )
}

export default Navbar
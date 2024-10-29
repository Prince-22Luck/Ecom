import Navcss from './Navbar.module.css'
import logo from '../assets/logo.webp'
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom'
const Navbar = ({name}) => {
  return (
    <div className={Navcss.nav}>
     <div className={Navcss.logoimg}>
      <img src={logo} alt="PC Hub"  />
     </div>
      <div className={Navcss.logoname}>PC Hub</div>
      <div className={Navcss.list}>
      <li className={Navcss.list_element}><Link to='/auth' style={{textDecoration:'none',color:'inherit'}}>Home</Link></li>
      <li className={Navcss.list_element}><Link to='/auth' style={{textDecoration:'none',color:'inherit'}}>Products</Link></li>
      <li className={Navcss.list_element}>Services</li>
      <li className={Navcss.list_element}>About Us</li>
      </div>
      <button className={Navcss.button}>
  {name === "Sign Up" ? (
    <Link to='/auth' style={{ textDecoration: 'none', color: 'inherit' }}>
      {name}
    </Link>
  ) : (
   <Link to='/profile'>{name}</Link>
  )}
</button>


    </div>
  )
}
Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar
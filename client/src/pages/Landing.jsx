
import LandingCss from  './Landing.module.css'
import Navbar from '../components/Navbar'
import cpuvideo from '../assets/video/cpu.mp4'
import { Link } from 'react-router-dom'



const Landing = () => {
  return (
   <>
   <Navbar name={"Sign Up"}></Navbar>
   <div className={LandingCss.container}>

    <div className={LandingCss.leftSide}>
      <p>We Build People, Before we build <span>PC </span>...</p>
      <button className={LandingCss.button}><Link to='/auth' style={{textDecoration:'none',color:'inherit'}}>Get Started</Link></button>
    </div>


    <div className={LandingCss.rightSide}>
    <video src={cpuvideo} autoPlay loop muted></video>
    </div>

   </div>

   </>
  )
}

export default Landing
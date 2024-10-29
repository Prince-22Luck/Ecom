import  {useState} from 'react'
import AuthCSs from './Auth.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  
  const navigate = useNavigate();
   const [name,setName]  = useState();
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();
   const [lemail,setlEmail] = useState();
   const [lpassword,setlPassword] = useState();

    const [isLogin,setLogin] = useState(true);

    const loginSubmit = async (e)=>{
      e.preventDefault();
      try{
      await axios.post('http://localhost:3001/login',{email:lemail,password:lpassword});
        navigate('/home')
      }
      catch(e){
       console.log(e)
       console.log("Error occured in Auth Login")
      }
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        await axios.post('http://localhost:3001/register',{name,email,password})
        console.log("submit is running")
        Signfun()
      }
      catch(e){
        console.log(e)
      }
     
    }
   
   const Loginfun = ()=>{
    setLogin(true);
   }

   const Signfun = ()=>{
    setLogin(false);
   }
  return (
    <>
   {isLogin?(
    <div className={AuthCSs.body}>
    <div className={AuthCSs.wrapper}>
    <div className={AuthCSs.leftLayout}>
       <form className={AuthCSs.container} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder='Name' required/>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' required />
         <button className={AuthCSs.button} type='submit'>Sign Up</button>
        <p>Already have an account? <a href='#'onClick={Signfun}>Sign In</a></p>
        </form>
        <div className={AuthCSs.info1}>
            <h2>Hello Friend!</h2>
            <p>To collaborate with us Please sign Up</p>
        </div>
    </div>
  </div>
  </div>
  
   ):(
    <div className={AuthCSs.body}>
    <div className={AuthCSs.wrapper}>
    <div className={AuthCSs.leftLayout}>
        <div className={AuthCSs.info1}>
            <h2>Welcome Back!</h2>
            <p>To stay connected with us Please sign In</p>
        </div>
       <form className={AuthCSs.container} onSubmit={loginSubmit}>
        <h2>Sign In</h2>
        <input className={AuthCSs}type="email" onChange={(e)=>setlEmail(e.target.value)} value={lemail} placeholder='Email' required/>
        <input className={AuthCSs}type="password" onChange={(e)=>setlPassword(e.target.value)} value={lpassword} placeholder='Password' required />
        <button className={AuthCSs.button} type='submit' >Sign In</button>
        <p>Dont have an account? <a href='#' onClick={Loginfun}>Sign Up</a></p>

        </form>
    </div>
  </div>
  </div>
  
   )
   
   }
  </>
  
  )
}

export default Auth
"use client"
import React from 'react'
import Link from 'next/link'
import Typewriter from "react-typewriter-effect"


function Home() {
  return (
    <div>
      <div className="grid grid-cols-50 grid-rows-50 gap-4 "></div>
      <div className="bg-red-400 h-20 width-full text-5xl" > <Link href={"/services"}> Services, </Link> <Link href={"/about"}> About,</Link> <Link href={"/contact"}> Contact</Link>
      </div > <br />
      <Typewriter text="This is ALISHA ZEHRA

      Welcome to my Portfolio "
      cursorColor= "red"
      textStyle ={{fontFamily: "bold",
        fontSize: "4em",
        textAlign: "center"
        
      }}
      startDelay ={100}
      typeSpeed ={100}
      hideCursorAfterText
      />
    <div style={{width:"60 px",
      height: "20 px",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
       

    }} ><img className='img' src="alisha.jpg"  style={{width: "100%", height:"100%" , objectFit: "cover"}} /> <br /> </div> 
      <button> <Link href={"/contact"}> Contact me</Link></button> <br />
      <hr />
  <div> <Typewriter text="View my Profiles here to reach me out"


cursorColor= "red"
textStyle ={{fontFamily: "italic",
  fontSize: "4em",
  color: "goldenrod"
  
   
}}
startDelay ={100}
typeSpeed ={100}
hideCursorAfterText
/>
<Link href="https://www.linkedin.com/in/syeda-alisha-zehra-52868b1b0/"> <img  src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png" width={"20%"}  /> <h3>My linkedin profile</h3> </Link>
<Link href={"https://github.com/alishazehra/portfolio1.git"}><img src="https://th.bing.com/th/id/OIP.qdiXe0vKmri2QBmj_IM-dQHaBl?rs=1&pid=ImgDetMain" alt="" />  <h3>My github profile</h3></Link>
<img src="https://wallpaperaccess.com/full/1567679.jpg" alt="" /> 

</div> 
      </div>
  



      
      
  )
}

export default Home

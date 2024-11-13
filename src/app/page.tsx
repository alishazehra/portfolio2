import React from 'react'
import Link from 'next/link'
import Image from 'next/image'




function Home() {
  return (
    <div>
      <div className="grid grid-cols-15 grid row "></div>
      <div className="bg-red-400"> <Link href={"/services"}> Services, </Link> <Link href={"/about"}> About,</Link> <Link href={"/contact"}> Contact</Link>
      </div > <br />
      <img src="alisha.jpg" height={"50%"}  width={"50%"}/> <br />
      <button> <Link href={"/contact"}> Contact me</Link></button> <br />
      </div>
  )
}

export default Home

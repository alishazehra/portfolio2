"use client"
import React from 'react'
import Link from 'next/link'


function Home() {
  return (
    <div>
      <div className="grid grid-cols-50 grid row  "></div>
      <div className="bg-red-400"> <Link href={"/services"}> Services, </Link> <Link href={"/about"}> About,</Link> <Link href={"/contact"}> Contact</Link>
      </div > <br />
      <h1 style={{textAlign:"center", textDecoration: "underline",  }}>This is Alisha Zehra, Welcome to my Portfolio! </h1>
      <img src="alisha.jpg" height={"40%"}  width={"40%"}/> <br />
      <button> <Link href={"/contact"}> Contact me</Link></button> <br />
      
      
      </div>
  )
}

export default Home

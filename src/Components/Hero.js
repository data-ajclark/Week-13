import React from "react";
import video1 from "../Videos/video1.mp4";
import { Button } from "./Button.js"
import "../Hero.css"

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src={video1} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;

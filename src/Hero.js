import React from "react";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import './App.css'

const Hero = () => {
    return (
        <>
            <div className="MuiContainer-root jss1361 MuiContainer-maxWidthLg">
                <div className="MuiGrid-root jss1362 MuiGrid-Container" style={{display:'flex', flexDirection:'column'}}>
                    <HeroSection1 />
                    <HeroSection2 />
                </div>
            </div>
        </>
    );

}

export default Hero;
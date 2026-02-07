import { Button, LinkButton } from "../components/button"
import { Sticker } from "../components/sticker"
import skyMascot from '../assets/images/mascot_sky.png'
import strawberryMascot from '../assets/images/mascot_strawberry.png'
import inchwormMascot from '../assets/images/mascot_inchworm.png'
import bigLogo from '../assets/images/logo_transparent.png'
import { Link } from "react-router"

export const Home = () => {
  return (
    <div className="">
        {/* Main layout: mascots on left, content on right */}
        <div className="flex gap-8 w-full">
            {/* Left side: mascot stack spanning full height */}
            <div className="hidden md:flex flex-col justify-between items-center gap-4 w-52 md:w-60 lg:w-72">
                <Sticker fidget={true} size="xl">
                    <img 
                        src={inchwormMascot} 
                        alt="Inchworm colored Mascot" 
                        className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                    />
                </Sticker>
                <Sticker fidget={true} size="xl">
                    <img 
                        src={skyMascot} 
                        alt="Sky colored Mascot"
                        className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                    />
                </Sticker>
                <Sticker fidget={true} size="xl">
                    <img 
                        src={strawberryMascot} 
                        alt="Strawberry colored Mascot"
                        className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                    />
                </Sticker>
            </div>
                
            {/* Right side: logo and buttons */}
            <div className="flex flex-col flex-1 gap-8 items-center justify-center">
                {/* Big logo with animation */}
                <div className="shimmer-wrapper gradient-bg max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl w-full">
                    <div className="relative w-full">
                        <img 
                            src={bigLogo} 
                            alt="JNS - Jordyn Niara Smith Logo with rainbow gradient background and shimmering animation" 
                            className="w-full max-h-64 md:max-h-80 lg:max-h-96 object-contain relative z-10"
                        />
                    </div>
                    <div className="font-title text-h2 md:text-h1 lg:text-title text-wetsoil text-center mt-4 md:mt-4 lg:mt-6 relative z-10">
                        Jordyn Niara Smith
                    </div>
                </div>
                {/* Buttons row */}
                <div className="flex gap-4 flex-col w-full justify-center lg:flex-row lg:flex-wrap lg:w-auto">
                    <LinkButton to="/about" className="link-btn-inchworm">About</LinkButton>
                    <LinkButton to="/projects" className="link-btn-sky">Projects</LinkButton>
                    <LinkButton to="/resume" className="link-btn-strawberry">Resume</LinkButton>
                    <LinkButton to="/contact" className="link-btn-inchworm">Contact</LinkButton>
                    {/* <Link to="/creativity-project"><Button variant="sky">The Creativity Project</Button></Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}

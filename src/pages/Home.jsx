import { Button } from "../components/button"
import skyMascot from '../assets/mascot_sky.png'
import strawberryMascot from '../assets/mascot_strawberry.png'
import inchwormMascot from '../assets/mascot_inchworm.png'
import bigLogo from '../assets/logo_transparent.png'

export const Home = () => {
  return (
    <div className="min-h-screen p-8 flex items-center">
        {/* Main layout: mascots on left, content on right */}
        <div className="flex gap-8 w-full">
            {/* Left side: mascot stack spanning full height */}
            <div className="hidden md:flex flex-col justify-between gap-4 w-52 md:w-60 lg:w-72">
                <img 
                    src={inchwormMascot} 
                    alt="Inchworm colored Mascot" 
                    className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                />
                <img 
                    src={skyMascot} 
                    alt="Sky colored Mascot"
                    className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                />
                <img 
                    src={strawberryMascot} 
                    alt="Strawberry colored Mascot"
                    className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                />
            </div>
                
            {/* Right side: logo and buttons */}
            <div className="flex flex-col flex-1 gap-8 items-center justify-center">
                {/* Big logo with animation */}
                <div className="shimmer-wrapper gradient-bg max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl w-full">
                    <img 
                        src={bigLogo} 
                        alt="JNS - Jordyn Niara Smith Logo with rainbow gradient background and shimmering animation" 
                        className="w-full max-h-64 md:max-h-80 lg:max-h-96 object-contain relative z-10"
                    />
                    <div className="font-title text-h2 md:text-h1 lg:text-title text-wetsoil text-center mt-4 md:mt-4 lg:mt-6 relative z-10">
                        Jordyn Niara Smith
                    </div>
                </div>
                {/* Buttons row */}
                <div className="flex gap-4 flex-wrap justify-center">
                    <Button variant="inchworm">About</Button>
                    <Button variant="sky">Projects</Button>
                    <Button variant="strawberry">Resume</Button>
                    <Button variant="inchworm">Contact</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

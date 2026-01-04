import { Card } from "../components/card";
import { Sticker } from "../components/sticker";
import testImg from "../assets/images/excuseMe.png";
import { LinkButton } from "../components/button";
import skyMascot from '../assets/images/mascot_sky.png'
import strawberryMascot from '../assets/images/mascot_strawberry.png'
import inchwormMascot from '../assets/images/mascot_inchworm.png'


export const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 mx-auto max-w-6xl">
        <div className="mb-8">
            <h1 className="text-h1 font-title md:text-title text-wetsoil mb-1 sm:mb-2">Projects</h1>
            <h2 className="text-h2 font-body text-wetsoil mb-4 sm:mb-6">Check out some of the cool work I've done!</h2>
        </div>
        <Card className="flex flex-col hover:scale-100 hover:border-2 hover:inset-shadow-md">
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                <Sticker size="extended" className="z-100 w-full h-full -rotate-15 -translate-x-15">
                    <h3 className="text-white text-h3">Project Title</h3>
                </Sticker>
                <h4 className="text-bodysm font-accent mt-6 md:text-h3 text-wetsoil">Short tagline describing the overall project with catchy buzzwords like "synergy"</h4>
            </div>
            {/* carousel & picture description */}
            <div className="flex flex-col lg:flex-row gap-6 mt-8 sm:mt-12 lg:mt-20 mx-4 sm:mx-6 lg:mx-10">
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="border-4 border-dashed border-wetsoil inset-shadow-md bg-wetsoil/10 p-4 sm:p-6 lg:p-8">
                            <img className="w-full h-auto object-contain" src={testImg} alt="Project Screenshot"/>
                        </div>
                        {/*number of dot's based on number of pictures*/}
                        <div className="flex justify-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                stroke="currentColor" 
                                strokeWidth="0.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="lucide lucide-circle">
                                <circle cx="12" cy="12" r="4"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="0.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="lucide lucide-circle">
                                <circle cx="12" cy="12" r="4"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="0.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="lucide lucide-circle">
                                <circle cx="12" cy="12" r="4"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 gap-4">
                        <div className="flex picture-description font-accent flex-1 items-center text-body sm:text-bodylg">
                            Longer description for each picture.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                            <LinkButton size="sm">
                            {/* This text will change depending on the project */}
                                Read Case Study
                            </LinkButton>
                            <LinkButton size="sm">
                            {/* This button may not exist depending on project */}
                                View Prototype
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </Card>
        <div className="flex my-8 justify-center items-center
            before:content-[''] before:flex-1 before:border-b before:border-solid before:border-wetsoil/80
            after:content-[''] after:flex-1 after:border-b after:border-solid after:border-wetsoil/80">
            <Sticker size="lg" className="mx-4">
                <img 
                    src={inchwormMascot} 
                    alt="Inchworm colored Mascot" 
                    className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                />
            </Sticker>
        </div>
    </div>
  );
};

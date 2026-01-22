import { Card } from "../components/card";
import { Sticker } from "../components/sticker";
import { LinkButton } from "../components/button";
import skyMascot from '../assets/images/mascot_sky.png'
import strawberryMascot from '../assets/images/mascot_strawberry.png'
import inchwormMascot from '../assets/images/mascot_inchworm.png'
import { ProjectCard } from "../components/projectCard";
import projectsObj from "../assets/projects/projects.json";

const stickerSrc= [inchwormMascot, skyMascot, strawberryMascot]
export const Projects = () => {
    const projects = projectsObj.projects;
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="mb-6 sm:mb-20">
                <h1 className="text-h1 font-title md:text-title text-wetsoil mb-1 sm:mb-2">Projects</h1>
                <h2 className="font-body text-body text-wetsoil text-center">
                    Check out some of the cool work I've done!
                </h2>
            </div>
            {projects.map((project, index) => (
                <>
                    <ProjectCard
                        key={index}
                        title={project.title}
                        shortDescription={project.description}
                        images={project.images}
                        buttons={project.buttons}
                        modalContent={project.modalContent}
                    />
                    <div className="flex my-15 justify-center items-center divider">
                        <Sticker size="lg" className="mx-4">
                            <img 
                                src={stickerSrc[index % stickerSrc.length]} 
                                alt={`Mascot ${index + 1}`} 
                                className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                            />
                        </Sticker>
                    </div>
                </>
            ))}
        </div>
    );
};

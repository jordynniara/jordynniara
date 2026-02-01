import { Fragment } from "react";
import { Sticker } from "../components/sticker";
import { LinkButton } from "../components/button";
import skyMascot from '../assets/images/mascot_sky.png'
import strawberryMascot from '../assets/images/mascot_strawberry.png'
import inchwormMascot from '../assets/images/mascot_inchworm.png'
import { ProjectCard } from "../components/projectCard";
import projectsObj from "../assets/projects/projects.json";
import { NavDrawer } from "../components/navDrawer";

export const Projects = () => {
    const projects = projectsObj.projects;
    const projectTypeMap = [
        { type: "prototype", label: "Prototypes & Case Studies", description: "Explore innovative prototypes and in-depth case studies." },
        { type: "research", label: "Research & Design", description: "Delve into research findings and design processes." },
        { type: "analysis", label: "Analyses & Evaluations", description: "Examine analyses and evaluations of various projects." },
        { type: "art", label: "Art", description: "Discover artistic projects and creative expressions." }
    ];
    const mascots=[inchwormMascot, strawberryMascot, skyMascot]
    var navDrawerIndex = [];
    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="mb-6 sm:mb-10">
                <h1 className="text-h1 font-title md:text-title text-wetsoil mb-1 sm:mb-2">Projects</h1>
            </div>
            <div className="flex my-5 justify-center items-center divider"/>
            {projectTypeMap.map((obj, typeIndex) => (
                navDrawerIndex.push({
                    href: `#projects-${obj.type}`,
                    label: obj.label,
                    level: 1,
                }) &&
                <Fragment key={typeIndex}>
                    <div className="flex-col gap-y-1 font-body text-h2 text-wetsoil text-left mt-4 mb-18">
                        <h3 id={`projects-${obj.type}`} >
                            {obj.label}
                        </h3>
                        <p>
                            {obj.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-20">
                        {projects.filter(project => project.type.toLowerCase() === obj.type.toLowerCase()).map((project, projIndex) => (
                            navDrawerIndex.push({
                                href: `#projects-${project.title.toLowerCase().replace(/\s+/g, '-')}`,
                                label: project.title,
                                level: 2,
                            }) &&
                            <ProjectCard
                                key={projIndex}
                                title={project.title}
                                shortDescription={project.description}
                                images={project.images}
                                buttons={project.buttons}
                                modalContent={project.modalContent}
                            />
                        ))}
                    </div>
                    {
                        projectTypeMap.length - 1 !== typeIndex && (
                            <div className="flex my-5 justify-center items-center divider">
                                <Sticker size="lg" className="mx-4">
                                    <img 
                                        src={mascots[typeIndex % mascots.length]}
                                        alt={`${mascots[typeIndex % mascots.length]} mascot`}
                                        loading="lazy"
                                        className="w-full h-auto max-h-48 md:max-h-64 object-contain"
                                    />
                                </Sticker>
                            </div>
                            )
                        }
                </Fragment>
            ))}
            <div className="flex justify-center gap-4" >
                <LinkButton to="#top" size="small" >Back to Top</LinkButton>
            </div>
            {<NavDrawer index={navDrawerIndex} />}
        </div>
    );
};

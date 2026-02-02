import { useState} from "react";
import { Card } from "../components/card";
import { Sticker } from "../components/sticker";
import testImg1 from "../assets/images/excuseMe.png";
import { Button, LinkButton } from "../components/button";
import { Carousel } from "../components/carousel";
import { Download, ExternalLink } from "lucide-react";


export const ProjectCard = (
    {
        title = "Project Title",
        shortDescription = "Short tagline describing the overall project with catchy buzzwords like 'synergy'",
        images = [ { src: testImg1, alt: "Test image 1", caption: "Caption for test image 1" } ],
        buttons = [
            { label: "Button one", href: "#" },
            { label: "Button two", href: "#" }
        ],
        className = ""
    }
) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
            <Card id={`projects-${title.replace(/\s+/g, '-').toLowerCase()}`} className={`project-card ${className}`}>
                <div className="project-card-header">
                    <Sticker size="extended" className="project-card-header-sticker">
                        <h3 className="project-card-header-title text-pretty">{title}</h3>
                    </Sticker>
                    <h4 className="project-card-header-short-desc">{shortDescription}</h4>
                </div>
                {/* carousel & picture description */}
                    <div className="project-card-body">
                        <Carousel images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                        <div className="project-card-body-rightSide">
                            <div key={currentIndex} className={"project-card-body-desc animate-fade-in"}>
                                {images[currentIndex].caption}
                            </div>
                            <div className="project-card-body-actions">
                                {buttons.length > 0 && buttons.map((button, index) => (
                                    <LinkButton 
                                        key={index} 
                                        disabled={button.disabled}
                                        size="sm" 
                                        href={button.href} 
                                        download={button.type.toLowerCase() === "pdf" ? `Parker_${title}-${button.label}.pdf` : undefined} className="w-full h-12">
                                        {button.label} 
                                        {button.type.toLowerCase() == "pdf" ? 
                                            <Download size={16} className="ml-2" /> : 
                                            <ExternalLink size={16} className="ml-2" />
                                        }
                                    </LinkButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
        </>
    );
};



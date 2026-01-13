import { useState} from "react";
import { Card } from "../components/card";
import { Sticker } from "../components/sticker";
import testImg1 from "../assets/images/excuseMe.png";
import { LinkButton } from "../components/button";
import { Carousel } from "../components/carousel";


export const ProjectCard = (
    {
        title = "Project Title",
        shortDescription = "Short tagline describing the overall project with catchy buzzwords like 'synergy'",
        images = [ { src: testImg1, alt: "Test image 1", caption: "Caption for test image 1" } ],
        buttonOne = {label: "Button one", href: "#"},
        buttonTwo = {label: "Button two", href: "#"},
        className = ""
    }
) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Card className={`project-card ${className}`}>
            <div className="project-card-header">
                <Sticker size="extended" className="project-card-header-sticker">
                    <h3 className="project-card-header-title">{title}</h3>
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
                            {buttonOne && <LinkButton size="sm" href={buttonOne.href}>
                                {buttonOne.label}
                            </LinkButton>}
                            {buttonTwo &&<LinkButton size="sm" href={buttonTwo.href}>
                                {buttonTwo.label}
                            </LinkButton>}
                        </div>
                    </div>
                </div>
            </Card>
    );
};

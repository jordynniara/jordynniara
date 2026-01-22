import { useState} from "react";
import { Card } from "../components/card";
import { Sticker } from "../components/sticker";
import testImg1 from "../assets/images/excuseMe.png";
import { Button, LinkButton } from "../components/button";
import { Carousel } from "../components/carousel";


export const ProjectCard = (
    {
        title = "Project Title",
        shortDescription = "Short tagline describing the overall project with catchy buzzwords like 'synergy'",
        images = [ { src: testImg1, alt: "Test image 1", caption: "Caption for test image 1" } ],
        buttons = [
            { label: "Button one", href: "#" },
            { label: "Button two", href: "#" }
        ],
        // modalContent = {
        //     title: "Project Modal Title",
        //     body: "Project Modal Content"
        // },
        className = ""
    }
) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [isModalOpen, setModalOpen] = useState(false);
    // const [modalTitle, setModalTitle] = useState("");
    // const [modalContentBody, setModalContentBody] = useState("");

    // const openModal = (title, body) => {
    //     setModalTitle(title);
    //     setModalContentBody(body);
    //     setModalOpen(true);
    // };

    return (
        <>
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
                                {buttons.length > 0 && buttons.map((button, index) => (
                                    // TO DO: Bring back once we can keep figma from reloading
                                    // button.type == "modal" ?
                                    // <Button key={index} size="sm" onClick={() => openModal(modalContent.title, modalContent.body)}>
                                    //     {button.label}
                                    // </Button> :
                                    <LinkButton key={index} size="sm" href={button.href}>
                                        {button.label}
                                    </LinkButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
                {/* <Modal title={modalTitle} isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <div dangerouslySetInnerHTML={{ __html: modalContentBody }} />
                    <div>
                        Not loading? Try opening on <a href={modalContent.backupLink} target="_blank" className="text-blue-500 underline hover:cursor-pointer">Figma</a> instead.
                    </div>
                </Modal> */}
        </>
    );
};



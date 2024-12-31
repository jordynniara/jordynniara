import * as React from "react";
import "../../css/globals.css"
import "../../css/pages.css"
import "./projects.css"
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "@fluentui/react-components";

const Projects = () => {
    const renderAccordion = () => {
        let projectDict: {[id:number]: IProject} = generateProjectData()

        Object.keys(projectDict).map((value:string , id: number) => {
            console.log("id" + id)
            console.log("value" + value)
    })

        return (
            <Accordion collapsible multiple> 
                { Object.keys(projectDict).map((id: string) => (
                     <AccordionItem value={id} key={id}> 
                        <AccordionHeader size='large'>{projectDict[Number(id)].name}</AccordionHeader>
                        <AccordionPanel className="inset-border"> {projectDict[Number(id)].description} </AccordionPanel>
                    </AccordionItem> ))
                } 
            </Accordion>
        )
    }
    return (
        <div className="projects-container">
            <div className="title"><h1>Projects</h1></div>
            <div className="content">
                <div className="project-list">
                    {renderAccordion()}
                </div>
                <div className="project-preview-container">
                    <div className="project-preview dashed-border rounder-border-std inset-border"></div>
                </div>
            </div>
        </div>
    )
}

export default Projects

interface IProject {
    name: string
    description: string
    github: URL
    preview: URL | null
    iframe: React.ReactElement | null
}

const generateProjectData = () : { [id: number]: IProject} => {
    return ({
        1: {
            name: "A Room",
            description: "ARoom transforms the furniture shopping experience by utilizing augmented reality to allow users to preview items in their space. "+
                "The app includes a style quiz to help users discover their preferred interior decorating style and enables them to add items to a wish list and create virtual rooms. " +
                "Users can purchase items from multiple stores in a single transaction, streamlining the shopping process. " +
                "On the desktop app, users can generate QR codes to view items in AR on their mobile devices. " + 
                "ARoom offers a personalized, interactive, and efficient approach to furniture shopping.",
            github: new URL("https://github.com/jordynniara/jordynniara"),
            preview: new URL("https://www.figma.com/proto/rOjBqh29Ded8iq2WHfwGi3/ARoom-Project?node-id=371-1973&p=f&t=8fje0lhhpQgWTKb9-1&scaling=min-zoom&content-scaling=fixed&page-id=371%3A1742&starting-point-node-id=371%3A1973&show-proto-sidebar=1"),
            iframe: null
        },
        2: {
            name: "Get Up!",
            description: "Get Up! is an innovative application designed to promote workplace wellness by encouraging regular breaks. " +
                "Featuring an interactive GUI, it gamifies break-taking with badges, in-app prizes, and leaderboards. " +
                "Users can customize avatars, earn points, and receive both disruptive and non-disruptive notifications based on their preferences. " +
                "The app also fosters social interaction by notifying users when friends or co-workers are taking breaks, encouraging a collaborative and healthy work environment. "+
                "Tailored for organizations, Get Up! enhances employee engagement and productivity through a fun and interactive approach.",
            github: new URL("https://github.com/jordynniara/jordynniara"),
            preview: null,
            iframe: null
        },
        3: {
            name: "Gilbert",
            description: "Gilbert is an AI chatbot designed to enhance team collaboration and effectiveness within communication apps like Slack and Microsoft Teams. " +
                "By assessing each team member's personality and preferred role, Gilbert provides tailored guidance during meetings and conversations, both individually and as a group. " +
                "The bot offers recaps after meetings, delivering feedback on team collaboration and private messages with individual stats, upcoming tasks, and schedules. " + 
                "During meetings, Gilbert facilitates ice breakers, retrieves recorded information from past interactions, and provides summaries of individual contributions. " + 
                "This innovative tool helps newly formed teams warm up to each other quickly, fostering a productive and cohesive work environment.",
            github: new URL("https://github.com/jordynniara/jordynniara"),
            preview: new URL("https://www.figma.com/proto/EtDBAgfAsyL5beOuSeP0FT/Gilbert-(AI)-Project?node-id=197-1461&p=f&t=aw3TPifU3XOhSUZP-1&scaling=contain&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=197%3A1461&show-proto-sidebar=1"),
            iframe: <iframe title="gilbertPrototype" style={{border: "1px solid rgba(0, 0, 0, 0.1);"}} width="800" height="450" src="https://embed.figma.com/proto/EtDBAgfAsyL5beOuSeP0FT/Gilbert-(AI)-Project?node-id=197-1461&p=f&scaling=contain&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=197%3A1461&show-proto-sidebar=1&embed-host=share" allowFullScreen></iframe>
        },
        4: {
            name: "Mini Design System & Kit",
            description: "This Mini Design System is the backbone of my online portfolio. " +
                "Built using HTML5, Bootstrap, and CSS, it showcases a cohesive and adaptable framework. " +
                "While the portfolio has evolved, this design system remains a cornerstone, influencing its final look and feel. " +
                "Explore the elements that bring consistency and elegance to my digital presence.",
            github: new URL("https://github.com/jordynniara/jordynniara"),
            preview: null, //new URL("/jordynniara/assets/projects/miniDesignSystem/home.html"),
            iframe: null
        },
        5: {
            name: "Neighborhood Woof",
            description: "Neighborhood Woof is a cutting-edge dog walking aid application designed to enhance safety and convenience for dog owners available in website, mobile and smart-watch format. " +
                "Utilizing crowdsourcing, it provides real-time updates on potential hazards and obstacles along walking routes. " +
                "The app features a route creator, navigation system, and detailed dog profiles, including breed, temperament, and more. " +
                "Users receive alerts about nearby dogs and specific dogs with known interactions, ensuring a smooth and enjoyable walking experience. " +
                "This innovative solution demonstrates my ability to blend user-centric design with advanced technology to address real-world challenges.",
            github: new URL("https://github.com/jordynniara/jordynniara"),
            preview: new URL("https://taz9bd.axshare.com/#id=vgjv6f&p=home"),
            iframe: null
        }
    })
}
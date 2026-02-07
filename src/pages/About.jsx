import { useState, useEffect } from "react";
import { Sticker } from "../components/sticker";
import { Card } from "../components/card";
import Working from "../assets/images/working.jpg";
import Drawing from "../assets/images/drawing.jpg";
import Speaking from "../assets/images/bamshirt.jpg";
import { LinkButton } from "../components/button";
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import ExploreContent from "../assets/aboutContent/explore.md?raw";
import BuildContent from "../assets/aboutContent/build.md?raw";
import ImpactContent from "../assets/aboutContent/impact.md?raw";
import { Modal } from "../components/modal";
import skyMascot from '../assets/images/mascot_sky.png'
import strawberryMascot from '../assets/images/mascot_strawberry.png'
import inchwormMascot from '../assets/images/mascot_inchworm.png'
import { ImageCard } from "../components/imageCard";
import { QuickFactsDrawer } from "../components/quickFactsDrawer";

const verbs = [
  "create",
  "hike",
  "design",
  "learn",
  "mentor",
  "develop",
  "bake",
  "research",
  "roller skate",
  "explore",
  "play"
];
const verbColors = [
  "text-inchworm",
  "text-sky",
  "text-strawberry",
];

export const About = () => {
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [currentVerbColor, setCurrentVerbColor] = useState(verbColors[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const currentVerb = verbs[currentVerbIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerbIndex((prevIndex) => {
        // Loop back to 0 when we reach the end
        const index = (prevIndex + 1) % verbs.length;
        setCurrentVerbColor(verbColors[index % verbColors.length]);
        return index;
      });
      
    }, 2000); // Change every 2 seconds

    // Cleanup: stop the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty array = run once on mount

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  return (
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-h1 font-title md:text-title text-wetsoil mb-1 sm:mb-2">About Me</h1>
        <h2 className="font-body text-wetsoil text-center">
          Jordyn Niara Smith
        </h2>
        <p className="flex items-center text-md text-center font-accent text-wetsoil/80 gap-2 sm:gap-4 w-full divider">
          <span>Niara /nee ⋅ air ⋅ uh/ - (<i>noun</i>) In Swahili, woman with purpose</span>
        </p>

        <div className="flex flex-col items-center justify-center w-full">
          <Sticker size="extended" className="w-100 mt-4 sm:mt-6 md:mt-8">
              I &nbsp;
              <span className={`font-accent ${currentVerbColor}`}>
                {currentVerb}
              </span>&nbsp;with purpose
          </Sticker>
          <QuickFactsDrawer />
        </div>

        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center text-wetsoil font-body my-4 w-full">
          <ImageCard
            title="Explore"
            src={Drawing}
            alt="Picture of me drawing on a sunny day"
            className="cursor-pointer"
            onClick={() => openModal("Explore with Purpose", <ExploreCard />)}
          />
          <ImageCard
            title="Build"
            src={Working}
            alt="Picture of me working on a computer"
            className="cursor-pointer"
            onClick={() => openModal("Build with Purpose",
              <BuildCard />)}
          />
          <ImageCard
            title="Impact"
            src={Speaking}
            alt="Picture of me presenting"
            className="cursor-pointer"
            onClick={() => openModal("Impact is the Purpose", <ImpactCard />)}
          />
        </div>
        <Modal title={modalTitle} isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {modalContent}
        </Modal>
      </div>
  );
};

const ExploreCard = () => {
  return (
    <div className="about-modal-content">
      <Sticker size="xl">
        <img 
          src={inchwormMascot} 
          alt="Inchworm colored Mascot"
          loading="lazy"
        />
      </Sticker>
      <Card className="about-card">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]}>
          {ExploreContent}
        </ReactMarkdown>
      </Card>
    </div>
  );
};

const BuildCard = () => {
  return (
    <div className="about-modal-content">
      <Sticker size="xl">
        <img 
          src={skyMascot} 
          alt="Sky colored Mascot"
          loading="lazy"
        />
      </Sticker>
      <Card className="about-card">
        <ReactMarkdown>{BuildContent}</ReactMarkdown>
      </Card>
    </div>
  );
};

const ImpactCard = () => {
  return (
    <div className="about-modal-content">
      <Sticker size="xl">
        <img 
          src={strawberryMascot} 
          alt="Strawberry colored Mascot"
          loading="lazy"
        />
      </Sticker>
      <Card className="about-card flex flex-col gap-2 justify-center">
        <ReactMarkdown>{ImpactContent}</ReactMarkdown>
      </Card>
    </div>
  );
};

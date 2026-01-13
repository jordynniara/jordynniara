import { useState, useEffect } from "react";
import { Sticker } from "../components/sticker";
import { Card } from "../components/card";
import FamilyPhoto from "../assets/images/familyPhoto.jpg";
import Working from "../assets/images/working.jpg";
import Avatar from "../assets/images/avatar.jpg";
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
import { ImgCard } from "../components/img-card";
import { QuickFactsDrawer } from "../components/quickFactsDrawer";
import { StickerPageDecoration } from "../components/stickerPageDeco";

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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl sm:mx-4 md:mx-4 flex flex-col items-center">
        <h1 className="font-title text-h1 md:text-title text-wetsoil mb-4 text-center">
          Jordyn Niara Parker
        </h1>
        <p className="flex items-center text-center font-accent text-wetsoil/80 gap-2 sm:gap-4 w-full divider">
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
          <ImgCard
            title="Explore"
            src={FamilyPhoto}
            alt="Picture of me and my family"
            onClick={() => openModal("Explore with Purpose", <ExploreCard />)}
          />
          <ImgCard
            title="Build"
            src={Working}
            alt="Professional headshot"
            onClick={() => openModal("Build with Purpose", <BuildCard />)}
          />
          <ImgCard
            title="Impact"
            src={Avatar}
            alt="Picture of me working"
            onClick={() => openModal("Impact is the Purpose", <ImpactCard />)}
          />
        </div>
        <Modal title={modalTitle} isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {modalContent}
        </Modal>
      </div>
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
          // className="w-full h-auto max-h-48 md:max-h-64 object-contain"
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
          // className="w-full h-auto max-h-48 md:max-h-64 object-contain"
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
          // className="w-full h-auto max-h-48 md:max-h-64 object-contain"
        />
      </Sticker>
      <Card className="about-card">
        <ReactMarkdown>{ImpactContent}</ReactMarkdown>
        <p> 
          These questions also inspired{' '}
          <span className="bg-wetsoil p-1">
          <span className="text-inchworm">T</span>
          <span className="text-sky">h</span>
          <span className="text-strawberry">e</span>
          <span className="text-inchworm"> </span>
          <span className="text-sky">C</span>
          <span className="text-strawberry">r</span>
          <span className="text-inchworm">e</span>
          <span className="text-sky">a</span>
          <span className="text-strawberry">t</span>
          <span className="text-inchworm">i</span>
          <span className="text-sky">v</span>
          <span className="text-strawberry">i</span>
          <span className="text-inchworm">t</span>
          <span className="text-sky">y</span>
          <span className="text-strawberry"> </span>
          <span className="text-inchworm">P</span>
          <span className="text-sky">r</span>
          <span className="text-strawberry">o</span>
          <span className="text-inchworm">j</span>
          <span className="text-sky">e</span>
          <span className="text-strawberry">c</span>
          <span className="text-inchworm">t</span>
          </span>
          . Click here to learn more about it:
        </p>
        <LinkButton to="/creativity-project" variant="inchworm">The Creativity Project</LinkButton>
      </Card>
    </div>
  );
};

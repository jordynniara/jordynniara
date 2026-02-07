import { useEffect, useState, Fragment } from "react";
import { ChevronRight, ChevronLeft, ZoomIn } from "lucide-react";
import { Modal } from "./modal";

export const Carousel = (
    {
        images = [], 
        currentIndex, 
        setCurrentIndex
    }
) => {
    const numberOfImages = images.length;
    const [isModalOpen, setModalOpen] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + numberOfImages) % numberOfImages);
    };

    useEffect(() => {
        if (isModalOpen) return; // prevent interval changes while modal is open

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
        }, 10000); // Change every 10 seconds

        // Cleanup: stop the interval when component unmounts or currentIndex changes
        return () => clearInterval(interval);
    }, [currentIndex, numberOfImages, setCurrentIndex, isModalOpen]);

    return (
        <Fragment>
        <div className="flex flex-col gap-2 flex-1">
            <div className="relative flex justify-center items-center border-4 border-dashed border-wetsoil inset-shadow-md bg-wetsoil/10 p-4 sm:p-6 lg:p-8 h-64 lg:h-80 overflow-hidden">
                <img src={images[currentIndex].src} 
                    alt={`Carousel Image ${currentIndex + 1}: ${images[currentIndex].alt}`} 
                    loading="lazy"
                    className="w-full h-full object-contain" />
                <ZoomIn className="absolute bottom-2 right-2 color-wetsoil text-wetsoil/50 hover:text-wetsoil/100 cursor-pointer" onClick={() => setModalOpen(true)} />
            </div>
            <div className="flex justify-center gap-1">
                <button className="text-wetsoil/50 hover:text-wetsoil p-2" onClick={handlePrevious}>
                    <ChevronLeft />
                </button>
                <div className="flex justify-center items-center gap-1">
                    {images.map((_, index) => (
                        <svg 
                            key={index}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            className={`cursor-pointer transition-opacity ${
                                currentIndex === index ? 'text-wetsoil opacity-100' : 'text-wetsoil opacity-30'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <circle 
                                cx="12" 
                                cy="12" 
                                r="4" 
                                fill="currentColor"
                            />
                        </svg>
                    ))}
                </div>
                <button className="text-wetsoil/50 hover:text-wetsoil p-2" onClick={handleNext}>
                    <ChevronRight />
                </button>
            </div>
        </div>
        <Modal title="" isOpen={isModalOpen} onClose={() => setModalOpen(false)} imageOnly={true}>
            <img src={images[currentIndex].src} 
                alt={`Carousel Image ${currentIndex + 1}: ${images[currentIndex].alt}`} 
                loading="lazy"
                className="w-full max-h-[80vh] object-contain justify-center border-4 border-white" />
        </Modal>
        </Fragment>
    );
}
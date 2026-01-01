import { useEffect, useState, useMemo } from 'react';
import { Sticker } from './sticker';
import skyMascot from '../assets/images/mascot_sky.png'
import strawberryMascot from '../assets/images/mascot_strawberry.png'
import inchwormMascot from '../assets/images/mascot_inchworm.png'

const mascots = [inchwormMascot, skyMascot, strawberryMascot];

export const StickerPageDecoration = () => {
    const [scrollY, setScrollY] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const updatePageHeight = () => {
            // Get the actual content height (not including stickers)
            const content = document.querySelector('.resume-content');
            const height = content ? content.scrollHeight : document.body.scrollHeight;
            setPageHeight(height);
        };

        updatePageHeight();
        
        // Update on window resize and after initial render
        window.addEventListener('resize', updatePageHeight);
        const timer = setTimeout(updatePageHeight, 100);
        
        return () => {
            window.removeEventListener('resize', updatePageHeight);
            clearTimeout(timer);
        };
    }, []);

    // Generate random positions only once using useMemo
    const stickerPositions = useMemo(() => {
        const positions = [];
        const stickerCount = Math.floor(pageHeight / 200) || 10; // One every ~300px
        const sizes = ['xs', 'sm', 'default', 'lg'];
        
        for (let i = 0; i < stickerCount; i++) {
            const isLeft = Math.random() > 0.5;
            const mascotIndex = Math.floor(Math.random() * mascots.length);
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            
            // Random vertical position within page bounds
            const verticalPosition = (Math.random() * (pageHeight));
            
            // Random horizontal offset for variety (larger number => wider spread)
            const horizontalOffset = Math.random() * 100 - 50; // -50px to +50px
            
            // Random parallax speed for depth variety
            const parallaxSpeed = 0.3 + (Math.random() * 0.4); // 0.3 to 0.7
            
            // Random rotation (larger number => more dramatic)
            const rotation = Math.random() * 30 - 15; // -15deg to +15deg
            
            positions.push({
                id: i,
                isLeft,
                mascotImage: mascots[mascotIndex],
                size,
                basePosition: verticalPosition,
                horizontalOffset,
                parallaxSpeed,
                rotation
            });
        }
        
        return positions;
    }, [pageHeight]); // Only regenerate when page height changes
  
    if (pageHeight === 0) return null; // Don't render until we know page height
    
    return (
        <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: `${pageHeight}px` }}>
            {stickerPositions.map((sticker) => {
                const parallaxOffset = scrollY * (1 - sticker.parallaxSpeed);
                const finalPosition = sticker.basePosition - parallaxOffset;
                
                // Only render if within visible range (performance optimization)
                const isVisible = finalPosition > scrollY - 200 && finalPosition < scrollY + window.innerHeight + 200;
                
                if (!isVisible) return null;
                
                return (
                    <div
                        key={sticker.id}
                        className={`absolute hidden lg:block pointer-events-none transition-opacity duration-300 ${
                            sticker.isLeft ? 'left-8' : 'right-8'
                        }`}
                        style={{ 
                            top: `${finalPosition}px`,
                            transform: `translateX(${sticker.horizontalOffset}px) rotate(${sticker.rotation}deg) translateZ(0)`,
                            willChange: 'transform',
                        }}
                    >
                        <Sticker size={sticker.size}>
                            <img 
                                src={sticker.mascotImage}
                                alt=""
                                className="w-full h-full object-cover rounded-full"
                            />
                        </Sticker>
                    </div>
                );
            })}
        </div>
    );
};
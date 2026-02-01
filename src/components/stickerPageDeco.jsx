// import { useEffect, useState, useMemo } from 'react';
// import { Sticker } from './sticker';
// import skyMascot from '../assets/images/mascot_sky.png'
// import strawberryMascot from '../assets/images/mascot_strawberry.png'
// import inchwormMascot from '../assets/images/mascot_inchworm.png'

// const mascots = [inchwormMascot, skyMascot, strawberryMascot];

// export const StickerPageDecoration = ({ 
//     stickerCount = null,      // null = auto-calculate based on page height
//     startOffset = 200,         // Pixels from top where stickers start
//     density = 'medium',        // 'low', 'medium', 'high'
//     sides = 'both',            // 'left', 'right', 'both'
//     sizeVariety = 'mixed'      // 'small', 'medium', 'large', 'mixed'
// }) => {
//     const [scrollY, setScrollY] = useState(0);
//     const [pageHeight, setPageHeight] = useState(0);
    
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         const updatePageHeight = () => {
//             // Get the actual content height (not including stickers)
//             const content = document.querySelector('.resume-content');
//             const height = content ? content.scrollHeight : document.body.scrollHeight;
//             setPageHeight(height);
//         };

//         updatePageHeight();
        
//         // Update on window resize and after initial render
//         window.addEventListener('resize', updatePageHeight);
//         const timer = setTimeout(updatePageHeight, 100);
        
//         return () => {
//             window.removeEventListener('resize', updatePageHeight);
//             clearTimeout(timer);
//         };
//     }, []);

//     // Generate random positions only once using useMemo
//     const stickerPositions = useMemo(() => {
//         const positions = [];
        
//         // Density multipliers affect spacing
//         const densitySpacing = {
//             low: 400,      // One every ~400px
//             medium: 250,   // One every ~250px
//             high: 150      // One every ~150px
//         };
        
//         const spacing = densitySpacing[density] || 250;
        
//         // Calculate count based on density or use provided count
//         const calculatedCount = stickerCount !== null 
//             ? stickerCount 
//             : Math.floor((pageHeight - startOffset) / spacing) || 10;
        
//         // Size variety configurations
//         const sizeConfigs = {
//             small: ['xs', 'sm'],
//             medium: ['sm', 'default'],
//             large: ['default', 'lg'],
//             mixed: ['xs', 'sm', 'default', 'lg']
//         };
        
//         const sizes = sizeConfigs[sizeVariety] || sizeConfigs.mixed;
        
//         for (let i = 0; i < calculatedCount; i++) {
//             // Determine side based on 'sides' prop
//             let isLeft;
//             if (sides === 'left') {
//                 isLeft = true;
//             } else if (sides === 'right') {
//                 isLeft = false;
//             } else {
//                 isLeft = Math.random() > 0.5;
//             }
            
//             const mascotIndex = Math.floor(Math.random() * mascots.length);
//             const size = sizes[Math.floor(Math.random() * sizes.length)];
            
//             // Random vertical position starting from startOffset
//             const verticalPosition = startOffset + (Math.random() * (pageHeight - startOffset));
            
//             // Random horizontal offset for variety
//             const horizontalOffset = Math.random() * 100 - 50; // -50px to +50px
            
//             // Random parallax speed for depth variety
//             const parallaxSpeed = 0.3 + (Math.random() * 0.4); // 0.3 to 0.7
            
//             // Random rotation
//             const rotation = Math.random() * 30 - 15; // -15deg to +15deg
            
//             positions.push({
//                 id: i,
//                 isLeft,
//                 mascotImage: mascots[mascotIndex],
//                 size,
//                 basePosition: verticalPosition,
//                 horizontalOffset,
//                 parallaxSpeed,
//                 rotation
//             });
//         }
        
//         return positions;
//     }, [pageHeight, stickerCount, startOffset, density, sides, sizeVariety]);
  
//     if (pageHeight === 0) return null;
    
//     return (
//         <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: `${pageHeight}px` }}>
//             {stickerPositions.map((sticker) => {
//                 const parallaxOffset = scrollY * (1 - sticker.parallaxSpeed);
//                 const finalPosition = sticker.basePosition - parallaxOffset;
                
//                 // Only render if within visible range
//                 const isVisible = finalPosition > scrollY - 200 && finalPosition < scrollY + window.innerHeight + 200;
                
//                 if (!isVisible) return null;
                
//                 return (
//                     <div
//                         key={sticker.id}
//                         className={`absolute hidden lg:block pointer-events-none transition-opacity duration-300 ${
//                             sticker.isLeft ? 'left-8' : 'right-8'
//                         }`}
//                         style={{ 
//                             top: `${finalPosition}px`,
//                             transform: `translateX(${sticker.horizontalOffset}px) rotate(${sticker.rotation}deg) translateZ(0)`,
//                             willChange: 'transform',
//                         }}
//                     >
//                         <Sticker size={sticker.size}>
//                             <img 
//                                 src={sticker.mascotImage}
//                                 alt=""
//                                 className="w-full h-full object-cover rounded-full"
//                             />
//                         </Sticker>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
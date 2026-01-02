import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';


export const ResumeNav = ({ headings = {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
    const handleResize = () => {
        setIsOpen(window.innerWidth >= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLinkClick = () => {
    if (window.innerWidth < 768) {
        setIsOpen(false);
    }
    };

    return (
    <>
        {/* Drawer */}
        <nav
        className={`fixed left-0 top-1/2 -translate-y-1/2 bg-wetsoil/80 backdrop-blur-md p-6 shadow-xl z-30 border-4 border-l-0 border-white text-white rounded-r-lg transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        >
        {/* Toggle Button - only visible on mobile */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute -right-12 top-1/2 -translate-y-1/2 bg-wetsoil text-white p-3 rounded-r-lg shadow-xl border-4 border-l-0 border-white hover:bg-wetsoil/90 transition-all"
            aria-label="Toggle navigation"
        >
            <ChevronRight 
            className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
        </button>

        <ul className="flex flex-col gap-4">
            {headings.map(({ href, label }) => (
                <li key={href}>
                    <a
                    href={href}
                    className="hover:underline font-accent block text-sm"
                    onClick={handleLinkClick}
                    >
                    {label}
                    </a>
                </li>
            ))}
        </ul>
        </nav>

        {/* Overlay for mobile */}
        {isOpen && (
        <div
            className="fixed inset-0 bg-black/20 z-10 md:hidden"
            onClick={() => setIsOpen(false)}
        />
        )}
    </>
    );
};
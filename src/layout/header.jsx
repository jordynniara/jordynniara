import { useState } from "react";
import { LinkButton } from "../components/button";
import { SquareMenu, CircleX } from "lucide-react"; 
import HomeLogo from "../assets/images/logo_transparent.png";
import { Sticker } from "../components/sticker";

export const Header = (
    // {
        // pageName = "Title"
    // }
) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-wetsoil p-4 shadow-lg top-0 left-0 w-[100%] relative sticky z-30">
            <div className="flex items-center justify-between max-h-15">
                <LinkButton to="/" className="header-home-btn -translate-x-[10%] translate-y-[30%]">
                    <Sticker fidget={true} className="w-16 h-16 sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-50 lg:h-50">
                        <img 
                            src={HomeLogo} 
                            alt="Home Logo" 
                            className="w-full h-full object-contain" 
                        />
                    </Sticker>
                </LinkButton>
                {/* nav links */}
                <nav className="hidden md:flex gap-2">
                    <LinkButton to="/about" className="link-btn-inchworm" size="sm">About</LinkButton>
                    <LinkButton to="/projects" className="link-btn-sky" size="sm">Projects</LinkButton>
                    <LinkButton to="/resume" className="link-btn-strawberry" size="sm">Resume</LinkButton>
                    <LinkButton to="/contact" className="link-btn-inchworm" size="sm">Contact</LinkButton>
                    {/* <LinkButton to="/creativity-project" className="link-btn-sky" size="sm">The Creativity Project</LinkButton> */}
                </nav>
                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <CircleX className="h-10 w-10 text-white" /> :
                        <SquareMenu className="h-10 w-10 text-white" />
                    }
                </button>
            </div>

            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={toggleMenu}
                    />
                    <div className="absolute right-4 top-full mt-2 bg-wetsoil border-2 border-white rounded-lg shadow-2xl z-50 md:hidden overflow-hidden">
                        <nav className="flex flex-col">
                            <LinkButton 
                                to="/" 
                                className="mobile-menu-nav-link bg-inchworm" 
                                onClick={toggleMenu}
                            >
                                Home
                            </LinkButton>
                            <LinkButton 
                                to="/about" 
                                className="mobile-menu-nav-link bg-sky" 
                                onClick={toggleMenu}
                            >
                                About
                            </LinkButton>
                            <LinkButton 
                                to="/projects" 
                                className="mobile-menu-nav-link bg-strawberry" 
                                onClick={toggleMenu}
                            >
                                Projects
                            </LinkButton>
                            <LinkButton 
                                to="/resume" 
                                className="mobile-menu-nav-link bg-inchworm" 
                                onClick={toggleMenu}
                            >
                                Resume
                            </LinkButton>
                            <LinkButton 
                                to="/contact" 
                                className="mobile-menu-nav-link bg-sky" 
                                onClick={toggleMenu}
                            >
                                Contact
                            </LinkButton>
                            <LinkButton 
                                to="/creativity-project" 
                                className="mobile-menu-nav-link bg-strawberry" 
                                onClick={toggleMenu}
                                disabled
                            >
                                The Creativity Project
                            </LinkButton>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
};

import { useState } from "react";
import { LinkButton } from "../components/button";
import { SquareMenu, CircleX } from "lucide-react"; 

export const Header = (
    {
        pageName = "Title"
    }
) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-wetsoil p-4 shadow-lg top-0 left-0 w-full relative">
            <div className="flex items-center justify-between">
                <h1 className="font-title text-h1 text-white text-left underline">
                    {pageName}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                </h1>
                {/* nav links */}
                <nav className="hidden md:flex gap-2">
                    <LinkButton to="/about" className="link-btn-inchworm" size="sm">About</LinkButton>
                    <LinkButton to="/projects" className="link-btn-sky" size="sm">Projects</LinkButton>
                    <LinkButton to="/resume" className="link-btn-strawberry" size="sm">Resume</LinkButton>
                    <LinkButton to="/contact" className="link-btn-inchworm" size="sm">Contact</LinkButton>
                    <LinkButton to="/creativity-project" className="link-btn-sky" size="sm">The Creativity Project</LinkButton>
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
                    <div className="absolute right-4 top-full mt-2 bg-wetsoil border-4 border-white rounded-lg shadow-2xl z-50 md:hidden min-w-64">
                        <nav className="flex flex-col gap-2 p-4">
                            <LinkButton to="/about" className="link-btn-inchworm" size="sm" onClick={toggleMenu}>About</LinkButton>
                            <LinkButton to="/projects" className="link-btn-sky" size="sm" onClick={toggleMenu}>Projects</LinkButton>
                            <LinkButton to="/resume" className="link-btn-strawberry" size="sm" onClick={toggleMenu}>Resume</LinkButton>
                            <LinkButton to="/contact" className="link-btn-inchworm" size="sm" onClick={toggleMenu}>Contact</LinkButton>
                            <LinkButton to="/creativity-project" className="link-btn-sky" size="sm" onClick={toggleMenu} disabled>The Creativity Project</LinkButton>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
};

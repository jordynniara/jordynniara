import { useState, useMemo} from "react"
import { Switch } from "../components/switch"
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import ReactMarkdown from "react-markdown"
import resumeUX from '../assets/resumes/ux_resume.md?raw'
import resumeSWE from '../assets/resumes/swe_resume.md?raw'
import { NavDrawer } from "../components/navDrawer";
import { LinkButton } from "../components/button";
import { Download } from "lucide-react"

export const Resume = () => {
    const [resumeType, setResumeType] = useState("ux");

    // Get resume section headings for nav menu
    const resumeSectionHeadings = useMemo(() => {
        const currentResume = resumeType.toLowerCase() === "ux" ? resumeUX : resumeSWE;
        const headingRegex = /^##+ (.+)$/gm;
        const matches = [...currentResume.matchAll(headingRegex)];
        
        return matches.map(match => {
            const level = match[0].split(' ')[0].length - 1; // Count '#' characters
            const text = match[1].replace(/\*/g, '').replace(/\|/g, '-');
            // Convert heading text to slug
            const slug = text
                .toLowerCase()
                .replace(/\s+/g, '-')      // Replace spaces with hyphens
                .replace(/\//g, '-')       // Replace forward slashes with hyphens
                .replace(/[^\w-]/g, '-')   // Replace non-word chars with hyphens
                .replace(/---+/g, '--')    // Collapse 3+ dashes to 2 (rehype-slug behavior)
                .replace(/^-+|-+$/g, '');  // Trim leading/trailing dashes
            
            return {
                href: `#resume-${slug}`,
                level: level,
                label: text,
            };
            });
    }, [resumeType]);

  return (
    <div className="relative overflow-x-hidden">
      {/* Main content */}
      <div className="resume-content relative z-10 p-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-h1 font-title md:text-title text-wetsoil">Resume</h1>
          <div className="flex mb-5 justify-center items-center divider"/>
          <h2 className="font-body text-body text-wetsoil text-center">
            Switch between my experiences in UX and Software Engineering and download the pdf.
          </h2>
          <div id="top" className="flex flex-col justify-center items-center my-8"> 
            <Switch
              left={"UXE"}
              right={"SWE"}
              defaultOption={"left"}
              onChange={(option) => {
                setResumeType(option.toLowerCase() === "left" ? "ux" : "swe");
              }}
              className="mb-0"
            />
            <a
              href={resumeType.toLowerCase() === "ux" ? "/resumes/ux_resume.pdf" : "/resumes/swe_resume.pdf"} 
              download="JordynParker_Resume.pdf"
              className="mx-auto w-9 h-7 flex items-center justify-center py-2 bg-white text-wetsoil rounded-sm font-accent hover:cursor-pointer
                  rounded-t-none border-t-0 mt-0"
              aria-label="Download Resume as PDF"
            >
              <Download className="w-9 h-6"/>
            </a>
          </div>
        </div>

        {/* Notebook */}
        <div className="max-w-6xl mx-auto notebook mb-16">
          <div className="prose prose-h1:font-accent prose-h2:font-accent prose-h3:font-accent prose-h4:font-accent font-accent text-body text-left">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, [rehypeSlug, {prefix: 'resume-'}]]}
            >
              {resumeType === "ux" ? resumeUX : resumeSWE}
            </ReactMarkdown>
          </div>
        </div>
        <div className="flex justify-center gap-4" >
          <LinkButton to="#top" size="small" >Back to Top</LinkButton>
          <LinkButton href={resumeType.toLowerCase() === "ux" ? "/resumes/ux_resume.pdf" : "/resumes/swe_resume.pdf"} size="small" download="JordynParker_Resume.pdf">
            Download resume as PDF
          </LinkButton>
        </div>
      </div>
      
      {<NavDrawer index={resumeSectionHeadings} />}
    </div>
  );
}
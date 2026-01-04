import { useState, useMemo} from "react"
import { Switch } from "../components/switch"
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import ReactMarkdown from "react-markdown"
import resumeUX from '../assets/resumes/UX_Resume.md?raw'
import resumeSWE from '../assets/resumes/SWE_Resume.md?raw'
import { StickerPageDecoration } from "../components/stickerPageDeco"
import { ResumeNav } from "../components/ResumeNav";
import { LinkButton } from "../components/button";

export const Resume = () => {
    const [resumeType, setResumeType] = useState("ux");

    // Get resume section headings for nav menu
    const resumeSectionHeadings = useMemo(() => {
        const currentResume = resumeType === "ux" ? resumeUX : resumeSWE;
        const headingRegex = /^## (.+)$/gm;
        const matches = [...currentResume.matchAll(headingRegex)];
        
        return matches.map(match => {
            const text = match[1];
            // Convert heading text to slug (same way rehype-slug does it)
            const slug = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '') // Remove special chars
                .replace(/\s+/g, '-')      // Replace spaces with hyphens
                .replace(/-+/g, '-')       // Replace multiple hyphens with single
                .trim();
            
            return {
                href: `#${slug}`,
                label: text,
            };
            });
    }, [resumeType]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StickerPageDecoration/>
      
      {/* Main content */}
      <div className="resume-content relative z-10 p-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-body text-body text-wetsoil text-center mb-6">
            Switch between my experiences in UX and Software Engineering and download the pdf.
          </h1>
          <div id="top" className="flex justify-center items-center mb-8">
            <LinkButton href="/resumes/ux_resume.pdf" size="small" download="JordynParker_Resume.pdf">
              Download UX Resume PDF
            </LinkButton>
            <Switch
              left={"UXE"}
              right={"SWE"}
              defaultOption={"left"}
              onChange={(option) => {
                setResumeType(option === "left" ? "ux" : "swe");
              }}
            />
            <LinkButton href="/resumes/swe_resume.pdf" size="small" download="JordynParker_Resume.pdf">
              Download SWE Resume PDF
            </LinkButton>
          </div>
        </div>

        {/* Notebook */}
        <div className="max-w-4xl mx-auto notebook mb-16">
          <div className="prose prose-h1:font-accent prose-h2:font-accent prose-h3:font-accent prose-h4:font-accent font-accent text-body text-left">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
            >
              {resumeType === "ux" ? resumeUX : resumeSWE}
            </ReactMarkdown>
          </div>
        </div>
        {/* <a href="#top" className="text-wetsoil underline">Back to Top</a> */}
        <LinkButton to="#top" size="small" >Back to Top</LinkButton>
      </div>
      
      {<ResumeNav headings={resumeSectionHeadings} />}
    </div>
  );
}
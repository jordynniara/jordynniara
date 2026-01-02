import { useState, useMemo} from "react"
import { Switch } from "../components/switch"
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import ReactMarkdown from "react-markdown"
import resumeUX from '../assets/resumes/UX_Resume.md?raw'
import resumeSWE from '../assets/resumes/SWE_Resume.md?raw'
import { StickerPageDecoration } from "../components/stickerPageDeco"
import { ResumeNav } from "../components/ResumeNav";

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
      {/* Stickers - fixed, doesn't affect layout */}
      <StickerPageDecoration />
      
      {/* Main content */}
      <div className="resume-content relative z-10 p-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="font-body text-body text-wetsoil text-center mb-6">
            Switch between my experiences in UX and Software Engineering and download the pdf.
          </h1>
          <div id="top" className="flex justify-start mb-8">
            <Switch 
              left={"UXE"}
              right={"SWE"}
              defaultOption={"left"}
              onChange={(option) => {
                setResumeType(option === "left" ? "ux" : "swe");
              }}
            />
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
        <a href="#top" className="text-wetsoil underline">Back to Top</a>
      </div>
      
      {/* Fixed nav at bottom of viewport */}
      {<ResumeNav headings={resumeSectionHeadings} />}
    </div>
  );
}
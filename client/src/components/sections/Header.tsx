import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";
import TypingEffect from "@/components/TypingEffect";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Header() {
  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/Mohamed_Tayel_CV.pdf'; // This should be the path to your CV file
    link.download = 'Mohamed_Tayel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
            Mohamed Tayel
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-muted-foreground">
            <TypingEffect
              texts={[
                "Penetration Tester",
                "Security Researcher",
                "Web Security Expert"
              ]}
            />
          </div>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Dedicated to finding and fixing web security vulnerabilities, 
            ensuring robust protection for web applications.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <Button variant="default" size="lg" onClick={handleDownloadCV}>
                <Download className="mr-2" /> Download CV
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2" /> Twitter
                </a>
              </Button>
            </div>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('blog')}>
              Blog
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
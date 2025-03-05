import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Twitter } from "lucide-react";
import TypingEffect from "@/components/TypingEffect";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono text-primary">
              <TypingEffect text="Mohamed Tayel" />
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">
              Web Penetration Tester
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Dedicated to finding and fixing web security vulnerabilities, 
              ensuring robust protection for web applications.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <Button variant="default" size="lg">
                  <Download className="mr-2" /> Download CV
                </Button>
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2" /> LinkedIn
                </Button>
                <Button variant="outline" size="lg">
                  <Twitter className="mr-2" /> Twitter
                </Button>
              </div>
              <Button variant="outline" size="lg" asChild>
                <a href="#blog">Blog</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
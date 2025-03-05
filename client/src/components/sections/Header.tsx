import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";
import TypingEffect from "@/components/TypingEffect";

export default function Header() {
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
              <Link href="#blog">Blog</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Lock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 font-mono">About Me</h2>
          <p className="text-lg text-muted-foreground">
            With over 5 years of experience in cybersecurity, I specialize in identifying
            and remediating web application vulnerabilities to help organizations maintain
            their security posture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Security First",
              description: "Expert in vulnerability assessment and penetration testing"
            },
            {
              icon: Code,
              title: "Technical Expertise",
              description: "Proficient in multiple programming languages and security tools"
            },
            {
              icon: Lock,
              title: "Ethical Hacking",
              description: "Certified ethical hacker with a focus on responsible disclosure"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

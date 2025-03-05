import { motion } from "framer-motion";
import SkillBar from "@/components/SkillBar";

export default function Skills() {
  const skills = [
    { name: "Web Application Security", level: 95 },
    { name: "Vulnerability Assessment", level: 90 },
    { name: "SQL Injection", level: 85 },
    { name: "XSS & CSRF", level: 88 },
    { name: "Security Automation", level: 80 },
    { name: "Network Security", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 font-mono">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Specialized expertise in web security testing and vulnerability assessment
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <SkillBar name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
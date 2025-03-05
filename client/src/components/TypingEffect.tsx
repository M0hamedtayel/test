import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
}

export default function TypingEffect({ texts, speed = 100 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentTextIndex];
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Move to next text after a delay
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Wait 2 seconds before switching text

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, texts, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </motion.span>
  );
}
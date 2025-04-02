import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Terminal, Code2, ChevronRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center text-center px-4 bg-background"
    >
      <div className="w-full max-w-4xl">
        {/* Windows Terminal-like container */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg border border-[#333]">
          {/* Windows Terminal header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 text-sm text-[#888]">
              C:\Users\LIGHT\My-Portfolio
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-sm bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-sm bg-[#28c840]" />
            </div>
          </div>

          {/* Terminal content */}
          <div className="font-mono text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#28c840]">C:\{'>'}</span>
              <TypeAnimation
                sequence={[
                  'npm install developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[#d4d4d4]"
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#28c840]">C:\{'>'}</span>
              <TypeAnimation
                sequence={[
                  '',
                  1000,
                  'const developer = new Developer("Ellyssa Cruz");',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[#d4d4d4]"
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#28c840]">C:\{'>'}</span>
              <TypeAnimation
                sequence={[
                  '',
                  2000,
                  'developer.role = "Applications Developer";',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[#d4d4d4]"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#28c840]">C:\{'>'}</span>
              <TypeAnimation
                sequence={[
                  '',
                  3000,
                  'echo who-is-this',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[#d4d4d4]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="ml-4 mt-2 text-[#d4d4d4]"
            >
              Hi. Elle here. I like tech and art;
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

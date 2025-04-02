import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../../lib/constants';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="py-20 px-4 bg-background overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 container mx-auto text-left"
        dangerouslySetInnerHTML={{ __html: t('sections.technologies') }}
      />

      <div className="container mx-auto max-w-4xl">
        {Object.entries(TECHNOLOGIES).map(([category, items]) => (
          <div key={category} className="mb-12 last:mb-0">
            {/* Category Title */}
            <h3 className="text-xl font-bold mb-6 text-center">
              {t(`technologies.categories.${category}`)}
            </h3>

            {/* Grid of Icons with Tooltips */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 max-w-3xl mx-auto">
              {items.map(({ name, icon: Icon }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center justify-center p-1.5 rounded-lg hover:bg-secondary/50 transition-colors">
                          <Icon className="h-7 w-7 text-muted-foreground" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../../lib/constants';

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <section id="technologies" className="py-20 px-4 bg-background">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 container mx-auto text-left"
        dangerouslySetInnerHTML={{ __html: t('sections.technologies') }}
      />

      <div className="container mx-auto max-w-4xl">
        {Object.entries(TECHNOLOGIES).map(([category, items], categoryIndex) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-xl font-bold mb-6 text-center">
              {t(`technologies.categories.${category}`)}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {items.map(({ name, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  className="flex flex-col items-center group"
                >
                  <Icon 
                    className="h-12 w-12 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" 
                  />
                  <span className="mt-2 text-sm transition-colors duration-300 group-hover:text-primary">
                    {name}
                  </span>
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
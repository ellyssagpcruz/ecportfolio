import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    { key: 'current', delay: 0 },
    { key: 'previous', delay: 0.2 }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 container mx-auto text-left"
        dangerouslySetInnerHTML={{ __html: t('sections.experience') }}
      />

      <div className="container mx-auto max-w-2xl space-y-8">
        {experiences.map(({ key, delay }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary"
          >
            <div className="absolute left-0 top-0 h-3 w-3 -translate-x-[5px] rounded-full bg-primary" />
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {t(`experience.${key}.company`)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-lg font-bold">
                    {t(`experience.${key}.role`)}
                  </p>
                  <p className="text-muted-foreground">
                    {t(`experience.${key}.period`)}
                  </p>
                </div>
                <p className="text-muted-foreground">
                  {t(`experience.${key}.description`)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
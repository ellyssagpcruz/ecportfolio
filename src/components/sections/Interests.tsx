import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Brush, Code, Brain, Cloud } from 'lucide-react';

const interests = [
  { key: 'uiux', icon: Brush },
  { key: 'applications', icon: Code },
  { key: 'ai', icon: Brain },
  { key: 'cloud', icon: Cloud }
];

const Interests = () => {
  const { t } = useTranslation();

  return (
    <section id="interests" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 container mx-auto text-left"
        dangerouslySetInnerHTML={{ __html: t('sections.interests') }}
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {interests.map(({ key, icon: Icon }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{t(`interests.${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(`interests.${key}.description`)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
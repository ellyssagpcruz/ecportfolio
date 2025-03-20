import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../lib/constants';
import { FaLinkedin, FaGithub, FaDiscord, FaFileAlt } from 'react-icons/fa';

const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Discord: FaDiscord,
  Resume: FaFileAlt
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        dangerouslySetInnerHTML={{ __html: t('sections.contact') }}
      />

      <div className="container mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          {SOCIAL_LINKS.map(({ name, url }, index) => {
            const Icon = iconMap[name as keyof typeof iconMap];
            return (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Add this new section for the portfolio link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          {t('contact.oldPortfolio')}{' '}
          <a
            href="https://ellyssagpcruz.github.io/webportfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            {t('contact.here')}
          </a>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12"
        >
          {t('contact.copyright')}
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
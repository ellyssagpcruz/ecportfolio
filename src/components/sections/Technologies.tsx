import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../../lib/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../../assets/css/swiper.css';

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

            {/* Smooth Scrolling Carousel */}
            <Swiper
              modules={[Autoplay]}
              slidesPerView={4} // Always show 4 icons
              spaceBetween={20} // Proper spacing
              loop={true} // Enable looping
              autoplay={{
                delay: 0, // No delay
                disableOnInteraction: false, // Keeps running
              }}
              speed={3000} // Continuous speed
              allowTouchMove={false} // Prevent dragging
            >
              {items.map(({ name, icon: Icon }, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-center">
                    <Icon className="h-12 w-12 text-muted-foreground" />
                    <span className="mt-2 text-sm">{name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

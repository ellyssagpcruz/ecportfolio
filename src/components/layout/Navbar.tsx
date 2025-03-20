import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet';
import { Button } from '../../components/ui/button';
import { Globe, Menu } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'jp' : 'en');
  };

  const navItems = [
    { href: '#interests', label: t('nav.interests') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#technologies', label: t('nav.technologies') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center">
        {/* Mobile Layout */}
        <div className="lg:hidden flex w-full items-center justify-between">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 justify-start p-0"
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                >
                  <Globe className="h-4 w-4" />
                  <span>{t('nav.language')}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <a href="#" className="w-8 h-8 mx-auto">
            <svg viewBox="0 0 100 100" className="fill-primary">
              <polygon points="50,0 100,86.6 0,86.6" />
            </svg>
          </a>

          <div className="w-10" /> {/* Spacer for center alignment */}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="w-8 h-8">
            <svg viewBox="0 0 100 100" className="fill-primary">
              <polygon points="50,0 100,86.6 0,86.6" />
            </svg>
          </a>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-bold hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex ml-auto">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={toggleLanguage}
          >
            <Globe className="h-4 w-4" />
            <span>{t('nav.language')}</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
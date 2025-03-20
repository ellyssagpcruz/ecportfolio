import { SiPython, SiJavascript, SiPostgresql, SiReact, SiPostman, SiGit, SiBootstrap, SiTailwindcss, SiFigma, SiAdobexd } from 'react-icons/si';
import { TbBrandCSharp, TbBrandVscode } from 'react-icons/tb';

export const TECHNOLOGIES = {
  languages: [
    { name: 'C#', icon: TbBrandCSharp },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'SQL', icon: SiPostgresql }
  ],
  development: [
    { name: 'React', icon: SiReact },
    { name: 'Postman', icon: SiPostman },
    { name: 'Git', icon: SiGit },
    { name: 'VS Code', icon: TbBrandVscode }
  ],
  design: [
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Figma', icon: SiFigma },
    { name: 'Adobe XD', icon: SiAdobexd }
  ]
};

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
  { name: 'Resume', url: 'https://carrd.co' }
];
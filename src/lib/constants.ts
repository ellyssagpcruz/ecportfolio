import { SiJavascript, SiTypescript, SiPython, SiPhp, SiDotnet, SiHuggingface, SiNodedotjs, SiReact, SiVuedotjs, SiVite, SiExpress, SiSpringboot, SiGit, SiPostman, SiVercel, SiJupyter, SiBootstrap, SiTailwindcss, SiFigma, SiAdobexd, SiAdobephotoshop, SiCanva } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaGitlab, FaWix, FaProjectDiagram } from 'react-icons/fa';
import { FaC, FaGolang  } from 'react-icons/fa6';
import { CgCPlusPlus } from 'react-icons/cg';
import { GiTortoise } from 'react-icons/gi';
import { TbBrandCSharp, TbSql, TbBrandNextjs, TbBrandVscode } from 'react-icons/tb';

export const TECHNOLOGIES = {
  languages: [
    { name: 'C', icon: FaC },
    { name: 'C++', icon: CgCPlusPlus },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'C#', icon: TbBrandCSharp },
    { name: 'Python', icon: SiPython },
    { name: 'Java', icon: FaJava },
    { name: 'PHP', icon: SiPhp },
    { name: 'Go', icon: FaGolang },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'SQL', icon: TbSql }
  ],
  development: [
    { name: '.NET', icon: SiDotnet },
    { name: 'HuggingFace', icon: SiHuggingface },
    { name: 'Nodejs', icon: SiNodedotjs },
    { name: 'React', icon: SiReact },
    { name: 'Vue', icon: SiVuedotjs },
    { name: 'Vite', icon: SiVite },
    { name: 'Expressjs', icon: SiExpress },
    { name: 'Nextjs', icon: TbBrandNextjs },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'Git', icon: SiGit },
    { name: 'GitLab', icon: FaGitlab },
    { name: 'Postman', icon: SiPostman },
    { name: 'Vercel', icon: SiVercel },
    { name: 'SVN', icon: GiTortoise },
    { name: 'VS Code', icon: TbBrandVscode },
    { name: 'Jupyter', icon: SiJupyter }
  ],
  design: [
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Figma', icon: SiFigma },
    { name: 'Adobe XD', icon: SiAdobexd },
    { name: 'Photoshop', icon: SiAdobephotoshop },
    { name: 'Canva', icon: SiCanva },
    { name: 'Wix', icon: FaWix },
    { name: 'Visio', icon: FaProjectDiagram }
  ]
};

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ellyssagpcruz/' },
  { name: 'GitHub', url: 'https://github.com/ellyssagpcruz' },
  { name: 'Discord', url: 'http://discordapp.com/users/758330390766419979' },
  { name: 'Resume', url: 'https://ellyssagpcruz.carrd.co/' }
];
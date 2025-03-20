import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Elle's Portfolio",
      nav: {
        interests: 'Interests',
        experience: 'Experience',
        technologies: 'Technologies',
        contact: 'Contact',
        language: '日本語'
      },
      hero: {
        greeting: 'Hi, I am',
        name: 'Ellyssa Cruz',
        role: 'Applications Developer',
        description: 'Tech enthusiast passionate in creating digital solutions;'
      },
      sections: {
        interests: 'I am <span class="text-primary">interested</span> in',
        experience: 'My career <span class="text-primary">experience</span>',
        technologies: 'Tools and <span class="text-primary">technologies</span> I use',
        contact: 'Get in touch'
      },
      interests: {
        uiux: {
          title: 'UI/UX Design',
          description: 'I\'ve loved art since childhood, and designing digital products combines creativity and functionality—a crucial part of shaping software users will love.'
        },
        applications: {
          title: 'Applications Development',
          description: 'Coding has been my passion since high school, starting with web projects and now expanding into desktop, mobile, and even game development—it\'s my playground for innovation.'
        },
        ai: {
          title: 'ML/AI Development',
          description: 'From skepticism to fascination, my hands-on experience with NLP and RAG opened my eyes to AI’s potential to revolutionize the world.'
        },
        cloud: {
          title: 'Infra/Cloud Management',
          description: 'Though new to this field, diving into Git CI/CD and cloud projects as part of my upskilling journey has sparked my curiosity and drive to master it.'
        }
      },
      experience: {
        current: {
          company: 'Advanced World Solutions, Inc.',
          role: 'Research & Development Engineer',
          period: '2023-Present',
          description: 'Maintain ERP applications, fix bugs, document processes, test, collaborate, adopt technologies, and improve business workflows effectively.'
        },
        previous: {
          company: 'AORTA Australia',
          role: 'Freelance Digital Marketer - Web Specialist',
          period: '2022-2023',
          description: 'Revamp website and migrate to Wix, enhance processes, customize interactions, collaborate, and manage online transactions.'
        }
      },
      technologies: {
        categories: {
          languages: 'Languages',
          development: 'Development',
          design: 'Design'
        }
      },
      contact: {
        oldPortfolio: "Check out my old portfolio:",
        here: "Oh no.",
        copyright: '© 2025 Ellyssa Cruz. All rights reserved.'
      }
    }
  },
  jp: {
    translation: {
      title: "エルのポートフォリオ",
      nav: {
        interests: '興味',
        experience: '経験',
        technologies: '技術',
        contact: '連絡先',
        language: 'English'
      },
      hero: {
        greeting: 'こんにちは、',
        name: 'エルです～',
        role: 'アプリ開発者',
        description: 'デジタルソリューションの作成に情熱を注ぐ技術愛好家；'
      },
      sections: {
        interests: '私は<span class="text-primary">興味</span>があります',
        experience: '私のキャリア<span class="text-primary">経験</span>',
        technologies: '私が使用する<span class="text-primary">テクノロジー</span>とツール',
        contact: 'お問い合わせ'
      },
      interests: {
        uiux: {
          title: 'UI・UXデザイン',
          description: '子供の頃から芸術が好きで、デジタル製品のデザインは創造性と機能性を兼ね備えており、ユーザーが気に入るようなソフトウェアを形作る上で非常に重要な要素です。'
        },
        applications: {
          title: 'アプリ開発',
          description: '高校時代からコーディングは私の情熱であり、Webプロジェクトから始まり、今ではデスクトップ、モバイル、さらにはゲーム開発にまで広がっています。コーディングは私にとってイノベーションの遊び場です。'
        },
        ai: {
          title: 'ML・AI開発',
          description: '懐疑心から魅了へ、NLPとRAGの実践的な経験により、AIが世界に革命を起こす可能性に目が開かれました。'
        },
        cloud: {
          title: 'インフラ・クラウド管理',
          description: 'この分野は初めてですが、スキルアップの一環として Git CI/CD とクラウド プロジェクトに取り組んだことで、この分野を習得したいという好奇心と意欲が湧いてきました。'
        }
      },
      experience: {
        current: {
          company: 'アドバンスドワールドソリューションズ',
          role: '研究開発エンジニア',
          period: '2023年～現在',
          description: 'ERPアプリを保守し、バグを修正し、プロセスを文書化し、テストし、共同作業を行い、テクノロジを採用し、ビジネス ワークフローを効果的に改善します。'
        },
        previous: {
          company: 'AORTA オーストラリア',
          role: 'フリーランスwebマーケター',
          period: '2022年～2023年',
          description: 'Webサイトを刷新して Wixに移行し、プロセスを強化し、インタラクションをカスタマイズし、共同作業を行い、オンライントランザクションを管理します。'
        }
      },
      technologies: {
        categories: {
          languages: 'プログラミング言語',
          development: '開発ツール',
          design: 'デザインツール'
        }
      },
      contact: {
        oldPortfolio: "私の古いポートフォリオをご覧ください：",
        here: "笑笑",
        copyright: '© 2025年 クルーズ エライサ・グレース。 不許複製・禁無断転載。'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
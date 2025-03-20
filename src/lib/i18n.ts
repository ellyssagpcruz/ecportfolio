import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
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
        description: 'Building innovative solutions with modern technologies'
      },
      sections: {
        interests: 'I am <span class="text-primary">interested</span> in',
        experience: 'My career <span class="text-primary">experience</span> so far',
        technologies: 'The tools and <span class="text-primary">technologies</span> I use',
        contact: 'Get in touch'
      },
      interests: {
        uiux: {
          title: 'UI/UX Design',
          description: 'Creating intuitive and beautiful user experiences'
        },
        applications: {
          title: 'Applications Development',
          description: 'Web, Desktop, Mobile, and Game Development'
        },
        ai: {
          title: 'ML/AI Development',
          description: 'Implementing intelligent solutions'
        },
        cloud: {
          title: 'Infrastructure/Cloud',
          description: 'Building scalable cloud architectures'
        }
      },
      experience: {
        current: {
          company: 'Tech Corp',
          role: 'Senior Developer',
          period: '2022-Present',
          description: 'Leading development teams and implementing innovative solutions using modern technologies.'
        },
        previous: {
          company: 'Startup Inc',
          role: 'Full Stack Developer',
          period: '2020-2022',
          description: 'Built and maintained multiple web applications, focusing on scalable architecture and user experience.'
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
        copyright: '© 2025 Ellyssa Cruz. All rights reserved.'
      }
    }
  },
  jp: {
    translation: {
      nav: {
        interests: '興味分野',
        experience: '経歴',
        technologies: '技術',
        contact: '連絡先',
        language: 'English'
      },
      hero: {
        greeting: 'こんにちは、',
        name: 'エリッサ・クルーズ',
        role: 'アプリケーション開発者',
        description: '最新技術を活用した革新的なソリューションの開発'
      },
      sections: {
        interests: '私は<span class="text-primary">興味</span>があります',
        experience: '私の<span class="text-primary">キャリア</span>経験',
        technologies: '私が使用する<span class="text-primary">技術</span>とツール',
        contact: 'お問い合わせ'
      },
      interests: {
        uiux: {
          title: 'UI/UXデザイン',
          description: '直感的で美しいユーザー体験の創造'
        },
        applications: {
          title: 'アプリケーション開発',
          description: 'Web、デスクトップ、モバイル、ゲーム開発'
        },
        ai: {
          title: 'ML/AI開発',
          description: 'インテリジェントなソリューションの実装'
        },
        cloud: {
          title: 'インフラ/クラウド',
          description: 'スケーラブルなクラウドアーキテクチャの構築'
        }
      },
      experience: {
        current: {
          company: 'テックコープ',
          role: 'シニア開発者',
          period: '2022-現在',
          description: '開発チームをリードし、最新技術を活用した革新的なソリューションを実装。'
        },
        previous: {
          company: 'スタートアップ',
          role: 'フルスタック開発者',
          period: '2020-2022',
          description: '複数のWebアプリケーションの開発と保守を担当し、スケーラブルなアーキテクチャとユーザー体験に注力。'
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
        copyright: '© 2025 エリッサ・クルーズ. 不許複製・禁無断転載'
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
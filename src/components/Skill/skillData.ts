import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

export interface SkillData {
  id: number;
  skill: string;
  learningLevel: number;
}

export interface Skills {
  [code: string]: {
    title: string;
    icon: SemanticICONS;
    description?: string;
    skills: SkillData[];
  };
}

export const SkillSet: Skills = {
  frontend: {
    title: 'フロントエンド',
    icon: 'code',
    description: '基本的なことは一通り対応可能です。また、このポートフォリオはReact+Semantic Uiを用いて作成しています。',
    skills: [
      {
        id: 1,
        skill: 'HTML5',
        learningLevel: 70,
      },
      {
        id: 2,
        skill: 'CSS3',
        learningLevel: 50,
      },
      {
        id: 3,
        skill: 'jQuery',
        learningLevel: 70,
      },
      {
        id: 4,
        skill: 'React',
        learningLevel: 50,
      },
      {
        id: 5,
        skill: 'Vue.js',
        learningLevel: 40
      },
    ],
  },
  backend: {
    title: 'バックエンド',
    icon: 'terminal',
    description: 'PHP(Symfony, CakePHP, EC-CUBE)による開発を行ってきました。また、LaravelやNode.jsを利用したアプリ開発も行っており研鑽を重ねています。',
    skills: [
      {
        id: 1,
        skill: 'PHP',
        learningLevel: 90,
      },
      {
        id: 2,
        skill: 'EC-CUBE(2.13, 4.0.0-4.0.3)',
        learningLevel: 100,
      },
      {
        id: 3,
        skill: 'Symfony',
        learningLevel: 70,
      },
      {
        id: 4,
        skill: 'Laravel',
        learningLevel: 60
      },
      {
        id: 5,
        skill: 'Node.js',
        learningLevel: 60
      },
    ],
  },
  infrastructure: {
    title: 'DB・インフラ・サーバ',
    icon: 'server',
    skills: [
      {
        id: 1,
        skill: 'MySQL',
        learningLevel: 70,
      },
      {
        id: 2,
        skill: 'PostgreSQL',
        learningLevel: 60,
      },
      {
        id: 3,
        skill: 'Apache',
        learningLevel: 60,
      },
      {
        id: 4,
        skill: 'Ubuntu(Debian)',
        learningLevel: 70,
      },
      {
        id: 5,
        skill: 'CentOS',
        learningLevel: 60,
      },
    ],
  },
  others: {
    title: 'その他',
    icon: 'code branch',
    skills: [
      {
        id: 1,
        skill: 'Git',
        learningLevel: 70,
      },
      {
        id: 2,
        skill: 'Docker',
        learningLevel: 70,
      },
      {
        id: 3,
        skill: 'VirtualBox+Vagrant',
        learningLevel: 70,
      },
      {
        id: 4,
        skill: 'GitHub',
        learningLevel: 70,
      },
      {
        id: 5,
        skill: 'Backlog',
        learningLevel: 80,
      },
      {
        id: 6,
        skill: 'Redmine',
        learningLevel: 70,
      },
    ],
  },
}

interface Repo {
  name: string,
  url: string,
}

export interface SelfAccessData {
  id: number;
  title: string;
  url: string;
  image_path: string;
  comment: string;
  repo?: Repo[];
}

export const SelfAccessSet: SelfAccessData[] = [
  {
    id: 1,
    title: 'ポートフォリオ',
    url: '',
    image_path: '/images/portfolio.png',
    comment: '自分の紹介用に開発しました。Reactを使用しています。',
    repo : [
      {
        name: 'portfolio',
        url: 'https://github.com/kshiva1126.com/portfolio',
      }
    ]
  },
  {
    id: 2,
    title: 'Chiritsumo',
    url: 'https://chiritsumo.now.sh',
    image_path: '/images/chiritsumo-top.png',
    comment: `SNSのような軽い感覚で技術メモが残せるようなサービスを開発しました。また、バックエンドにLaravel、フロントエンドにReactを使用しています。`,
    repo: [
      {
        name: 'chiritsumo_server',
        url: 'https://github.com/kshiva1126/chiritsumo_server',
      },
      {
        name: 'chiritsumo_client',
        url: 'https://github.com/kshiva1126/chiritsumo_client',
      }
    ]
  },
]

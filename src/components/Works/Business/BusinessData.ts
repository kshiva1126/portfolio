export interface BusinessData {
  id: number;
  title: string;
  charge: string;
  comment: string;
  period: string;
  lang: string;
  db: string;
  server: string;
  tools: string;
}

export const BusinessSet: BusinessData[] = [
  {
    id: 1,
    title: 'EC系CMS(EC-CUBE4)の決済プラグイン開発',
    charge: '開発・単体テスト, シナリオテスト, 保守',
    comment: 'EC-CUBE2でもともと開発されていたプラグインの仕様に基づきEC-CUBE4で再実装を行いました。決済周りは不具合により重大な影響を及ぼす問題があるため、EC-CUBE4およびSymfonyで使用するAPIを吟味しながら開発を進めました。',
    period: '2019.09 ~ 2019.10',
    lang: 'PHP7.1, Symfony3.4, EC-CUBE4, JavaScript',
    db: 'MySQL5.7, PostgreSQL10',
    server: 'Linux(Debian)',
    tools: 'Git, Backlog, Docker',
  },
  {
    id: 2,
    title: '大規模ECサイト 新規サイト構築・運用保守',
    charge: '開発・単体テスト, シナリオテスト, 運用, 保守',
    comment: '社内的にEC系CMS(EC-CUBE4)の開発ノウハウがまだまだ蓄積されていない状況での開発を行いました。手探りながらもSymfony、Doctrineのドキュメントにあたりながら開発を進めることができました。また、サービスが安定稼働するように運用・保守を行っています。',
    period: '2019.07 ~',
    lang: 'PHP7.1, Symfony3.4, EC-CUBE4, JavaScript',
    db: 'MySQL5.7',
    server: 'Amazon Linux 2',
    tools: 'Git, Backlog, Docker, AWS',
  },
  {
    id: 3,
    title: 'EC系CMS(EC-CUBE4)の開発環境構築調査・整備',
    charge: '開発環境構築調査・整備',
    comment: '2019.01当時リリースされたばかりのEC-CUBE4の開発環境を、まだ社内で使用されていなかったDockerを使用して作ることにしたため調査・開発環境構築手順として社内Wikiを作成しました。また、Dockerやdocker-composeに不慣れな開発者に対する相談役を引き受けました。',
    period: '2019.01 ~ 2019.02',
    lang: 'PHP7.1, Symfony3.4, EC-CUBE4, JavaScript',
    db: 'MySQL5.7, PostgreSQL10',
    server: 'Linux(Debian)',
    tools: 'Git, Backlog, Docker',
  },
  {
    id: 4,
    title: '大規模ECサイト サイトリニューアル',
    charge: '開発・単体テスト, シナリオテスト',
    comment: '半年以上に渡るサイトリニューアルで開発を行いました。この案件でGitによる分散型のバージョン管理の概念と手法を学び、定着させることが出来ました。',
    period: '2018.09 ~ 2019.06',
    lang: 'PHP5.4, EC-CUBE2, JavaScript',
    db: 'MySQL5.6',
    server: 'Linux(CentOS7)',
    tools: 'Git, Backlog, VirtualBox+Vagrant',
  },
  {
    id: 5,
    title: '商品連携システム バッチプログラム改修',
    charge: '開発・単体テスト, シナリオテスト',
    comment: 'はじめての実務として商品連携システムバッチプログラムの改修を行いました。研修はEC-CUBEの課題をこなすことであったため未経験のFWでしたがキャッチアップし、業務に当たることができました。',
    period: '2018.06 ~ 2018.09',
    lang: 'PHP7.1 CakePHP3',
    db: 'MySQL5.7',
    server: 'Linux(CentOS7)',
    tools: 'SVN, Backlog, VirtualBox+Vagrant',
  },
];

export default {
  nav: {
    home: 'ホーム',
    download: 'ダウンロード',
  },
  hero: {
    kicker: 'MODERN · OPEN SOURCE · DESKTOP',
    title1: 'モダンでシンプルな',
    title2: 'オープンソースのデスクトップチェス',
    sub: 'すべてのチェスのルールはローカルの C++ エンジンで実装されています。対人戦、対AI戦、AI同士の対戦、リプレイに対応し、7 言語の UI を実行時に切り替えられます。',
    download: '今すぐダウンロード',
    repo: 'リポジトリ ↗',
  },
  modes: {
    label: '4 つの対戦モード',
    items: [
      { glyph: '♞', title: '対人戦', desc: '同じ端末で 2 人対局。ローカルエンジンが毎手をリアルタイムに検証します。' },
      { glyph: '♛', title: '対AI戦', desc: '選択した AI プロバイダーに接続し、任意のモデルと対局できます。' },
      { glyph: '♜', title: 'AI同士の対戦', desc: '2 つの AI が自動対局。開始 / 一時停止 / 再開 / 停止が可能で、戦績にはカウントされません。' },
      { glyph: '♝', title: 'リプレイ', desc: '過去の対局を振り返り、一手一手の指し手と勝敗を再確認できます。' },
    ],
  },
  features: {
    label: '主な機能',
    title: 'チェスだけではない',
    sub: '完全なルールエンジンからプロフィール、戦績、対局履歴まで、Weqi はデスクトップチェスの体験をすっきりと仕上げています。',
    items: [
      { title: '完全なルール', desc: '合法手の検証、チェック、チェックメイト、ステイルメイト、キャスリング、アンパッサン、プロモーション……すべてローカルの C++ エンジンで実装。' },
      { title: 'プレイヤープロフィールとレーティング', desc: 'レーティングと最高レーティングを追跡し、プレイヤー名をいつでも編集できます。' },
      { title: '対局統計', desc: '対局数、勝率、勝ち、引き分け、負け、最高連勝、現在の連勝、最高レーティングを一目で確認。' },
      { title: '対局履歴', desc: '日付、モード、対戦相手、結果、レーティング変動を含む過去の対局を閲覧。' },
      { title: '未完了の対局を再開', desc: '進行中の対局をいつでも再開でき、指し手が途切れることはありません。' },
      { title: 'AI チャット', desc: 'AI が自分の指し手について短いコメントを返します。メッセージは UI の言語に従います。' },
    ],
  },
  stack: {
    label: '技術スタック',
    title: '堅実な基盤',
    items: [
      { name: 'C++17', role: 'コアエンジンとルール' },
      { name: 'Qt 6', role: 'デスクトップ UI（Widgets）' },
      { name: 'CMake', role: 'ビルドシステム' },
      { name: 'Python 3', role: 'AI アダプター' },
    ],
  },
  build: {
    label: 'ビルド',
    title: '3 ステップで実行',
    sub: '依存関係：CMake ≥ 3.16、Qt 6（≥ 6.2、Widgets 含む）、C++17 対応コンパイラ、Python 3。',
    steps: [
      { cmd: 'cmake -S . -B build', note: '設定' },
      { cmd: 'cmake --build build -j', note: 'コンパイル' },
      { cmd: './build/Weqi', note: '実行' },
    ],
  },
  data: {
    label: 'データ保存',
    title: 'プライバシー最優先',
    sub: '設定、プロフィール、対局履歴はシステムのユーザーデータディレクトリに保存されます。AI プロバイダー設定は別に保存され、API キーがプロジェクトに書き込まれることはありません。',
    items: [
      { label: '設定とプロフィール', path: '~/.local/share/Weqi/' },
      { label: 'AI プロバイダー設定', path: 'ユーザーデータディレクトリ（別保存）' },
      { label: '対局履歴とセーブ', path: 'ユーザーデータディレクトリ' },
    ],
  },
  i18n: {
    label: '国際化',
    title: '7 言語、実行時に切り替え',
    languages: ['简体中文', '繁體中文', 'English', '日本語', 'Español', 'Українська', '한국어'],
  },
  download: {
    label: 'ダウンロード',
    title: 'システムを選択',
    sub: 'Weqi v1.0.0 · Linux と Windows に対応。あなたに合ったパッケージを選んでください。',
    button: 'ダウンロード',
    items: [
      { os: 'Linux', format: 'AppImage', note: 'すべての Linux ディストリビューションで動作' },
      { os: 'Debian / Ubuntu / Mint', format: '.deb', note: 'Debian 系ディストリビューション' },
      { os: 'Fedora / RHEL / Rocky', format: '.rpm', note: 'Red Hat 系ディストリビューション' },
      { os: 'Windows', format: 'ポータブル版', note: 'インストール不要、解凍して実行' },
      { os: 'Windows', format: 'インストーラー', note: '標準インストーラー' },
    ],
  },
  footer: {
    note: 'オープンソース · モダン · シンプルなデスクトップチェス',
    license: 'Open Source',
  },
}

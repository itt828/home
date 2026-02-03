---
title: "Linuxデスクトップ2026"
date: "2026-01-14"
description: "現時点でのLinuxデスクトップのウィンドウマネージャー、ウィジェットなど"
---

## はじめに

Manjaro LinuxをノートPCにインストールして普段使いしています。

::link-card{url="https://manjaro.org"}
::

理由は、Linuxに慣れておきたかったのと、
WSL2があるとはいえ、WindowsよりもLinux環境の方が開発を行う際には便利そうだったためです。
2023年から利用しています。

使用感は非常に快適です。
CLIツール類であればLinuxは基本的にサポートされていますし、
デスクトップ(ネイティブ)アプリに関しても、不便に感じる場面は少ないです。\
ただし、Linux版が提供されていないソフトウェアもそれなりにあり、
特に大学関係の手続きに必要なOffice系のソフトウェアが使えないのは少し面倒です。
代替のアプリケーションもありますが、スプレッドシート等のレイアウトが崩れてしまうことも多いです。\
また、Zoomのようなミーティングツールは、画面共有、カメラ、オーディオ関連が期待通りに動くのか不安なので、
重要な会議等の場合には利用を避けています。
これらの状況ではデュアルブートしているWindowsを立ち上げて対処しています。

Linuxデスクトップを利用する大きなメリットとして、デスクトップ環境を高度にカスタマイズできる点があります。
Unixpornなどと呼ばれています。
例えば、私は現在「Niri」というWaylandコンポジターを使用しています。
Niriはスクロール可能なタイル型コンポジターで、新しいウィンドウを開くと、
現在フォーカスしているウィンドウの隣に生成され、
スクロールによってフォーカスするウィンドウを切り替えることができます。
他にも様々なコンポジター、ウィンドウマネージャーがOSSとして開発されており、各自の好みで選択することができます。
また、画面上に表示するバーのようなウィジェットを自作し、時計や電池残量だけでなく、再生中の音楽や天気情報など任意の情報を表示させることもできます。
各々の趣味や利便性に合わせたデスクトップ環境を構築することができる点は、Linuxを使用する大きな強みです。

以下では、現在使用している私のデスクトップ環境について紹介します。

## 外観

![Unixpornのスクリーンショット](/blog/assets/unixporn-screenshot.png)

FirefoxとWeztermのウィンドウが2つ表示されています。上部にはQuickshellを用いて作成したバーがあります。
右のWeztermはHelixでコーディングしている様子です。フローティングウィンドウではfasetfetchを実行しています。

## 使用したツール等

dotfilesを公開しています。
::link-card{url="https://github.com/itt828/dots"}
::

chezmoiなどのdotfiles向けの環境構築ツールは使用しておらず、pythonスクリプトでシンボリックリンクを管理しています。

ここからはdotfilesで主に用いたツール、アプリケーションについて列挙します。

### Niri

::link-card{url="https://github.com/YaLTeR/niri"}
::

先程少し紹介したスクロール可能なタイル型Waylandコンポジターです。\
ウィンドウを横に並べ、スクロールして見るウィンドウを切り替えるという体験が気に入っています。
スクロールはキーコンフィグの設定が可能で、矢印キーやマウスホイールやタッチパッドなどにより行うことができます。\
アニメーションも充実していて、その部分の体験も良好です。

Niriの他にも多数のコンポジター、ウィンドウマネージャーがありますので、
いろいろ試してみて好みに合うものを探してみると良いと思います。
特に、NiriやSwayのようなタイル型だけでなく、windowsやmacOSのようにフローティングウィンドウを主とするものもあります。
ArchWikiのウィンドウマネージャの項目でも紹介されています。

::link-card{url="https://github.com/swaywm/sway"}
::

::link-card{url="https://wiki.archlinux.jp/index.php/%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3"}
::

### Quickshell

::link-card{url="https://quickshell.org"}
::

Qtでウィジェットを作成するツールです。QMLと呼ばれる言語で宣言的にコンポーネントやウィジェットを編集することができます。
現在は時計、音量、ディスプレイの明るさ、CPU、メモリ、Wifiの接続先情報、充電残量、システムトレイを表示しています。

利便性だけでなく、見た目に大きく寄与するので、Linuxデスクトップを構築する上で特にこだわれる部分になります。
私自身のdotfilesはまだ道半ばな感じですが、
壁紙、各アプリケーションのカラープロファイル、ウィジェットのデザインを合わせ、統一感のある
完成度の高いLinuxデスクトップを構築したいですね。

自身で0から構築するほか、完成度の高いQuickshellプロジェクトが公開されているので、インストールして利用するのも手です。

::link-card{url="https://github.com/noctalia-dev/noctalia-shell"}
::
::link-card{url="https://github.com/end-4/dots-hyprland"}
::

### AGS(旧)

::link-card{url="https://github.com/aylur/ags"}
::

先ほどのQuickshellがQtベースであるのに対し、こちらはGtkベースでウィジェットを作成します。\
また、AGSではJSX/TSXでウィジェットを記述することができます。Webフロントエンドに馴染み深い人であれば、かなり書きやすいと思います。

::link-card{url="https://github.com/itt828/unocss-preset-gtk"}
::

拙作ですがunocssのpresetを作成し、公開しています。unocssやtailwindcssのようなユーティリティファーストなCSSを好む場合はおすすめです。 GTK CSSのプロパティを網羅できているわけではないです。

しばらくAGSを用いてウィジェットを作成して利用していましたが、
ウィジェット作成フレームワークのRedditのr/unixpornなどのコミュニティの流行りがAGSやewwからQuickshellに移っているのを感じ、私も現在はQuickshellを使用しています。

### Fuzzel

::link-card{url="https://codeberg.org/dnkl/fuzzel"}
::

アプリランチャーです。ショートカットキーを登録して起動するようにしています。

### Helix

::link-card{url="https://github.com/helix-editor/helix"}
::
テキストエディタです。
vimに似た操作体系ですが、LSPとTree-sitterに標準で対応していて、気に入っています。

### wezterm

::link-card{url="https://github.com/wezterm/wezterm"}
::

ターミナルエミュレータです。
設定でベゼルをかなり小さくできるのが気に入って使用していますが、
stableリリースが全然出ないのでビルドして使っています。

### fish

::link-card{url="https://fishshell.com/"}
::

fish shellです。
最小限の設定で、過去のコマンド履歴に応じた補完を出してくれたりするのが嬉しいです。

## 他作者のunixporn紹介

unixpornはReddit上のコミュニティ r/unixporn で最も盛んに共有されているほか、YouTubeや
Hyprlandコンポジターのdiscordサーバー、日本でも技術ブログやXで共有されているのをみます。
::link-card{url="https://www.reddit.com/r/unixporn/"}
::

個人的に気になったLinuxデスクトップをいくつか列挙して終わります。

### CelestialCrafter/dotfiles

::link-card{url="https://github.com/CelestialCrafter/dotfiles"}
::
![CelestialCrafter/dotfiles](https://github.com/user-attachments/assets/879768e4-5a9f-4207-9e7e-7f6eaa9d0f18)

### elenapan/dotfiles

::link-card{url="https://github.com/elenapan/dotfiles"}
::
![elenapan/dotfiles](https://raw.githubusercontent.com/wiki/elenapan/dotfiles/assets/amarena.png)

### Tail-R/xmonad-eww-dotfiles

::link-card{url="https://github.com/Tail-R/xmonad-eww-dotfiles"}
::

![Tail-R/xmonad-eww-dotfiles](https://github.com/Tail-R/xmonad_eww_dotfiles/assets/132870183/95fea5d7-28c2-442e-af79-25a2f5a93587)

など

## おわりに

これからも定期的に自分のセットアップを報告していけたらと思います。
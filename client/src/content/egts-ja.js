export default {
  name: "Expert Global Taiko Showdown",
  description:
    "Expert Global Taiko Showdownは1対1で行われる上級者向けのosu!taiko大会です。参加者のランクの制限はありません。予選を突破した上位128人がダブルイリミネーション形式のトーナメントの中で白熱した試合を見せてくれることでしょう。",
  discord: "https://discord.gg/3mGC3HB",
  homepage: [
    {
      title: "参加資格",
      body: `この大会にはランクや国籍の制限はありません。ここ12か月以内にRestrictionを受けていない太鼓プレイヤーであれば誰でも参加可能です。osu!公式スタッフはスクリーニング検査後何らかの問題があった場合プレイヤーを大会から排除する権利を留保しています。`,
    },
    {
      title: "日程",
      body: `
### 登録期間
5月3日～5月17日
### スクリーニング検査期間
5月17日～5月24日
### 予選
5月30日～5月31日
### Round of 128 + Loser's Bracket Round 1
6月6日～6月7日
### Round of 64 + Loser's Bracket Round 2
6月13日～6月14日
### Round of 32 + Loser's Bracket Round 3 and 4
6月20日～6月21日
### Round of 16 + Loser's Bracket Round 5 and 6
6月27日～6月28日
### Quarterfinals + Loser's Bracket 7 and 8
7月4日～7月5日
### Semifinals + Loser's Bracket 9 and 10
7月11日～7月12日
### Winner's Bracket Finals + Loser's Bracket Finals and Grand Finals
7月18日～7月19日
### Grand Finals
7月25日～7月26日`,
    },
    { title: "登録方法", body: "osu!のアカウントでログインした後、上にあるRegisterボタンを押してください。その後Discordの大会サーバーに上のボタンを押して参加してください。**大会に出場する場合Discordサーバーへの参加は必須です。もし参加しなかった場合は大会への出場が取り消しとなります。**" }, 
    {
      title: "賞品",
      body: `
- **優勝：**osu! プロフィールバッジ（手続き中）、$26（約2600円相当）もしくは1年分のosu!サポーター、 GTSオリジナルのマウスパッド（提供：[Foxbox](https://foxbox.io)）
- **準優勝：**$16（約1600円相当）もしくは6か月分のosu!サポーター、 GTSオリジナルのマウスパッド（提供：[Foxbox](https://foxbox.io)）
- **3位：**$8（約800円相当）もしくは2か月分のosu!サポーター、 GTSオリジナルのマウスパッド（提供：[Foxbox](https://foxbox.io)）`,
    },
  ],
  rules: `
# 基本ルール
- この大会は **1対1で行われるダブルイリミネーション形式の大会です。** 
- 最初に参加者全員で予選を行い、上位128名が**ダブルイリミネーション形式**のトーナメントへ進出します。
- 今大会では**ScoreV2を使用します。**
- **ホスト**、 **マッププールセレクター**、 **審判**以外のスタッフは大会へ参加出来ます。
- 参加者とスタッフは必ずこのルールすべてに目を通してください。（全員がルールを把握している前提で大会を進行します）
- [このスプレッドシート](https://docs.google.com/spreadsheets/d/e/2PACX-1vR_ZTkA7f3Z_ApxUPtHKkdXncl_RVLA3pwFFsx-Me1RmJ4QpqsoUii-veVw00XJDYtV1XfJEgy7wfw0/pubhtml) の"Kasumii's Blacklist"タブ内に名前が記載されているプレイヤーは、指定されている日にちまでこのトーナメントにエントリーすることができません。
- すべての参加者は、他人に失礼のないように接しなければなりません。もし不適切な言動が確認された場合、大会からのbanやブラックリスト入りなどの対応を取らせていただきます。このルールは当然スタッフにも適用されます。
- ルールの変更やハプニングが起った際には、このthread内とDiscordのサーバー内にて連絡します。

# 各ステージでのルール
- このトーナメントには、予選、RO128、RO64、RO32、RO16、Quarterfinals、Semifinals、Finals、Grand Finalsの9つのステージがあります。
- シードは、予選での各譜面で記録した順位の平均値で決定されます。
- もし128名以上が大会に参加した場合、予選での上位128名だけが予選突破してトーナメントへと進出が出来ます。
- 各ステージの勝利条件は以下の通りです：
    - Round Of 128、Round Of 64、Round Of 32、Round Of 16：Best-Of-9 (5点先取)
    - Quarterfinals：Best-Of-11 (6点先取)
    - Semifinals、Finals、Grand Finals：Best-Of-13 (7点先取)
   
# 予選（Qualifiers）に関して
- 予選は、様々な時間帯に開かれるマルチ部屋内で行われます。
- 当該する時間になったプレイヤーは、予め作成されているマルチの部屋に招待されます。その時にはosu!上でオンラインになっておいてください。
- 予選ではウォームアップは行いません。
- シードは、予選での各譜面で記録したスコアをもとにした順位の平均値で決定されます。
- 予選では、各譜面を2回ずつプレイします。2回のうち高いほうのスコアで順位が算出されます。
- 上位128人のみがトーナメントへ進出できます。
# マッププールに関して
- 1つのステージにつき1つのマッププールが用意されます。
- Winner's bracketとLoser's Bracketで違うマッププールが用意されることはありません。
- 予選でのマッププールはそれ以降のマッププールとは異なり、2つのNoMod譜面、1つのHidden譜面、1つのHardRock譜面、1つのDoubleTime譜面で構成されます。
- Round of 128以降でのそれぞれのマッププールは、**NoMod、Hidden、HardRock、DoubleTime、FreeMod、Tiebreaker**の6つのブラケットで構成されます。
- Round of 128からRound of 16のマッププールには、14個の譜面が存在します。Quarterfinalsでは15譜面、SemifinalsからGrand Finalsでは19譜面です。
- Round Of 128からRound Of 16まででのNoModの譜面数は4つです。これがQuarterfinalsでは5つ、SemifinalsからGrand Finalsまででは6つに増えます。
- Round Of 128からQuarterfinalsまででのHidden、HardRock、DoubleTimeの譜面数は2つです。これがSemifinalsからGrand Finalsまででは3つに増えます。
- FreeModの譜面数は大会を通して3つです。
- FreeModをプレイする際にはマルチ部屋の個別Modが有効にされます。プレイヤーはHidden、HardRock、もしくはその両方を使用することができます。**FreeModの際は必ず何かModをつけなければなりません。**
- TiebreakerではFreeModと同じようにModをつけることができますが、必須ではありません。
- それぞれのマッププールは試合の1週間前に公開されます。

# スケジュールに関して
- 各ステージは**毎週末**に行われます。（週末にプレイすることができない場合、審判の都合が合うならば平日にリスケジュールすることも可能です）
- 各プレイヤーのタイムゾーンに合わせ、できるだけ試合が深夜や早朝にならないように心がけます。スケジュールは試合の約1週間前に公開されます。
- リスケジュールは、該当する試合に出場するプレイヤー双方の合意がある場合に限り可能です。リスケジュールする場合は、プレイヤー間で合意を取った上で、試合日の直前の**金曜日 8:59 UTC+9**までにスタッフに連絡してください。

# 試合進行に関して（RO128以降）
- 試合時間の10分前に、審判がマルチ部屋を作成します。プレイヤーは、試合時間になったらそのマルチ部屋に招待されます。
- もし試合時間になってもスタッフや審判が誰もいない場合、その試合は延期されます。
- 片方のプレイヤーが試合時間に遅れて部屋へ入ってくる場合、遅刻は10分までは許容されます。
- 10分以内ならば、試合時間後マルチ部屋に即入室しなくてもペナルティが課されることはありません。
- 試合時間後10分経ってプレイヤーが2人ともマルチ部屋にいない場合、その試合は予選でのシードが高かったプレイヤーの勝利となります。
- 試合を行う際のマルチ部屋のチームモードはHead to Head、スコア方式はScoreV2に設定され、部屋の名前は"EGTS 2020: (Player Red) vs (Player Blue)"になっています。
- 各プレイヤーは4分以内の譜面であれば1回ずつウォームアップを行うことができます。
- プレイヤーがウォームアップの譜面を2分以内で選ばない場合、審判が強制的にそのプレイヤーのウォームアップをスキップします。
- 各プレイヤーはマッププールから**1つの譜面**をbanしなければなりません（Tiebreakerを除く）。banされた譜面はその試合終了までpickすることはできません。
- 各プレイヤーはチャットで"!roll"コマンドを打ちます。
- **!rollの結果が高かった方のプレイヤーは、banを後に行い、pickを先に行います。!rollの結果が低かった方のプレイヤーは、banを先に行いpickを後に行います。**（!roll低い方ban → !roll高い方ban → !roll高い方pick → !roll低い方pick → !roll高い方pick → ……）
- 各プレイヤーは2分以内にどの譜面をbanするか発言してください。2分以内に発言しない場合、審判が!rollを用いてランダムにbanする譜面を決定します。
- ban終了後は、各プレイヤーが交互に譜面をpickしていきます。
- 譜面をpickする際は、Tiebreaker以外ならどのブラケットからpickしても構いません。
- プレイヤーは2分以内にpickする譜面を発言し、pick後両プレイヤーは2分以内に準備を完了させてください。2分以内にpickを完了させない場合、審判が!rollを用いてランダムにpickする譜面を決定します。pick後2分経ってもプレイヤーの準備が完了していない場合、審判は強制的に試合をスタートさせます。
- もしプレイヤーが譜面のプレイ中以外に回線落ち等のハプニングによってオフラインになってしまった場合は、復帰するまで最大10分間待つことができます。この延長は一度しか適用できません。
- もしプレイヤーが譜面のプレイ開始から30秒以上経った後にオフラインとなってしまった場合、そのプレイヤーはその譜面では負けてしまったとして扱い、相手に1点が入ります。
- もしプレイヤーが譜面のプレイ開始から30秒以内にオフラインとなってしまった場合、その譜面のプレイをもう一度やり直すことができます。これは1人のプレイヤーにつき一度しか適用されません。
- ノルマ落ちしたプレイヤーのスコアは0点にせず、そのまま扱います。
- もし、ある譜面で両者のスコアが同点になった場合、いったんその譜面での記録は無効になりもう一度同じ譜面をプレイします。両者のスコアが再度同点になった場合、そのプレイも無効になり、この際プレイされた譜面をpickしたプレイヤーは別の譜面をpickしなければなりません。
- 両者がマッチポイントに達した場合（例：BO9で4-4になる）、強制的にTiebreakerがpickされます。
  `,
};
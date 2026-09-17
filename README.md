# Private salon cherish LP

「chie｜【横浜】肩甲骨はがし・背中美容専門家 / Private salon cherish」へ提案する、営業提案用サンプルLPの制作リポジトリです。

要件定義・デザイン定義・LPコピー・画像素材をもとに、Next.jsでレスポンシブLPを実装しています。
営業提案用サンプルのため、検索エンジンへの登録を防いだテスト公開を前提としています。

## ディレクトリ

```text
docs/                         要件定義・デザイン定義・LPコピー・素材台帳
references/section-designs/  セクション別リファレンス画像
public/images/cherish/        掲載可能な加工済み・生成済み画像
source-images/private/        未加工素材のローカル保管場所（Git管理外）
src/app/                      LP本体・レイアウト・スタイル
src/data/                     メニュー・店舗情報・リンク差し替え項目
```

## 画像の取り扱い

- お客様が写る未加工素材、個人情報を含む素材は `source-images/private/` に置き、GitHubへ送信しません。
- 掲載許可、匿名化、Before/Afterの公平性を確認した加工済み画像だけを `public/images/cherish/` に配置します。
- `01_hero_therapist_master.png` の人物は千恵さん本人ではなく、営業提案用の生成モデルです。本番公開時は本人写真への差し替えを推奨します。
- Before/Afterは体型や結果を誇張する加工を行いません。
- LP表示は軽量化したJPEGを使用し、元のPNGも管理用に保持します。

## 現在の状態

- 要件定義書：格納済み
- デザイン定義書 v1.1：格納済み
- 実装前チェック資料：格納済み
- LP掲載コピー・メニュー情報：格納済み
- セクションリファレンス7点：格納済み
- 不足分の生成画像3点：格納済み
- Instagram素材の加工画像4点：格納済み
- LP実装：初版完成
- PC / Mobileレスポンシブ対応：確認済み
- 本番ビルド・Lint：確認済み
- Hot Pepper・Instagram・Google Maps導線：確認・反映済み（2026-09-17）
- 店舗基本情報：Hot Pepper等の公開情報と照合済み（2026-09-17）

## ローカル確認

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 公開前の最終確認項目

- 公式LINEの直接URL（Instagramの公式LINE導線は確認済み、URL自体は確認待ち）
- 料金とメニューの最新の提供状況
- Heroほか「提案用イメージ」と表示している生成画像
- Before/After・お客様の声の最終掲載許可

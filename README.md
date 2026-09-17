# Private salon cherish LP

「chie｜【横浜】肩甲骨はがし・背中美容専門家 / Private salon cherish」へ提案する、営業提案用サンプルLPの制作リポジトリです。

現在は要件定義・デザイン定義・リファレンス・生成素材の整理段階です。Next.jsによるLP実装はまだ開始していません。

## ディレクトリ

```text
docs/                         要件定義・デザイン定義・素材台帳
references/section-designs/  セクション別リファレンス画像
public/images/cherish/        掲載可能な加工済み・生成済み画像
source-images/private/        未加工素材のローカル保管場所（Git管理外）
```

## 画像の取り扱い

- お客様が写る未加工素材、個人情報を含む素材は `source-images/private/` に置き、GitHubへ送信しません。
- 掲載許可、匿名化、Before/Afterの公平性を確認した加工済み画像だけを `public/images/cherish/` に配置します。
- `01_hero_therapist_master.png` の人物は千恵さん本人ではなく、営業提案用の生成モデルです。本番公開時は本人写真への差し替えを推奨します。
- Before/Afterは体型や結果を誇張する加工を行いません。

## 現在の状態

- 要件定義書：格納済み
- デザイン定義書 v1.1：格納済み
- セクションリファレンス7点：格納済み
- 不足分の生成画像3点：格納済み
- 実在素材の加工：元画像受領後に実施
- LP実装：未着手

# QARAT - 社会人コミュニティ

QARATは社会人のための上質なコミュニティのWebサイトです。

## 概要

シークレットカフェ、合同筋トレ、合同ラン、ネイルサロン、エステなど多彩なイベントを紹介し、申し込みフォームへの導線を提供します。

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui (Radix UI)
- **ルーティング**: Wouter
- **フォント**: Noto Serif JP / Noto Sans JP / Playfair Display

## デザインコンセプト

**「Refined Warmth（洗練された温かみ）」** - Japanese Minimalism × Warm Scandinavian

- カラー: 白ベース + テラコッタオレンジ + ディープブラウン
- 余白を贅沢に使ったミニマルなレイアウト
- Noto Serif JPによる和の信頼感

## ページ構成

| ページ | パス |
|--------|------|
| トップページ | `/` |
| シークレットカフェ | `/events/secret-cafe` |
| 合同筋トレ | `/events/gym` |
| 合同ラン | `/events/run` |
| ネイルサロン | `/events/nail` |
| エステ | `/events/esthe` |

## ローカル開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev
```

## GitHub Pages へのデプロイ

### 自動デプロイ（推奨）

1. このリポジトリをGitHubにプッシュ
2. GitHubリポジトリの **Settings > Pages** を開く
3. **Source** を `GitHub Actions` に設定
4. `main` ブランチにプッシュすると自動でデプロイされます

### BASE_URLの設定

リポジトリ名がサブパスになる場合（例: `https://username.github.io/qarat-community/`）は、`.github/workflows/deploy.yml` の `BASE_URL` を変更してください：

```yaml
BASE_URL: /qarat-community/
```

ユーザー/組織ページ（`https://username.github.io/`）の場合はそのまま `/` でOKです。

### 手動ビルド

```bash
# GitHub Pages用ビルド（BASE_URLを適宜変更）
BASE_URL=/ pnpm vite build --config vite.config.github.ts
```

## イベント申し込みフォームの設定

`client/src/lib/data.ts` の各イベントの `formUrl` をGoogleフォームのURLに変更してください：

```typescript
{
  id: "secret-cafe",
  formUrl: "https://forms.google.com/your-form-url",
  // ...
}
```

## ライセンス

MIT

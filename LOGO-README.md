# TEMPOLIVE Logo Kit

**沿用現有標誌，不是重新設計。**

來源為 `TEMPOLIVE-v2.1.12.html` 的 `#i-logo` 節拍器圖形。圖形路徑、線條比例與圓角保持一致；橫式、直式與封面是同一圖形加上品牌名稱的應用排版。

本包不含 `index.html`，不覆寫主網頁或原本的 `README.md`，也不更動任何節拍器功能。

## 先看成品

解壓縮後，在瀏覽器開啟 **[brand-preview.html](./brand-preview.html)**，即可看到各種版本與檔案連結。請保留同一包的資料夾結構，不要只移動預覽頁。

## 依用途選檔案

| 用途 | 推薦檔案 | 說明 |
|---|---|---|
| 透明底單獨圖形 | `assets/brand/svg/tempolive-mark-dark.svg` / `tempolive-mark-white.svg` | 深色與白色版；可放大的向量檔。 |
| 簡報、影片、文件 | `assets/brand/png/` | 透明底 PNG；圖形 512 / 1024 / 2048px，橫式 2400px 寬。 |
| 橫式品牌標誌 | `tempolive-logo-horizontal-*` | 圖形 + TEMPOLIVE。 |
| 中英文組合 | `tempolive-logo-bilingual-*` | 圖形 + TEMPOLIVE + 連線節拍器。 |
| 直式排版 / 純文字標誌 | `tempolive-logo-stacked-*` / `tempolive-logo-wordmark-*` | 透明底，深色與白色各一份。 |
| 大頭貼、正方形圖示 | `assets/brand/png/tempolive-icon-dark-1024.png` | 黑底白標；另有白底深色版。 |
| 瀏覽器分頁圖示 | `favicon.svg` + `favicon.ico` | ICO 內含 16 / 24 / 32 / 48 / 64 / 128 / 256px。 |
| iPhone 加入主畫面 | `apple-touch-icon.png` | 180×180，沿用原本檔案。 |
| 網頁應用圖示 | `assets/brand/icons/icon-192.png` / `icon-512.png` | 附有另一組 maskable 安全留白版。 |
| 鎖定畫面媒體封面 | `tempolive-cover.png` | 512×512，沿用原本檔案。 |
| GitHub Social preview | `assets/brand/social/github-social-preview.png` | 1280×640，不透明黑底。 |
| 網站分享封面 | `assets/brand/social/og-image.png` | 1200×630，另附 SVG 母檔。 |
| README Banner | `assets/brand/social/readme-banner-light.png` / `readme-banner-dark.png` | 1600×480，明暗底各一份。 |

`logo-*-dark` / `mark-dark` 表示 **深色圖形或文字**，用於淺底。`*-white` 是白色圖形，用於深底。`icon-dark` 和 `banner-dark` 則表示黑色背景。白色透明 PNG 在白底看起來像空白，不是檔案損壞。

## 上傳 GitHub

1. 解壓縮 ZIP，將內容放在目前 `index.html` 所在的發布資料夾。請上傳解壓後的檔案，不是只上傳 ZIP。
2. 保留 `assets/brand/` 的資料夾結構。原網站的 `index.html` 與專案 README 不用替換。
3. 根目錄的 `tempolive-cover.png` 與 `apple-touch-icon.png` 與 v2.1.12 GitHub 包中的兩個圖檔 **位元組完全相同**，可沿用舊引用路徑。

```text
index.html                     # 你現有的網頁；本包不替換
assets/brand/                  # 標誌、圖示與封面
favicon.svg
favicon.ico
apple-touch-icon.png
tempolive-cover.png
site.webmanifest               # 選用，不會自動套用
brand-preview.html             # 素材預覽，不是節拍器入口
LOGO-README.md                  # 本說明
snippets/                      # 選用引用範例
```

### 分頁與手機圖示

上傳素材不代表網頁已自動使用新圖示。要設定 favicon，請依 `snippets/head.html.txt` 更新網頁 `<head>` 內對應的圖示標籤；已有相同 `rel` 的標籤時請更新原項，不要重複加入。

`site.webmanifest` 提供名稱與圖示宣告，此包沒有新增 Service Worker，不代表已完成可安裝 App 或離線快取。其 `start_url` / `scope` 使用 `./`，避免寫死未知的 GitHub 倉庫路徑。

### GitHub 分享預覽

在倉庫 **Settings → Social preview → Edit → Upload an image** 選取 `github-social-preview.png`。這是分享 GitHub 倉庫連結的封面，不是網站 favicon。GitHub 建議 1280×640，圖檔需小於 1 MB；本包已檢查這兩項。

網站連結的分享圖可用 `og-image.png`，但仍需在 `og:image` 設定圖片上線後的完整網址；本包沒有假定或虛構網址。

### README 顯示 Logo

把 `snippets/readme.md.txt` 內容放到你原本 README 上方即可。內容使用相對路徑，並提供深淺色對應的透明版本；不需整份取代專案 README。

## 使用原則

- 保持原比例，不要拉長、壓扁或裁掉圖形邊緣。標誌附近請預留空間。
- 深底使用白標，淺底使用深色標。圖示很小時選單獨圖形，不要塞入整個品牌名稱。
- SVG 中的文字已轉成向量路徑，不需安裝字型，但不能直接當文字重新打字。本包不包含字型檔。
- 圖形主色為 `#202020` / `#FFFFFF`。文字標沿用現有 Arial 無襯線風格，以 Arial-compatible 字形轉外框；中文以 Noto Sans CJK TC 轉外框。不宣稱與每台裝置的網頁字型逐像素相同。
- Maskable 圖示的主體位於中心半徑 40% 的圓形安全區，讓系統可依需要裁成不同形狀。

檔案尺寸、來源與字形說明見 `assets/brand/asset-catalog.json`，檔案雜湊見 `SHA256SUMS.txt`。圖示在實體手機與鎖定畫面的最終顯示仍由系統決定；本包不保證每個裝置會使用相同裁切方式。

## 授權與來源

本包不自動替品牌或專案指定 MIT 等開源授權。對外使用規則請由專案擁有者確認。

技術參考：[GitHub Social preview](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview)、[GitHub 深淺色圖片](https://github.blog/developer-skills/github/how-to-make-your-images-in-markdown-on-github-adjust-for-dark-mode-and-light-mode/)、[W3C Web App Manifest](https://www.w3.org/TR/appmanifest/)、[Apple Web Clip 圖示](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)。

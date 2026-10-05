# TEMPOLIVE 連線節拍器

節拍、歌單、團隊同步與 live傳話，放在同一個網頁中。

**完整上架版：2.1.13-full**。以最新 v2.1.12 功能、主畫面 App 與圖示設定整合，不需要搭配舊補丁。

[開啟節拍器](./index.html)｜[另一個完整入口](./tempolive.html)

## 功能

- 40–300 BPM、點按測速、拍號、四分／八分／十六分音符與輕重音。
- 歌單編輯、前後首切換、JSON 匯入／匯出，切歌延續目前拍點偏好。
- 四位數字房間、主持人控制同步節拍、依樂器傳送 live 文字／語音提醒。
- 放大模式、目前歌名與拍號、大字 BPM、大按鈕及房間 LIVE 傳話。
- 繁體中文預設、English、Deutsch、深淺色、分步教學與節奏小遊戲。
- 玩遊戲時暫停本機節拍聲，結束或返回後依原本播放狀態恢復。
- 主畫面 App 獨立啟動、TEMPOLIVE 圖示與媒體播放資訊。

## 上傳 GitHub Pages

1. 先在舊網站匯出歌單。備份留在自己裝置，不要上傳公開儲存庫。
2. 解壓縮後，把這一層的所有檔案上傳到發布目錄。不要上傳 ZIP，不要再套一層資料夾。
3. 簡單的靜態上架可在 Settings > Pages 選 Deploy from a branch，選實際上傳的分支與 /(root)。本包不需 npm、建置指令或自訂 Actions。
4. 等待 Pages 部署成功，再開啟網站。保留目前的儲存庫名稱 TEMPOLIVE 與原網址。

可清理舊網站檔案，但不要刪除整個儲存庫、Pages 設定或其他專案。若已有 .github、CNAME、LICENSE 或自訂文件，請先備份；不要為了圖示直接刪除其他部署設定。

若原本使用 /docs 發布，檔案就必須放在 /docs；若改放到根目錄，Pages 也要同步選 /(root)。

## 檔案用途

| 檔案 | 用途 |
| --- | --- |
| index.html | 正式首頁，包含完整節拍器、房間、遊戲與傳話程式。 |
| tempolive.html | 與首頁完全相同的完整入口，可用新文件網址檢查分頁圖示；不是診斷空頁或自動跳轉。 |
| tempolive-styles.css | 原本 17 層樣式依原順序整合，保留版面。 |
| tempolive-languages.js | 原本的三語字典與切換程式。 |
| tempolive-favicon-v213.ico | 明確引用的多尺寸 ICO。 |
| favicon.ico | 同檔內容的傳統備用檔名；位於專案目錄，不是帳號網域根目錄。 |
| tempolive-icon-32-v213.png / tempolive-icon-96-v213.png | 獨立 PNG 分頁圖示。 |
| safari-pinned-tab.svg | Safari 釘選分頁適用的黑色向量遮罩；不代替一般分頁的 PNG / ICO。 |
| apple-touch-icon.png | 保留已成功的 180px 主畫面圖示。 |
| app-icon-192.png / app-icon-512.png | 主畫面應用圖示。 |
| site.webmanifest | 獨立 App 啟動；識別仍為 /TEMPOLIVE/。 |
| tempolive-cover.png | 保留鎖定畫面的播放封面。 |
| .nojekyll | 靜態發布標記。 |

請整包上傳，不要只上傳 index.html。不需要先前的 assets、圖示檢查頁、r2、r3 或 r4 圖檔。

## 圖示與 App

分頁圖示在 HTML 最前面靜態宣告，不依賴 SVG favicon、data URL、JavaScript 延後插入或舊補丁路徑。主畫面 App 識別、啟動範圍與 standalone 模式保留，不必刪除已可使用的 App。

可以從新分頁開啟 `tempolive.html` 比較，不只重整舊分頁。這會使用新的文件網址，但不保證繞過 Safari 所有圖示快取。網頁不能強制清除 Safari 的圖示資料庫，本包也不會清除瀏覽器資料。實體 iPadOS 18.7.8 分頁圖示尚未在本次製作環境驗證。

## 資料與限制

沿用原本 localStorage 儲存鍵，不會在升級時清空歌單。同網站來源與同瀏覽器可讀取原有資料，但主畫面 App 與 Safari 的儲存環境不保證共用。歌單 JSON 匯入會取代原歌單。

單人功能在頁面與必要資源載入後可執行，本包不新增離線快取。首次開啟、重新載入及團隊房間請保持網路。房間仍使用原本公開 MQTT / WSS 測試中繼，不保證服務可用率、零延遲、鎖屏背景播放或藍牙同步精度。請先用實際設備與現場網路測試。

## 授權

本包不新增或變更程式與素材的授權。正式授權由專案維護者確認。

## 技術參考

- [HTML icon 規範](https://html.spec.whatwg.org/multipage/links.html#rel-icon)
- [GitHub Pages 發布設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Apple 主畫面網頁應用設定](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

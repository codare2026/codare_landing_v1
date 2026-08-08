/* =======================================================
   口袋營養獅 — EmailJS 設定檔
   聯絡表單要能真正把訊息寄到 codaredietitian@gmail.com，
   需要先申請 EmailJS 帳號，取得三組代碼後填在下面即可。

   設定步驟（約 5 分鐘）：
   1. 到 https://www.emailjs.com/ 註冊帳號（可直接用 Gmail 登入）
   2. 左側選單「Email Services」→「Add New Service」
      → 選 Gmail → 連接 codaredietitian@gmail.com 這個帳號
      → 建立完成後會得到一組 Service ID（例如 service_xxxxxxx）
   3. 左側選單「Email Templates」→「Create New Template」
      → 內容可用預設範本，收件變數對應表單欄位：
         {{name}}　{{phone}}　{{email}}　{{message}}
      → 建立完成後會得到一組 Template ID（例如 template_xxxxxxx）
   4. 右上角帳號圖示 →「Account」→「General」
      → 找到 Public Key（例如 AbCdEfGhIjKlMnOp）
   5. 把上面三組代碼分別貼到下面三個空字串中，存檔即可生效。
      不需要改動其他任何檔案。
   ======================================================= */

const EMAILJS_PUBLIC_KEY = "";   // 例如 "AbCdEfGhIjKlMnOp"
const EMAILJS_SERVICE_ID = "";   // 例如 "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = "";  // 例如 "template_xxxxxxx"

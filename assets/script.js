// 口袋營養獅 — 簡易互動腳本
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open-mobile');
      if (nav.classList.contains('open-mobile')) {
        nav.style.display = 'block';
        nav.style.position = 'absolute';
        nav.style.top = '68px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#fff';
        nav.style.padding = '18px 24px';
        nav.style.boxShadow = '0 12px 24px rgba(14,110,124,0.12)';
      } else {
        nav.style.display = '';
      }
    });
  }

  // 聯絡表單改用 Google 表單嵌入（見 contact.html 內的嵌入邏輯與
  // assets/gform-config.js 設定檔），此處不需要額外的表單提交程式碼。
});

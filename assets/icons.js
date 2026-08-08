/* =======================================================
   口袋營養獅 — 簡約線條圖示庫（取代 emoji）
   用法：<span class="icon" data-icon="leaf"></span>
   頁面載入時會自動把 data-icon 對應的 SVG 圖示塞進該元素。
   ======================================================= */

const ICON_SVG_ATTRS = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';

const ICONS = {
  leaf: `<svg ${ICON_SVG_ATTRS}><path d="M6 21c0-7 4-15 15-17-1.5 9-7 15-15 17z"/><path d="M6 21c2-4 6-8 11-10"/></svg>`,

  chat: `<svg ${ICON_SVG_ATTRS}><rect x="3" y="4.5" width="18" height="12" rx="3"/><path d="M8 16.5l-2 4 5.5-4"/></svg>`,

  clipboard: `<svg ${ICON_SVG_ATTRS}><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h4"/></svg>`,

  lock: `<svg ${ICON_SVG_ATTRS}><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`,

  utensils: `<svg ${ICON_SVG_ATTRS}><path d="M5 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2M7 2v18"/><path d="M18 2c-2 0-3 2.5-3 5.5S16 13 18 13s3-2 3-5.5S20 2 18 2zM18 13v7"/></svg>`,

  scale: `<svg ${ICON_SVG_ATTRS}><path d="M12 3v18M9 3h6"/><path d="M5 7l-3 7a3 3 0 0 0 6 0z"/><path d="M19 7l-3 7a3 3 0 0 0 6 0z"/><path d="M5 7h14"/></svg>`,

  heartpulse: `<svg ${ICON_SVG_ATTRS}><path d="M20 8.6c0-2.6-2-4.6-4.6-4.6-1.5 0-2.8.8-3.4 1.9-.6-1.1-1.9-1.9-3.4-1.9C6 4 4 6 4 8.6c0 5.1 8 10.4 8 10.4s8-5.3 8-10.4z"/><path d="M4.5 12h3l1.8-3 2.8 5.5 1.6-3.5h4.3"/></svg>`,

  baby: `<svg ${ICON_SVG_ATTRS}><circle cx="12" cy="7" r="3.2"/><path d="M12 10.2c-4 0-6.2 3-6.2 6.8v3h12.4v-3c0-3.8-2.2-6.8-6.2-6.8z"/></svg>`,

  run: `<svg ${ICON_SVG_ATTRS}><circle cx="14" cy="4.5" r="2"/><path d="M5 20l3.5-5 2.7 1.8 1.8-3.6 3.8.9-1.8 5.4"/><path d="M9.5 13l1-3.6 3.6-1.2 2.4 2.8"/></svg>`,

  family: `<svg ${ICON_SVG_ATTRS}><circle cx="8" cy="6.5" r="2.6"/><circle cx="16" cy="6.5" r="2.6"/><path d="M3 20v-2.5A4 4 0 0 1 7 13.5h2a4 4 0 0 1 4 4V20"/><path d="M13.2 20v-2A3.3 3.3 0 0 1 16.5 14.7h0A3.3 3.3 0 0 1 19.8 18v2"/></svg>`,

  flame: `<svg ${ICON_SVG_ATTRS}><path d="M12 2c1.2 4-3 5.4-3 9.5a3 3 0 0 0 6 0c0-1-.4-1.8-.9-2.6.9.6 2.4 2.3 2.4 4.6a4.5 4.5 0 0 1-9 0c0-5.2 4-6.6 3-11.5.9.9 1.6 1.7 1.5 0z"/></svg>`,

  dumbbell: `<svg ${ICON_SVG_ATTRS}><rect x="3.5" y="9" width="3" height="6" rx="1"/><rect x="17.5" y="9" width="3" height="6" rx="1"/><path d="M2 10.5v3M22 10.5v3M6.5 12h11"/></svg>`,

  droplet: `<svg ${ICON_SVG_ATTRS}><path d="M12 3.2c4.2 5 7 8.6 7 12.1a7 7 0 0 1-14 0c0-3.5 2.8-7.1 7-12.1z"/></svg>`,

  trenddown: `<svg ${ICON_SVG_ATTRS}><path d="M3 6.5l6.5 6.5 4-4L21 17"/><path d="M15 17h6v-6"/></svg>`,

  pill: `<svg ${ICON_SVG_ATTRS}><path d="M8.3 15.7l7.4-7.4a3.6 3.6 0 1 1 5 5l-7.4 7.4a3.6 3.6 0 1 1-5-5z"/><path d="M10.8 8l5.2 5.2"/></svg>`,

  salad: `<svg ${ICON_SVG_ATTRS}><path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M12 12V4M8.5 12L7 6M15.5 12L17 6"/></svg>`,

  microscope: `<svg ${ICON_SVG_ATTRS}><path d="M6 21h10"/><path d="M10 21c-3.3 0-5.5-2.2-5.5-5.3a5 5 0 0 1 8-4"/><path d="M13.5 12.5l4-4 2 2-4 4"/><path d="M17.5 6.5l1.6-1.6"/></svg>`,

  mail: `<svg ${ICON_SVG_ATTRS}><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5L12 13l8.5-6.5"/></svg>`,

  clock: `<svg ${ICON_SVG_ATTRS}><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2.5"/></svg>`,

  user: `<svg ${ICON_SVG_ATTRS}><circle cx="12" cy="8" r="4"/><path d="M4.2 21c0-4.3 3.5-6.8 7.8-6.8s7.8 2.5 7.8 6.8"/></svg>`,

  users: `<svg ${ICON_SVG_ATTRS}><circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M2.2 20c0-3.3 2.9-5.3 5.8-5.3s5.8 2 5.8 5.3"/><path d="M14.8 20c0-2.6 2-4.2 4.4-4.2s4.4 1.6 4.6 4.2"/></svg>`,

  brain: `<svg ${ICON_SVG_ATTRS}><path d="M9.2 3.2a3 3 0 0 0-3 3v.6a3 3 0 0 0-1 5.7A3 3 0 0 0 8.2 17a3 3 0 0 0 3-3V6.2a3 3 0 0 0-2-3z"/><path d="M14.8 3.2a3 3 0 0 1 3 3v.6a3 3 0 0 1 1 5.7A3 3 0 0 1 15.8 17a3 3 0 0 1-3-3V6.2a3 3 0 0 1 2-3z"/></svg>`,

  star: `<svg ${ICON_SVG_ATTRS}><path d="M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.6L12 17.2l-5.9 3.3 1.2-6.6-4.8-4.6 6.6-.8z"/></svg>`,

  arrowleft: `<svg ${ICON_SVG_ATTRS}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,

  target: `<svg ${ICON_SVG_ATTRS}><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/></svg>`,

  phone: `<svg ${ICON_SVG_ATTRS}><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18h2"/></svg>`,

  wheat: `<svg ${ICON_SVG_ATTRS}><path d="M12 2v19"/><path d="M9 5.5l3 2 3-2M9 9.5l3 2 3-2M9 13.5l3 2 3-2M9 17.5l3 2 3-2"/></svg>`,

  grad: `<svg ${ICON_SVG_ATTRS}><path d="M2 9l10-4.5L22 9l-10 4.5z"/><path d="M6 11.2V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.8"/></svg>`,

  cert: `<svg ${ICON_SVG_ATTRS}><circle cx="12" cy="8.5" r="5.3"/><path d="M9 13l-1.5 7L12 18l4.5 2L15 13"/></svg>`,

  building: `<svg ${ICON_SVG_ATTRS}><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7h1.5M8 11h1.5M8 15h1.5M14.5 7H16M14.5 11H16M14.5 15H16"/><path d="M10 21v-3.5h4V21"/></svg>`,

  menu: `<svg ${ICON_SVG_ATTRS}><path d="M4 6.5h16M4 12h16M4 17.5h16"/></svg>`
};

function renderIcons(root) {
  var scope = root || document;
  scope.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    if (ICONS[name]) {
      el.innerHTML = ICONS[name];
      el.classList.add('icon');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderIcons(document);
});

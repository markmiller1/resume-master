/* 简历大师 · A-ADS 广告位（自主变现「流量→BTC」最直接管子）
 * 纯前端站点「有流量即变现」：页面有真实访客，A-ADS 按展示给 BTC。
 * 把你在 a-ads.com 创建的 zone id 依次填入 AD_ZONES（对应 ad-top / ad-mid / ad-foot 三个坑位，留空=不显示该坑位）。
 * 当前已填入用户在 a-ads.com 建好的广告单元 zone id = 2455423。
 */
(function () {
  // ↓↓↓ zone id 数组：下标 0=顶部(ad-top) 1=中部(ad-mid) 2=页脚(ad-foot)；留空则该坑位不显示 ↓↓↓
  var AD_ZONES = ["2455423", "", ""];

  var mounts = document.querySelectorAll(".ad-mount");
  if (!mounts.length) return;

  var st = document.createElement("style");
  st.textContent =
    ".ad-mount{max-width:900px;margin:16px auto;min-height:50px;text-align:center;}" +
    ".ad-label{font-size:11px;color:#7a8290;margin-bottom:5px;letter-spacing:1px;}";
  document.head.appendChild(st);

  mounts.forEach(function (m, i) {
    if (m.querySelector("iframe")) return; // 已静态嵌入则跳过，避免重复
    var z = (AD_ZONES[i] || "").trim();
    if (!z) return;
    var label = document.createElement("div");
    label.className = "ad-label";
    label.textContent = "赞助 · Sponsored";
    m.appendChild(label);
    var frame = document.createElement("div");
    frame.innerHTML =
      "<iframe data-aa='" + z + "' src='//acceptable.a-ads.com/" + z + "/?size=Adaptive' " +
      "style='border:0;padding:0;width:100%;max-width:728px;height:90px;display:block;margin:auto'></iframe>";
    m.appendChild(frame.firstChild);
  });
})();

/* 简历大师 · 顶部导航高亮当前页（全站通用 site-nav，由脚本注入） */
(function () {
  try {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;
    var cur = location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll("a").forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("#")[0].split("?")[0];
      if (href === cur || (cur === "index.html" && href === "")) a.classList.add("cur");
    });
  } catch (e) {}
})();

/* 简历大师 · 页面底部「今日访问」展示（同源 today-visits.json，数据来自 A-ADS zone 2455423 公开统计）
 * A-ADS 统计页禁跨域直读(CORS/DENY)，故由采集脚本产出同源 today-visits.json，前端 fetch 显示。
 * 口径：today_unique=去重独立访客(guIPs)，today_views=页面加载次数(Ad Requests)，均为广告加载口径近似值。
 */
(function () {
  function renderVisits() {
    var footer = document.querySelector("footer");
    if (!footer) return;
    var el = document.getElementById("today-visits");
    if (!el) {
      el = document.createElement("span");
      el.id = "today-visits";
      el.style.marginLeft = "8px";
      el.style.opacity = "0.8";
      footer.appendChild(el);
    }
    el.textContent = "· 访问统计读取中…";
    fetch("./today-visits.json?_=" + Date.now(), { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var u = d.today_unique || 0, t = d.total_views || 0;
        el.textContent = "· 今日访问 " + u + " 人" + (t ? (" · 累计 " + t + " 次") : "");
      })
      .catch(function () { el.textContent = ""; });
  }
  if (document.readyState !== "loading") renderVisits();
  else document.addEventListener("DOMContentLoaded", renderVisits);
})();


/* 简历大师 · 全站 footer「支持我们」入口（一处改动、50 页生效，导流到变现页） */
(function () {
  try {
    var footer = document.querySelector("footer");
    if (!footer || document.getElementById("support-cta")) return;
    var a = document.createElement("a");
    a.id = "support-cta";
    a.href = "support.html";
    a.textContent = "支持我们 ❤";
    a.style.cssText = "margin-left:8px;color:var(--accent);text-decoration:none";
    footer.appendChild(a);
  } catch (e) {}
})();

/* ---------- 分享传播组件（全站注入，降低转发门槛） ---------- */
(function(){
  if (document.getElementById('share-bar')) return;
  if (!document.body) return;
  var TEXT = '发现一个永久免费的在线简历工具：内容全部在自己浏览器本地处理、不上传服务器；不用注册、导出PDF不收费、无自动续费；还能免费做 ATS 机器筛选检测，帮你过企业机筛、更快到达HR面前。正在找工作的朋友可以用：';
  var bar = document.createElement('div');
  bar.id = 'share-bar';
  bar.style.cssText = 'max-width:1080px;margin:26px auto 0;padding:18px 20px;background:var(--panel);border:1px solid var(--border);border-radius:12px;text-align:center';
  bar.innerHTML =
    '<div style="font-size:14px;font-weight:700;margin-bottom:4px;color:var(--text)">觉得有用？分享给正在找工作的朋友</div>' +
    '<div style="font-size:12.5px;color:var(--muted);margin-bottom:12px">永久免费 · 本地不上传 · ATS 检测帮你过机器筛选</div>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">' +
      '<button data-act="copy" style="padding:8px 14px;border-radius:8px;border:1px solid var(--accent);background:var(--accent);color:#1a1209;font-weight:700;font-size:13px;cursor:pointer">📋 复制推荐语+链接</button>' +
      '<button data-act="weibo" style="padding:8px 14px;border-radius:8px;border:1px solid var(--border);background:var(--panel-2);color:var(--text);font-size:13px;cursor:pointer">微博</button>' +
      '<button data-act="qzone" style="padding:8px 14px;border-radius:8px;border:1px solid var(--border);background:var(--panel-2);color:var(--text);font-size:13px;cursor:pointer">QQ空间</button>' +
      '<button data-act="native" style="padding:8px 14px;border-radius:8px;border:1px solid var(--border);background:var(--panel-2);color:var(--text);font-size:13px;cursor:pointer">系统分享</button>' +
    '</div>';
  var tip = document.createElement('div');
  tip.style.cssText = 'position:absolute;left:50%;transform:translateX(-50%);margin-top:8px;padding:6px 12px;border-radius:8px;background:var(--ok);color:#06281d;font-size:12.5px;display:none;white-space:nowrap;z-index:99';
  bar.appendChild(tip);
  function toast(msg){
    tip.textContent = msg; tip.style.display = 'block';
    setTimeout(function(){ tip.style.display = 'none'; }, 2200);
  }
  bar.addEventListener('click', function(e){
    var b = e.target.closest ? e.target.closest('button') : null;
    if (!b) return;
    var act = b.getAttribute('data-act');
    var url = location.href, full = TEXT + '\n' + url;
    if (act === 'copy') {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full).then(function(){ toast('已复制，粘贴到微信群/QQ群即可'); },
          function(){ toast('复制失败，请手动选择'); });
      } else {
        var ta = document.createElement('textarea');
        ta.value = full; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); toast('已复制，粘贴到微信群/QQ群即可'); }
        catch(err){ toast('复制失败，请手动选择'); }
        document.body.removeChild(ta);
      }
    } else if (act === 'weibo') {
      window.open('https://service.weibo.com/share/share.php?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(TEXT), '_blank');
    } else if (act === 'qzone') {
      window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent('永久免费的简历工具·本地不上传·ATS检测'), '_blank');
    } else if (act === 'native') {
      if (navigator.share) { navigator.share({ title: '简历大师', text: TEXT, url: url }).catch(function(){}); }
      else { toast('当前浏览器不支持，请用「复制推荐语」'); }
    }
  });
  (document.querySelector('footer.site') || document.body).appendChild(bar);
})();

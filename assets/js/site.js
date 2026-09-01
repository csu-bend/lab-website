/* ==========================================================================
   BEND Lab — behaviour
   내용을 바꾸려면 data.js 를 고치세요. 이 파일은 손댈 일이 거의 없습니다.
   ========================================================================== */

/* --- nav ------------------------------------------------------------------ */
(function nav() {
  var toggle = document.querySelector(".nav-toggle");
  var list = document.querySelector(".nav");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  // 현재 페이지 표시
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
  });
})();

/* --- helpers -------------------------------------------------------------- */
function markPI(authors) {
  return authors.replace(/Han Sol Lee/g, "<b>Han Sol Lee</b>");
}

function roleTag(role) {
  if (role === "first") return '<span class="tag tag-first">제1저자</span>';
  if (role === "cofirst") return '<span class="tag tag-first">공동 제1저자</span>';
  if (role === "corresponding") return '<span class="tag tag-corr">교신저자</span>';
  return "";
}

function groupByYear(items) {
  var map = new Map();
  items.forEach(function (it) {
    if (!map.has(it.year)) map.set(it.year, []);
    map.get(it.year).push(it);
  });
  return Array.from(map.entries()).sort(function (a, b) { return b[0] - a[0]; });
}

/* --- publications --------------------------------------------------------- */
(function publications() {
  var host = document.getElementById("pub-list");
  if (!host) return;

  var countEl = document.getElementById("pub-count");
  var filters = document.querySelectorAll(".filter");
  var current = "all";

  function pubHTML(p, n) {
    var link = p.doi
      ? '<a href="' + p.doi + '" target="_blank" rel="noopener">' + p.title + "</a>"
      : p.title;
    var review = p.type === "review" ? '<span class="tag tag-review">리뷰</span>' : "";
    return (
      '<article class="pub">' +
      '<div class="pub-n">' + n + "</div>" +
      "<div>" +
      '<h3 class="pub-title">' + link + review + roleTag(p.role) + "</h3>" +
      '<p class="pub-authors">' + markPI(p.authors) + "</p>" +
      '<p class="pub-meta"><em>' + p.journal + "</em>, " + p.year +
      (p.impact ? " · IF " + p.impact : "") + "</p>" +
      "</div></article>"
    );
  }

  function patentHTML(p, n) {
    return (
      '<article class="pub">' +
      '<div class="pub-n">' + n + "</div>" +
      "<div>" +
      '<h3 class="pub-title">' + p.title + "</h3>" +
      '<p class="pub-authors">' + markPI(p.inventors) + "</p>" +
      '<p class="pub-meta">' + p.number + "</p>" +
      "</div></article>"
    );
  }

  function render() {
    var html = "";
    var total = 0;

    if (current === "patents") {
      var groupsP = groupByYear(PATENTS);
      var n = PATENTS.length;
      total = n;
      groupsP.forEach(function (g) {
        html += '<section class="year-group"><h2 class="year-mark">' + g[0] + "</h2>";
        g[1].forEach(function (p) { html += patentHTML(p, n--); });
        html += "</section>";
      });
      countEl.textContent = "등록·출원 특허 " + total + "건";
    } else {
      var list = PUBLICATIONS.filter(function (p) {
        if (current === "all") return true;
        if (current === "article") return p.type === "article";
        if (current === "review") return p.type === "review";
        if (current === "lead") return p.role === "first" || p.role === "cofirst";
        return true;
      });
      var m = list.length;
      total = m;
      groupByYear(list).forEach(function (g) {
        html += '<section class="year-group"><h2 class="year-mark">' + g[0] + "</h2>";
        g[1].forEach(function (p) { html += pubHTML(p, m--); });
        html += "</section>";
      });
      countEl.textContent = "논문 " + total + "편";
    }

    host.innerHTML = html || "<p>해당하는 항목이 없습니다.</p>";
  }

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      current = btn.dataset.filter;
      render();
    });
  });

  render();
})();

/* --- home: recent publications -------------------------------------------- */
(function recentPubs() {
  var host = document.getElementById("recent-pubs");
  if (!host) return;
  host.innerHTML = PUBLICATIONS.slice(0, 4).map(function (p) {
    return (
      '<article class="pub" style="grid-template-columns:1fr">' +
      "<div>" +
      '<h3 class="pub-title">' + p.title + "</h3>" +
      '<p class="pub-meta"><em>' + p.journal + "</em>, " + p.year + "</p>" +
      "</div></article>"
    );
  }).join("");
})();

/* --- home + news page ------------------------------------------------------ */
(function news() {
  var host = document.getElementById("news-list");
  if (!host) return;
  var limit = host.dataset.limit ? parseInt(host.dataset.limit, 10) : NEWS.length;
  host.innerHTML = NEWS.slice(0, limit).map(function (n) {
    return (
      "<li><div class='news-date'>" + n.date + "</div>" +
      "<div class='news-body'><h3>" + n.title + "</h3><p>" + n.body + "</p></div></li>"
    );
  }).join("");
})();

/* --- members --------------------------------------------------------------- */
(function members() {
  var host = document.getElementById("member-grid");
  if (!host) return;

  if (!MEMBERS.length) {
    host.innerHTML = "<p>구성원을 모집하고 있습니다. 아래 연락처로 편하게 문의해 주세요.</p>";
    return;
  }

  function card(m) {
    var photo = m.photo
      ? '<img class="member-photo" src="assets/img/' + m.photo + '" alt="' + m.name + '" loading="lazy">'
      : '<div class="member-photo-fallback"></div>';
    var en = m.nameEn ? '<p class="name-en">' + m.nameEn + "</p>" : "";
    var focus = m.focus ? '<p class="focus">' + m.focus + "</p>" : "";
    var mail = m.email ? '<p class="focus"><a href="mailto:' + m.email + '">' + m.email + "</a></p>" : "";
    return '<div class="member">' + photo + "<h3>" + m.name + "</h3>" + en +
           '<p class="role">' + m.role + "</p>" + focus + mail + "</div>";
  }

  var groups = [
    { key: "full", label: "Full-time 연구생" },
    { key: "2026", label: "2026년 연구생" }
  ];

  var html = "";
  groups.forEach(function (g) {
    var list = MEMBERS.filter(function (m) { return m.track === g.key; });
    if (!list.length) return;
    html += '<h2 class="axis-label" style="margin-top:2.6rem">' + g.label + "</h2>";
    html += '<div class="member-grid">' + list.map(card).join("") + "</div>";
  });

  var rest = MEMBERS.filter(function (m) { return m.track !== "full" && m.track !== "2026"; });
  if (rest.length) html += '<div class="member-grid">' + rest.map(card).join("") + "</div>";

  host.outerHTML = "<div>" + html + "</div>";
})();

/* --- alumni ---------------------------------------------------------------- */
(function alumni() {
  var host = document.getElementById("alumni-list");
  if (!host) return;
  if (!ALUMNI.length) { host.closest("section").style.display = "none"; return; }
  host.innerHTML = ALUMNI.map(function (a) {
    return "<li><div class='when'>" + a.role + "</div><div class='what'><strong>" +
      a.name + "</strong><span>" + (a.now || "") + "</span></div></li>";
  }).join("");
})();

/* --- footer year ----------------------------------------------------------- */
document.querySelectorAll(".js-year").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

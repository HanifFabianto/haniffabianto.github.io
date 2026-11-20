(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var EDIT = /[?&#]edit\b/.test(location.search + location.hash);
  var EXTS = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"];
  var MAX_IMAGES = 12;

  /* ---------- util ---------- */
  function h(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c) node.appendChild(c);
    });
    return node;
  }

  function fmtPct(n) {
    return n.toLocaleString("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
  }

  function probe(src) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () { resolve(src); };
      img.onerror = function () { resolve(null); };
      img.src = src;
    });
  }

  // Cari images/<id>/1.<ext>, 2.<ext>, ... berhenti saat nomor tidak ditemukan.
  async function findImages(id) {
    var found = [];
    for (var n = 1; n <= MAX_IMAGES; n++) {
      var hits = await Promise.all(
        EXTS.map(function (e) { return probe("images/" + id + "/" + n + "." + e); })
      );
      var hit = hits.filter(Boolean)[0];
      if (!hit) break;
      found.push(hit);
    }
    return found;
  }

  /* ---------- kepala halaman ---------- */
  var p = D.profile;
  document.getElementById("nama").textContent = p.name;
  document.getElementById("tagline").textContent = p.tagline;
  document.getElementById("summary").textContent = p.summary;
  document.getElementById("year").textContent = "© " + new Date().getFullYear();
  document.getElementById("cv-top").setAttribute("href", p.cv);
  document.getElementById("cv-top").setAttribute("download", "");

  var contacts = document.getElementById("contacts");
  p.contacts.forEach(function (c) {
    var a = h("a", { href: c.href, text: c.label, title: c.text });
    if (/^https?:/.test(c.href)) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); }
    contacts.appendChild(h("li", {}, [a]));
  });

  var facts = document.getElementById("facts");
  p.facts.forEach(function (f) {
    facts.appendChild(h("div", {}, [h("dt", { text: f.label }), h("dd", { text: f.value })]));
  });

  // Data diri (TTL) dan hobi: panel kedua, dipisah garis tebal dari identitas akademik.
  var personal = document.getElementById("personal");
  (p.personal || []).forEach(function (f) {
    personal.appendChild(h("div", {}, [h("dt", { text: f.label }), h("dd", { text: f.value })]));
  });
  if (p.hobbies && p.hobbies.length) {
    var hobiList = h("ul", { class: "chips" });
    p.hobbies.forEach(function (t) { hobiList.appendChild(h("li", { text: t })); });
    personal.appendChild(h("div", {}, [h("dt", { text: "Hobi" }), h("dd", {}, [hobiList])]));
  }
  if (!personal.children.length) personal.hidden = true;

  if (EDIT) document.getElementById("edit-banner").hidden = false;

  // Foto profil: simpan sebagai images/profil/foto.jpg (atau .png / .webp). Tanpa file, bagian ini tidak tampil.
  Promise.all(EXTS.map(function (e) { return probe("images/profil/foto." + e); })).then(function (hits) {
    var src = hits.filter(Boolean)[0];
    if (!src) {
      if (EDIT) {
        var hint = document.getElementById("portrait");
        hint.className = "portrait empty-portrait";
        hint.innerHTML = "";
        hint.appendChild(h("figcaption", { text: "Foto belum ada. Simpan sebagai images/profil/foto.jpg" }));
        hint.hidden = false;
      }
      return;
    }
    var img = document.getElementById("portrait-img");
    img.src = src;
    img.alt = "Foto " + p.name;
    document.getElementById("portrait").hidden = false;
  });

  /* ---------- penampil bukti ---------- */
  var dlg = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  var lbCap = document.getElementById("lb-cap");
  var lbCount = document.getElementById("lb-count");
  var prevBtn = document.getElementById("lb-prev");
  var nextBtn = document.getElementById("lb-next");
  var gallery = [];
  var current = 0;
  var opener = null;

  function show(i) {
    current = i;
    var item = gallery[i];
    lbImg.src = item.src;
    lbImg.alt = item.caption;
    lbCap.textContent = item.caption;
    lbCount.textContent = (i + 1) + " dari " + gallery.length;
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === gallery.length - 1;
  }

  function openLightbox(items, i, trigger) {
    gallery = items;
    opener = trigger;
    show(i);
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  }

  prevBtn.addEventListener("click", function () { if (current > 0) show(current - 1); });
  nextBtn.addEventListener("click", function () { if (current < gallery.length - 1) show(current + 1); });
  document.getElementById("lb-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", function () { if (opener) opener.focus(); });
  dlg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" && current > 0) show(current - 1);
    if (e.key === "ArrowRight" && current < gallery.length - 1) show(current + 1);
  });

  /* ---------- bagian-bagian ---------- */
  function renderBars(b) {
    var wrap = h("div", { class: "bars", role: "img" });
    var label = b.rows.map(function (r) { return r.label + " " + fmtPct(r.value); }).join(", ");
    wrap.setAttribute("aria-label", "Perbandingan beban kerja: " + label);
    b.rows.forEach(function (r, idx) {
      var track = h("div", { class: "track" }, [
        h("div", { class: "fill " + r.tone, style: "width:" + (r.value / b.max) * 100 + "%" })
      ]);
      if (idx === 0 && b.mark) {
        var left = (b.mark / b.max) * 100 + "%";
        track.appendChild(h("span", { class: "mark", style: "left:" + left }));
        track.appendChild(h("span", { class: "mark-label", style: "left:" + left, text: b.markLabel || "" }));
      }
      wrap.appendChild(
        h("div", { class: "bar" }, [
          h("div", { class: "bar-head" }, [h("span", { text: r.label }), h("b", { text: fmtPct(r.value) })]),
          track
        ])
      );
    });
    return wrap;
  }

  function renderEntry(entry) {
    var body = h("div", {}, [
      h("h3", { text: entry.title }),
      h("p", { class: "org", text: entry.org }),
      entry.text ? h("p", { class: "entry-text", text: entry.text }) : null
    ]);

    if (entry.figure) {
      body.appendChild(
        h("div", { class: "figure" }, [
          h("strong", { text: entry.figure.value }),
          h("span", { text: entry.figure.label })
        ])
      );
    }
    if (entry.bars) body.appendChild(renderBars(entry.bars));
    if (entry.tags && entry.tags.length) {
      var ul = h("ul", { class: "tags" });
      entry.tags.forEach(function (t) { ul.appendChild(h("li", { text: t })); });
      body.appendChild(ul);
    }

    var evidence = h("div", { class: "evidence" });
    body.appendChild(evidence);

    (entry.noEvidence ? Promise.resolve([]) : findImages(entry.id)).then(function (srcs) {
      if (!srcs.length) {
        if (entry.noEvidence) return;
        if (EDIT) {
          var msg = h("div", { class: "empty" });
          msg.appendChild(document.createTextNode("Bukti belum ditambahkan. Simpan gambar sebagai "));
          msg.appendChild(h("code", { text: "images/" + entry.id + "/1.jpg" }));
          msg.appendChild(document.createTextNode(" (lalu 2.jpg, 3.jpg, dan seterusnya)."));
          evidence.appendChild(msg);
        }
        return;
      }
      var items = srcs.map(function (src, i) {
        return {
          src: src,
          caption: (entry.captions && entry.captions[i]) || "Bukti " + (i + 1) + ": " + entry.title
        };
      });
      evidence.appendChild(h("p", { class: "evidence-title", text: "Bukti (" + items.length + ")" }));
      var grid = h("div", { class: "thumbs" });
      items.forEach(function (item, i) {
        var img = h("img", { src: item.src, alt: item.caption, loading: "lazy" });
        var btn = h("button", { type: "button", class: "thumb", "aria-label": "Perbesar: " + item.caption }, [
          img,
          h("span", { text: item.caption })
        ]);
        btn.addEventListener("click", function () { openLightbox(items, i, btn); });
        grid.appendChild(btn);
      });
      evidence.appendChild(grid);
    });

    return h("article", { class: "entry" + (entry.compact ? " compact" : ""), id: entry.id }, [
      h("div", { class: "when", text: entry.when }),
      body
    ]);
  }

  function renderSkills(sec) {
    var wrap = h("div", { class: "skills" });
    sec.groups.forEach(function (g) {
      var ul = h("ul", { class: "tags" });
      g.items.forEach(function (it) { ul.appendChild(h("li", { text: it })); });
      wrap.appendChild(h("div", {}, [h("h3", { text: g.name }), ul]));
    });
    return wrap;
  }

  var root = document.getElementById("sections");
  var nav = document.getElementById("nav");

  D.sections.forEach(function (sec) {
    nav.appendChild(h("a", { href: "#" + sec.id, text: sec.title }));
    var block = h("section", { class: "block", id: sec.id, "aria-labelledby": sec.id + "-h" });
    block.appendChild(h("h2", { id: sec.id + "-h", text: sec.title }));
    if (sec.type === "skills") block.appendChild(renderSkills(sec));
    else sec.entries.forEach(function (e) { block.appendChild(renderEntry(e)); });
    root.appendChild(block);
  });

  /* ---------- gerak halus ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  // Diagram batang tumbuh sekali saat terlihat.
  var bars = document.querySelectorAll(".bars");
  if (hasIO && !reduce) {
    var barIO = new IntersectionObserver(function (items) {
      items.forEach(function (it) {
        if (it.isIntersecting) { it.target.classList.add("in"); barIO.unobserve(it.target); }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { barIO.observe(b); });
  } else {
    bars.forEach(function (b) { b.classList.add("in"); });
  }

  // Menu aktif mengikuti bagian yang sedang dibaca.
  if (hasIO) {
    var links = {};
    nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (items) {
      items.forEach(function (it) {
        if (!it.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
        var l = links[it.target.id];
        if (l) l.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    document.querySelectorAll(".block").forEach(function (s) { spy.observe(s); });
  }

  // Garis kemajuan baca di bawah bilah atas.
  var prog = document.getElementById("progress");
  var ticking = false;
  function updateProgress() {
    var el = document.documentElement;
    var max = el.scrollHeight - el.clientHeight;
    prog.style.transform = "scaleX(" + (max > 0 ? Math.min(el.scrollTop / max, 1) : 0) + ")";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  updateProgress();
})();

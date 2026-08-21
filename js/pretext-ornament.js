"use strict";


(async function () {
  const canvas = document.getElementById("pretext-ornament-canvas");
  if (!canvas) return;


  const fallback = document.getElementById("pretext-ornament-fallback");


  let prepareWithSegments;
  try {
    const mod = await import(
      "https://cdn.jsdelivr.net/npm/@chenglou/pretext/+esm"
    );
    prepareWithSegments = mod.prepareWithSegments;
  } catch {
    showFallback();
    return;
  }


  const ctx = canvas.getContext("2d");
  if (!ctx) {
    showFallback();
    return;
  }


  const isDark = () => document.documentElement.classList.contains("dark");
  const getColor = () => (isDark() ? "#E0DED8" : "#1A1A1A");
  const getAccent = () => (isDark() ? "#E8563A" : "#3acce8");


  const W = 80;
  const H = 56;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);


  // =========【重点】所有图案放这里，新增直接往里追加 =========
  const ORNAMENTS = [
    // 原本书本图案
    [
      " _______",
      "/     /,",
      "/     //",
      "/______//",
      "(______(/",
    ],
    // ✅ 你可以继续在这里加更多图案示例（宽矮、适配80x56画布）
    [
      "   /\\   /\\",
      "  /  \\ /  \\",
      " /    V    \\",
      "/___________\\",
      "\\___________/",
    ],
    [
      "    .--.",
      "   / o o \\",
      "  /_______\\",
      "  \\_______/",
    ],
    [
      "  ___  ___",
      " | o || o |",
      " |____||____|",
      "  \\_______/",
    ],
    [
      "    /\\",
      "   /  \\",
      "  /    \\",
      " /______\\",
      " \\______/",
    ],
    [
      "  .----.",
      " |  ^ ^  |",
      " |_______|",
      "  \\_____/",
    ],
    [
      "  _    _",
      " | \\  / |",
      " |  \\/  |",
      "  \\____/",
    ],
    [
      "   ___",
      "  / _ \\",
      " |  o  |",
      "  \\___/",
    ],
    [
      "  /\\  /\\",
      " /  \\/  \\",
      "/________\\",
      "\\________/",
    ],
    [
      "    ^ ^",
      "   /o o\\",
      "  /_____\\",
      "  \\_____/",
    ],
    [
      "  .____.",
      " /  *  \\",
      "|_______|",
      " \\_____/",
    ],
    [
      "  ___ ___",
      " | * | * |",
      " |___|___|",
      "  \\_____/",
    ],
    [
      "    /\\",
      "   /  \\",
      "  /    \\",
      " /      \\",
      "/________\\",
    ],
    [
      "  .--..--.",
      " /  o  o  \\",
      "/__________\\",
      "\\__________/",
    ],
    [
      "   _/\\_",
      "  / o o \\",
      " /_______\\",
      " \\_______/",
    ],
    [
      "  |\\  /|",
      "  | \\/ |",
      "  |____|",
      "   \\__/",
    ],
    [
      "    ___",
      "   /   \\",
      "  |  o  |",
      "   \\___/",
    ],
    [
      "  /\\___/\\",
      " /  o o  \\",
      "/_________\\",
      "\\_________/",
    ],
    [
      "  ._____.",
      " | o _ o |",
      " |_______|",
      "  \\_____/",
    ],
    [
      " __    __",
      "|  \\  /  |",
      "|___\\/___|",
      " \\_______/",
    ],
    [
      "    /\\",
      "   /  \\",
      "  /    \\",
      " /      \\",
      " \\______/",
    ],


  ];

  // ✅ 初始化随机挑选一个图案
  const bookLines = ORNAMENTS[Math.floor(Math.random() * ORNAMENTS.length)];


  var font = "9px JetBrains Mono";


  // Pre-measure
  try {
    prepareWithSegments(bookLines.join(""), font);
  } catch {
    // Non-critical
  }


  // Parse into character positions
  var bookChars = [];
  ctx.font = font;
  var charW = ctx.measureText("M").width;
  var lineH = 11;


  var maxLen = 0;
  for (var i = 0; i < bookLines.length; i++) {
    if (bookLines[i].length > maxLen) maxLen = bookLines[i].length;
  }


  var totalW = maxLen * charW;
  var totalH = bookLines.length * lineH;
  var offsetX = (W - totalW) / 2;
  var offsetY = (H - totalH) / 2;


  for (var li = 0; li < bookLines.length; li++) {
    var line = bookLines[li];
    for (var ci = 0; ci < line.length; ci++) {
      var ch = line[ci];
      if (ch === " ") continue;
      bookChars.push({
        ch: ch,
        baseX: offsetX + ci * charW,
        baseY: offsetY + li * lineH,
        isEdge: ch === "/" || ch === "(" || ch === ")" || ch === ",",
      });
    }
  }


  function animate(time) {
    ctx.clearRect(0, 0, W, H);
    ctx.font = font;
    ctx.textBaseline = "top";


    var color = getColor();
    var accent = getAccent();


    for (var i = 0; i < bookChars.length; i++) {
      var c = bookChars[i];


      // Gentle shimmer: slight random-ish displacement per character
      var phase = time * 0.0008 + i * 0.7;
      var dx = Math.sin(phase) * 0.4;
      var dy = Math.cos(phase * 0.9) * 0.3;


      // Soft alpha breathing
      var alpha = 0.75 + 0.25 * Math.sin(time * 0.0015 + i * 0.5);


      ctx.globalAlpha = alpha;
      ctx.fillStyle = c.isEdge ? accent : color;
      ctx.fillText(c.ch, c.baseX + dx, c.baseY + dy);
    }


    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }


  function showFallback() {
    canvas.style.display = "none";
    if (fallback) {
      fallback.classList.remove("hidden");
      fallback.classList.add("flex");
    }
  }


  requestAnimationFrame(animate);
})();

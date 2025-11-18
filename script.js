// ===== Reel Strip Slider (full width, up to 5 visible) =====
document.addEventListener("DOMContentLoaded", function () {
  const reelSlider = document.getElementById("reelSlider");
  if (!reelSlider) return;

  const track = reelSlider.querySelector(".reel-track");
  const cards = reelSlider.querySelectorAll(".reel-card");
  const prevBtn = document.getElementById("reelPrev");
  const nextBtn = document.getElementById("reelNext");
  const windowBox = reelSlider.querySelector(".reel-window");

  if (!track || !cards.length || !prevBtn || !nextBtn || !windowBox) return;

  const GAP = 16;                  // CSS gap se match
  const MAX_VISIBLE = 5;           // desktop pe max 5 cards

  let index = 0;
  let cardWidth = 0;
  let visibleCount = 1;
  let maxIndex = 0;

  function calcSizes() {
    const rect = cards[0].getBoundingClientRect();
    cardWidth = rect.width + GAP;

    const windowWidth = windowBox.getBoundingClientRect().width;
    visibleCount = Math.max(1, Math.floor(windowWidth / cardWidth));
    visibleCount = Math.min(MAX_VISIBLE, visibleCount);   // 5 se zyada nahi
    maxIndex = Math.max(0, cards.length - visibleCount);
  }

  function goTo(i) {
    if (i > maxIndex) i = 0;       // end → first
    if (i < 0) i = maxIndex;       // first → end
    index = i;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  window.addEventListener("resize", () => {
    calcSizes();
    goTo(index);
  });

  // init
  calcSizes();
  goTo(0);
});
// ===== Featured Products Slider =====
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".featured-slider");
  if (!slider) return;

  const track = slider.querySelector(".featured-track");
  const cards = slider.querySelectorAll(".featured-card");
  const prevBtn = slider.querySelector(".f-prev");
  const nextBtn = slider.querySelector(".f-next");
  const windowBox = slider.querySelector(".featured-window");

  if (!track || !cards.length || !prevBtn || !nextBtn || !windowBox) return;

  const GAP = 24;           // same as CSS gap
  const MAX_VISIBLE = 4;    // desktop pe max 4 cards

  let index = 0;
  let cardWidth = 0;
  let visibleCount = 1;
  let maxIndex = 0;

  function calcSizes() {
    const rect = cards[0].getBoundingClientRect();
    cardWidth = rect.width + GAP;

    const windowWidth = windowBox.getBoundingClientRect().width;
    visibleCount = Math.max(1, Math.floor(windowWidth / cardWidth));
    visibleCount = Math.min(MAX_VISIBLE, visibleCount);   // 4 se jyada mat dikhana
    maxIndex = Math.max(0, cards.length - visibleCount);
  }

  function goTo(i) {
    if (i > maxIndex) i = 0;       // end → start loop
    if (i < 0) i = maxIndex;       // start → end loop
    index = i;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  window.addEventListener("resize", () => {
    calcSizes();
    goTo(index);
  });

  // init
  calcSizes();
  goTo(0);
});
// ===== Featured Products simple slider (scrollBy with arrows) =====
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".fp-slider");
  if (!slider) return;

  const windowBox = slider.querySelector(".fp-window");
  const track = slider.querySelector(".fp-track");
  const cards = slider.querySelectorAll(".fp-card");
  const prev = slider.querySelector(".fp-prev");
  const next = slider.querySelector(".fp-next");

  if (!windowBox || !track || !cards.length || !prev || !next) return;

  let step = cards[0].getBoundingClientRect().width + 24; // card width + gap

  function recalc() {
    step = cards[0].getBoundingClientRect().width + 24;
  }

  prev.addEventListener("click", () => {
    windowBox.scrollBy({ left: -step, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    windowBox.scrollBy({ left: step, behavior: "smooth" });
  });

  window.addEventListener("resize", recalc);
});


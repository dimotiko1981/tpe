const deck = document.querySelector("[data-lesson-deck]");

if (deck) {
  const totalSlides = 30;
  const image = deck.querySelector("[data-slide-image]");
  const title = deck.querySelector("[data-slide-title]");
  const current = deck.querySelector("[data-slide-current]");
  const previousButtons = [...deck.querySelectorAll("[data-slide-prev]")];
  const nextButtons = [...deck.querySelectorAll("[data-slide-next]")];
  const dotsContainer = deck.querySelector("[data-slide-dots]");
  const frame = deck.querySelector("[data-slide-frame]");
  const fullscreenButton = deck.querySelector("[data-fullscreen]");
  let currentIndex = 0;
  let touchStartX = 0;

  const slidePath = (index) =>
    `assets/slides/mathima-02/slide-${String(index + 1).padStart(2, "0")}.webp`;

  const dots = Array.from({ length: totalSlides }, (_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", `Μετάβαση στη διαφάνεια ${index + 1}`);
    button.addEventListener("click", () => showSlide(index));
    dotsContainer.append(button);
    return button;
  });

  const preloadAdjacent = () => {
    [currentIndex - 1, currentIndex + 1]
      .filter((index) => index >= 0 && index < totalSlides)
      .forEach((index) => {
        const preload = new Image();
        preload.src = slidePath(index);
      });
  };

  function showSlide(index, updateHash = true) {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
    const slideNumber = currentIndex + 1;

    image.classList.add("is-changing");
    image.src = slidePath(currentIndex);
    image.alt = `Διαφάνεια ${slideNumber} από ${totalSlides} του Μαθήματος 2`;
    title.textContent = `Δεδομένα και βασικές αρχές μετάδοσης · Διαφάνεια ${slideNumber}`;
    current.textContent = String(slideNumber);

    previousButtons.forEach((button) => {
      button.disabled = currentIndex === 0;
    });
    nextButtons.forEach((button) => {
      button.disabled = currentIndex === totalSlides - 1;
    });
    dots.forEach((button, indexOfDot) => {
      const active = indexOfDot === currentIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });

    dots[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    if (updateHash) history.replaceState(null, "", `#slide-${slideNumber}`);
    preloadAdjacent();
  }

  image.addEventListener("load", () => image.classList.remove("is-changing"));
  previousButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex - 1)));
  nextButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex + 1)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showSlide(currentIndex - 1);
    if (event.key === "ArrowRight") showSlide(currentIndex + 1);
  });

  frame.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  frame.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showSlide(currentIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  fullscreenButton.addEventListener("click", async () => {
    try {
      if (!document.fullscreenElement) {
        await deck.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      fullscreenButton.title = "Η πλήρης οθόνη δεν υποστηρίζεται από αυτόν τον browser.";
    }
  });

  const hashMatch = window.location.hash.match(/^#slide-(\d{1,2})$/);
  const startingIndex = hashMatch ? Number(hashMatch[1]) - 1 : 0;
  showSlide(startingIndex, false);
}

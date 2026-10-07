const coursePlayer = document.querySelector("[data-course-player]");

if (coursePlayer) {
  const tabs = [...coursePlayer.querySelectorAll("[data-stage-target]")];
  const panels = [...coursePlayer.querySelectorAll("[data-stage-panel]")];
  const previousButton = coursePlayer.querySelector("[data-stage-previous]");
  const nextButton = coursePlayer.querySelector("[data-stage-next]");
  const quickNextButtons = [...coursePlayer.querySelectorAll("[data-go-next]")];
  const progressText = coursePlayer.querySelector("[data-course-progress-text]");
  const progressBar = coursePlayer.querySelector("[data-course-progress-bar]");
  const positionText = coursePlayer.querySelector("[data-stage-position]");
  const currentTitle = coursePlayer.querySelector("[data-current-stage-title]");
  const statusText = coursePlayer.querySelector(".course-stage-status span");
  const viewport = coursePlayer.querySelector(".course-stage-viewport");
  const storageKey = "saek-mathima-1-course-progress";

  let currentIndex = 0;
  let furthestIndex = 0;

  try {
    furthestIndex = Math.min(Number(localStorage.getItem(storageKey)) || 0, panels.length - 1);
  } catch {
    furthestIndex = 0;
  }

  const getIndexFromHash = () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const index = panels.findIndex((panel) => panel.id === id);
    return index >= 0 ? index : 0;
  };

  const updateVisited = () => {
    tabs.forEach((tab, index) => {
      tab.classList.toggle("is-visited", index < furthestIndex);
    });
  };

  const showStage = (index, updateHash = true) => {
    currentIndex = Math.max(0, Math.min(index, panels.length - 1));
    furthestIndex = Math.max(furthestIndex, currentIndex);

    panels.forEach((panel, panelIndex) => {
      panel.hidden = panelIndex !== currentIndex;
    });

    tabs.forEach((tab, tabIndex) => {
      const active = tabIndex === currentIndex;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    const stageTitle = tabs[currentIndex].querySelector("strong")?.textContent || "Μάθημα";
    const completed = currentIndex + 1;
    const progress = Math.round((completed / panels.length) * 100);

    progressText.textContent = `${completed}/${panels.length}`;
    progressBar.style.width = `${progress}%`;
    positionText.textContent = `Στάδιο ${completed} από ${panels.length}`;
    currentTitle.textContent = stageTitle;
    statusText.textContent = currentIndex === panels.length - 1 ? "Τελικό στάδιο" : "Σε εξέλιξη";
    previousButton.disabled = currentIndex === 0;
    nextButton.hidden = currentIndex === panels.length - 1;

    updateVisited();
    viewport.scrollTo({ top: 0, behavior: "smooth" });
    tabs[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

    try {
      localStorage.setItem(storageKey, String(furthestIndex));
    } catch {
      // Η πλοήγηση παραμένει λειτουργική ακόμη και χωρίς αποθήκευση προόδου.
    }

    if (updateHash) {
      history.replaceState(null, "", `#${panels[currentIndex].id}`);
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showStage(index));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const targetIndex = (index + direction + tabs.length) % tabs.length;
      tabs[targetIndex].focus();
    });
  });

  previousButton.addEventListener("click", () => showStage(currentIndex - 1));
  nextButton.addEventListener("click", () => showStage(currentIndex + 1));
  quickNextButtons.forEach((button) => button.addEventListener("click", () => showStage(currentIndex + 1)));

  window.addEventListener("hashchange", () => showStage(getIndexFromHash(), false));
  showStage(getIndexFromHash(), false);
  document.documentElement.dataset.coursePlayer = "ready";
}

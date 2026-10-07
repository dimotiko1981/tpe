const previewButton = document.querySelector("[data-preview-button]");
const previewPanel = document.querySelector("#specialty-preview");
const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (previewButton && previewPanel) {
  previewButton.addEventListener("click", () => {
    const isOpen = previewButton.getAttribute("aria-expanded") === "true";
    previewButton.setAttribute("aria-expanded", String(!isOpen));
    previewPanel.hidden = isOpen;

    if (!isOpen) {
      previewPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

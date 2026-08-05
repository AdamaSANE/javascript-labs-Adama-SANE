const yearElement = document.getElementById("year");
const themeToggle = document.getElementById("theme-toggle");
const textSmaller = document.getElementById("text-smaller");
const textLarger = document.getElementById("text-larger");

const defaultFontSize = 16;
const minimumFontSize = 14;
const maximumFontSize = 22;
const fontStep = 1;

let currentFontSize = defaultFontSize;

function applyFontSize() {
  document.documentElement.style.fontSize = `${currentFontSize}px`;
}

function updateThemeButton() {
  const isDarkMode = document.body.dataset.theme === "dark";
  themeToggle.textContent = isDarkMode ? "Light mode" : "Dark mode";
}

themeToggle.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  updateThemeButton();
});

textSmaller.addEventListener("click", () => {
  currentFontSize = Math.max(minimumFontSize, currentFontSize - fontStep);
  applyFontSize();
});

textLarger.addEventListener("click", () => {
  currentFontSize = Math.min(maximumFontSize, currentFontSize + fontStep);
  applyFontSize();
});

yearElement.textContent = new Date().getFullYear();
document.body.dataset.theme = "light";
applyFontSize();
updateThemeButton();

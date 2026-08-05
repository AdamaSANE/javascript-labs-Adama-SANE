const yearElement = /** @type {HTMLSpanElement} */ (
  document.getElementById("year")
);
const themeToggle = /** @type {HTMLButtonElement} */ (
  document.getElementById("theme-toggle")
);
const textSmaller = /** @type {HTMLButtonElement} */ (
  document.getElementById("text-smaller")
);
const textLarger = /** @type {HTMLButtonElement} */ (
  document.getElementById("text-larger")
);

const defaultFontSize = 16;
const minimumFontSize = 14;
const maximumFontSize = 22;
const fontStep = 1;

let currentFontSize = defaultFontSize;

// Applique la taille de base au document entier pour faire scaler tout le reste.
function applyFontSize() {
  document.documentElement.style.fontSize = `${currentFontSize}px`;
}

// Met à jour le libellé du bouton selon le thème actuellement actif.
function updateThemeButton() {
  const isDarkMode = document.body.dataset.theme === "dark";
  themeToggle.textContent = isDarkMode ? "Light mode" : "Dark mode";
}

// Inverse le thème entre clair et sombre.
themeToggle.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  updateThemeButton();
});

// Réduit la taille du texte sans descendre sous la limite définie.
textSmaller.addEventListener("click", () => {
  currentFontSize = Math.max(minimumFontSize, currentFontSize - fontStep);
  applyFontSize();
});

// Augmente la taille du texte sans dépasser la limite définie.
textLarger.addEventListener("click", () => {
  currentFontSize = Math.min(maximumFontSize, currentFontSize + fontStep);
  applyFontSize();
});

// Initialise la page au chargement.
yearElement.textContent = String(new Date().getFullYear());
document.body.dataset.theme = "light";
applyFontSize();
updateThemeButton();

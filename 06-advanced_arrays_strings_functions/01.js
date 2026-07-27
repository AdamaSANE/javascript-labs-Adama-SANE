/**
 * Exercice: utilisation de `forEach`.
 * - Génère un tableau de 100 valeurs aléatoires.
 * - Calcule somme, nombre et moyenne avec `forEach`.
 * - Crée un nouveau tableau contenant la moitié des valeurs (avec `forEach`).
 * - Recalcule les statistiques sur le tableau réduit.
 * - Refactorisation: la fonction d'accumulation est nommée et passée à `forEach`.
 */

// Génère un tableau de `n` valeurs aléatoires entre 0 et `max` (float, 2 décimales)
function randomArray(n, max = 100) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Number((Math.random() * max).toFixed(2)));
  }
  return arr;
}

// Objet-statistiques simple
function createStats() {
  return { sum: 0, count: 0, avg: 0 };
}

// Fonction d'accumulation nommée: ajoute une valeur aux statistiques
// Cette fonction a la signature (stats, value) pour pouvoir être bindée
function accumulate(stats, value) {
  stats.sum += value;
  stats.count += 1;
  stats.avg = stats.count === 0 ? 0 : stats.sum / stats.count;
}

// --- Exécution de l'exercice ---
const numbers = randomArray(100, 100); // 100 valeurs aléatoires entre 0 et 100

// 1) Calculer somme, count, moyenne sur `numbers` en utilisant la fonction nommée
const statsOriginal = createStats();
numbers.forEach(accumulate.bind(null, statsOriginal));
console.log(
  "Original — sum:",
  statsOriginal.sum.toFixed(2),
  "count:",
  statsOriginal.count,
  "avg:",
  statsOriginal.avg.toFixed(2),
);

// 2) Créer un nouveau tableau qui contient la moitié de chaque valeur
const halves = [];
numbers.forEach(function (v) {
  // commentaire: on utilise forEach pour pousser la valeur transformée
  halves.push(Number((v / 2).toFixed(2)));
});

// 3) Recalculer les stats sur le tableau réduit en réutilisant `accumulate`
const statsHalves = createStats();
halves.forEach(accumulate.bind(null, statsHalves));
console.log(
  "Halves   — sum:",
  statsHalves.sum.toFixed(2),
  "count:",
  statsHalves.count,
  "avg:",
  statsHalves.avg.toFixed(2),
);

// Export (optionnel) pour tests ou import depuis d'autres modules
module.exports = {
  randomArray,
  createStats,
  accumulate,
  numbers,
  halves,
  statsOriginal,
  statsHalves,
};

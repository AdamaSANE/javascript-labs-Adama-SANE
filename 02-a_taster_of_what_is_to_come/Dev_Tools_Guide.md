# Dev Tools Explorer - Guide Pratique

## Objectif

Explorer les outils de développement (Dev Tools) pendant 20 minutes pour comprendre comment les développeurs inspectent et modifient les sites web.

## Comment Accéder aux Dev Tools

### Windows/Linux

- **Chrome/Edge**: `F12` ou `Ctrl + Shift + I`
- **Firefox**: `F12` ou `Ctrl + Shift + I`

### Mac

- **Chrome/Safari/Firefox**: `Cmd + Option + I`

## Les Principaux Onglets

### 1. **Elements/Inspector** (Inspecteur d'éléments)

- Voir la structure HTML d'une page
- Voir les styles CSS appliqués
- Modifier le HTML et CSS en temps réel (les changements disparaissent au refresh)
- **À essayer**: Survolez un élément et cliquez sur l'icône "inspect element"

### 2. **Console**

- Voir les messages JavaScript et les erreurs
- Exécuter du code JavaScript
- **À essayer**: Tapez `console.log("Hello World!")` et appuyez sur Entrée

### 3. **Network**

- Voir les requêtes HTTP/HTTPS
- Voir les fichiers chargés (images, CSS, JS, etc.)
- Voir le temps de chargement
- **À essayer**: Ouvrez cet onglet, puis rechargez la page avec `F5`

### 4. **Sources** (Debugger)

- Voir le code source JavaScript
- Mettre des points d'arrêt (breakpoints)
- Analyser l'exécution du code

### 5. **Application/Storage**

- Voir les cookies
- Voir le LocalStorage
- Voir les données stockées par le site

## Sites Intéressants à Explorer

1. **Google.com** - Site simple, bon pour débuter
2. **GitHub.com** - Site complexe avec beaucoup de JavaScript
3. **Amazon.com** - Voir comment fonctionnent les interactions
4. **Votre site HTML** - Testez votre propre site créé plus tôt!

## Exercice Guidé

### 1. Inspecter votre site HTML (index.html)

- Ouvrez le fichier `index.html` dans un navigateur
- Appuyez sur `F12` pour ouvrir les Dev Tools
- Cliquez sur l'onglet "Elements"
- Essayez de modifier une couleur ou un texte en temps réel
- Regardez comment le site change

### 2. Explorer la Console

- Allez à l'onglet "Console"
- Tapez: `document.title` et appuyez sur Entrée
- Tapez: `document.body.style.backgroundColor = "lightblue"` pour changer la couleur de fond

### 3. Vérifier les Styles CSS

- Allez à l'onglet "Elements"
- Cliquez sur un titre (h2)
- Dans le panneau à droite, vous verrez tous les styles CSS appliqués
- Décochez une propriété pour voir le changement en temps réel

### 4. Explorer le Network

- Ouvrez l'onglet "Network"
- Rafraîchissez la page avec `F5`
- Vous verrez tous les fichiers chargés
- Cliquez sur un fichier pour voir ses détails

## Conseils Utiles

- ✅ Les modifications dans les Dev Tools sont **temporaires** - disparaissent au refresh
- ✅ Essayez de casser quelque chose - vous ne pouvez pas endommager le site
- ✅ Vous pouvez modifier du CSS pour comprendre comment il fonctionne
- ✅ La Console est votre meilleur ami pour tester du JavaScript
- ✅ Le Network tab montre si les images se chargent correctement

## Questions à Explorer

Pendant vos 20 minutes, essayez de répondre à ces questions :

1. Combien de fichiers CSS votre site charge-t-il ?
2. Combien de temps prend le chargement total de la page ?
3. Pouvez-vous trouver et modifier le titre principal de la page via l'Inspector ?
4. Pouvez-vous changer la couleur d'un paragraphe en utilisant la Console ?
5. Pouvez-vous voir le code source JavaScript d'un site (s'il en a) ?

## Pour Aller Plus Loin

- Consultez la [documentation MDN sur les Dev Tools](https://developer.mozilla.org/fr/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
- Regardez les [tutoriels Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- Explorez votre site et d'autres sites pour voir comment ils sont construits

## Notes Personnelles

_Écrivez ici ce que vous avez découvert ou ce que vous trouvez confus :_

```
[Vos observations ici]
```

---

**Amusez-vous à explorer!** 🚀

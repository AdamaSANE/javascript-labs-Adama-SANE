/**
 * Create these variables containing strings:
 *      1. One with your name.
 *      2. One with a greeting like "Good day to you".
 *      3. One with a friend's name.
 *      4. One with a family member's name.
 *      5. One with the number of today's date.
 *      6. One with the name of today's month.
 *      7. One with the number of today's year.
 *      8. One with your age.
 * 
 * Using the variables created, with both concatenation and interpolation use
 * console.log to output:
 *      1. A greeting to your friend
 *      2. A greeting to your family member
 *      3. A greeting to your friend stating today's date and month
 *      4. A sentence that says something along the lines of "In 20 years I will
 *         be XXX years old". For this, don't use any more variables. That is,
 *         make your script calculate the age with the variable you already have
 *         that contains the year.
 *
 * Do all of these with both concatenation and interpolation. Which do you
 * prefer? Its good to get practice with both because there are some situations
 * in which interpolation won't work, seeing as it's a relatively new method and
 * support for it is not everywhere.
 */


// Variables (toutes sous forme de chaînes de caractères)
let myName = "Adama"; // ton nom
let greeting = "Good day to you"; // salutation
let friendName = "Sam"; // nom d'un ami
let familyName = "Marie"; // nom d'un membre de la famille
let dateNumber = "10"; // numéro du jour (au format chaîne)
let monthName = "July"; // nom du mois
let yearString = "2026"; // année (chaîne)
let ageString = "30"; // âge (chaîne)

// 1) Salutation à ton ami
// - concaténation
console.log("Concat - Greeting friend:", greeting + ", " + friendName + "!");
// - interpolation
console.log("Template - Greeting friend:", `${greeting}, ${friendName}!`);

// 2) Salutation à un membre de la famille
// - concaténation
console.log("Concat - Greeting family:", greeting + ", " + familyName + "!");
// - interpolation
console.log("Template - Greeting family:", `${greeting}, ${familyName}!`);

// 3) Salutation à l'ami en indiquant la date et le mois
// - concaténation
console.log("Concat - Friend with date:", greeting + ", " + friendName + ". Today is " + dateNumber + " " + monthName + ".");
// - interpolation
console.log("Template - Friend with date:", `${greeting}, ${friendName}. Today is ${dateNumber} ${monthName}.`);

// 4) "In 20 years I will be XXX years old" - calcul fait sans créer de nouvelles variables
// - concaténation (on convertit ageString en nombre pour calculer)
console.log("Concat - In 20 years:", "In 20 years I will be " + (Number(ageString) + 20) + " years old.");
// - interpolation
console.log("Template - In 20 years:", `In 20 years I will be ${Number(ageString) + 20} years old.`);

// Remarque: `yearString` est disponible si tu veux l'utiliser ailleurs (ex: affichage complet de la date)


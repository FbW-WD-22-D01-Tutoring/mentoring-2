// PB Lang-10-Array

const euroCities = ["Paris","London","Prague","Valetta","Rom"];
// Zugriff auf Array immer mit [index], index startet immer bei 0
// 1.Aufgabe
const secondCity = euroCities[1];
// 2.Aufgabe
euroCities[0] = "Berlin"; // Zuweisung mit Datentyp
// 3.Aufgabe
euroCities.length; //Zugriff über Punktnotation ohne Funktionszugriff
// 4.Aufgabe
euroCities.pop(); //Funktionszugriff von JS
// 5.Aufgabe
euroCities.push("Budapest") //Funktionszugriff mit Parameter
// 6.Aufgabe
const asianCities = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];
// 7.Aufgabe
let worldCities = euroCities.concat(asianCities);
let worldCities2 = asianCities.concat(euroCities);
// 8. Aufgabe
worldCities.reverse();
// 9.Aufgabe
euroCities.splice(2,1);// Dokumentation: splice(Parameter1,?Parameter2); 
// 10. Aufgabe
let arrayCities = asianCities.slice(1,4);
// 11. Aufgabe
worldCities.splice(2,1,"Toronto");
worldCities[2] = "Toronto";
// 12. Aufgabe
worldCities.splice(1,0,"Washington");
// 13. Aufgabe
worldCities.join("+");
worldCities.join(", ");
// 1. Zusatz
let world = "Ein String";
world.split("").reverse().join("");
// 2. Zusatz
const familiy = ["Florian","Hahn","Maximilian","Mustermann"];
// 3. Zusatz
const parents = ["Yasmin","Adrian"];
// 4. Zusatz
const wholeFamily = familiy.concat(parents);
const wholeFamily2 = parents.concat(familiy);
// 5. Zusatz
wholeFamily.push("Frida");
// 6. Zusatz
wholeFamily.reverse();
// 7. Zusatz
const mother = wholeFamily[2]; 
// 8. Zusatz
wholeFamily[2] = "Lilly";
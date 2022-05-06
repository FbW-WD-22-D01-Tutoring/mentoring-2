//src=""  key:value
//text-align:center; key:value
var aepfel1 = 10;  // Global verfügbar
let aepfel2 = 10;  // Nicht Global, Wieder-beschreibbar   
const aepfel3 = 10; // Nicht Global, Konstante, nicht überschreibbar
//console.log(aepfel1) // Direkter Variablennamen Zugriff
// 3 Möglichkeiten: var, let, const
// Wie greifen wir auf die Variablen zu und wo sind diese verfügar
// Wir greifen auf den Variablennamen zu und bekommen immer den Wert
// Datenstruktur ist Number, Wert ist 10, Key = Value, Name der Variablen

// Datenstrukturen
// Number = Zahlenwert, Wert ohne Besonderheit (Integer, Float, BigInt)
    let zahl1 = 10;
    let totalPassangerOfCar = 5;  
// String = Zeichenkette, Wert mit "" '' ´´ `` Doppelt Einfach Fronttick Backtick
// Zugriff auf Tastatur für einfache Strukturen mit SHIFT
// Zugriff auf Tastatur für erweiterte Strukturen mit ALTGR
    let string = "Hello World";
    let carName = "Mercedes";
    let specialCharacter = '$%&§$@.?=';
    let somethingSpecialHere = ' ';
// Boolean = True und false , Wert ohne Besonderheiten
    let boolean = false;
    let isPersonAdmin = true; //Zustand
    // Booleansche Algebra: 
    // false + false = false
    // false + true || true + false = false
    // true + true = true
// Object = Key:Value, Besonderheit von Curly Bracket {}
    let object = {key1:"value", key2:true, key3:23};
    // Zugriff mit Punktnotation = object.key2
    let user = {
        firstName:"Florian",
        lastName:"Hahn", 
        age: 26, 
        isMentor:true
    };
    let userTimon = {} // Leeres Object
    //console.log(user)
// Symbol
// Array = Anordnung von Datenstrukturen, Besonderheit von []
    let array = ["string","florian",false,23];
    // Zugriff über Index = array[1] , Index beginnt bei 0
    let einkaufsliste = ["orange","bananen","milch"];
    let todoList = [ //Datenstruktur von todoList ist Array
        { //Object im Array mit dem Index 0
            aufgabe:"wischen",
            doneUntil: "15:30",
            person: "Sasa",
        },
        { //Object im Array mit dem Index 1
            aufgabe:"sauber machen",
            doneUntil: "17:00",
            person: "Sören",
        }
    ];
    // Zugriff auf Sören: todoList[1].person

// Null = Eine Wertezuweisung auf den konkreten Wert als Datentype NULL setzen
     //let florian = null;
     //console.log(florian) -> null
// Undefined = Die Wertzuweisung ist nicht erfolgt, wir wissen nicht, was sich hinter dem Variablennamen verbirgt
    // let florian;
    //console.log(florian) -> undefined
    //console.log(timon); -> timon is not defined
// https://i.stack.imgur.com/T9M2J.png

// IF - Bedingungen
// Wir vergleichen zwei Seiten miteinander
// Vergleichsoperatoren: && (und), || (oder (Pipe)), ! (Nicht (Negation)), < (kleiner(Grätsche)), > (größer(Grätsche)), <=(kleiner gleich), >=(größer gleich), == (Wertvergleich OHNE), === (Wertvergleich MIT Datentyp Überprüfung), !== (ungleich MIT Datentyp Überprüfung)
// = (Zuweisung von Werten) z.B. auf Variablen und Datentypen
// Aufbau einer IF - Bedingung
// if(Bedingung mit Vergleich){CodeBlock} else if(Bedingung mit Vergleich) {CodeBlock} else {CodeBlock}
// Hinweis: clg = console.log()
// if (zahl1 === zahl2){clg} else if (zahl1 !== zahl2){clg} else{clg}
// Alternativer Aufbau einer IF - Bedingung
// Ternärer Vergleich (Ternary)
// Bedingung mit Vergleich ? CodeBlock : CodeBlock
// zahl1===zahl2 ? clg : clg

// Bootstrap

// Sammlung von vordefinierten CSS Klassen
// Zugriff auf Bootstrap: Komplett-CSS, Grid-CSS, Reboot, CSS+JS
// 1. <link> -> verweist auf eine Bootstrap Datei auf dem Server
// 2. @import ->
// 3. Download der min.css -> Einbinden in das lokale Projekt über <link>
// Bootstrap hat 4 Kategorien der vordefinierten CSS Klassen:
// Layout, Content, Components, Utilities
// MIN Datei: Entfernt alle Leerzeichen, Zeilenumbrüche, Entereingaben
// Vor- und Nachteile der beiden Zugriffe:
// Nachteil Server: Server CSS Datei Verfügbarkeit, Versionen, PAYG, DSGVO 
// Vorteil Lokal: Eigner CSS Version als Datei, Anpassungen
// Responive Webdesign -> 5 Responsive Breakpoints
// Library/Framework -> Framework ruft unseren Code und ist im Framework enthalten, Wir rufen die Library als Erweiterung von unseren Code
// Prozess: SASS -> CSS -> MIN
// Preprocessor Sprachen für CSS: SASS, LESS
// SASS: Pre-Compiler für CSS mit Vorteilen wie z.B. Variablen, Nested
// CSS Textauszeichnungssprache
// Bootstrap basiert auf Flexboxen und hat nur den INTERNEN Namen Grid
// Das Grid System zur Übung der Klassennamen gerne mit Flexbox Froggy
// https://flexboxfroggy.com/#de
// Dynamische und Hartgecodeten Programmiercode


// @Todo 
// Schleifen
// ES5 und ES6 Funktionen 
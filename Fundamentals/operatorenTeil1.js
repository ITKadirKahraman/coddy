// Challenge
/* Arithmetische Operatoren

Schreibe einen Code, der zwei Variablen, 
a und b, mit den Werten 5.2 und 2.6 (jeweils) 
initialisiert. Initialisiere danach eine 
weitere Variable c, die das Ergebnis 
von a / b enthalten wird.
*/

let a = 5.2;
let b = 2.6;
let c = a / b;
console.log(`${c}`);

// Challenge
/* Arithmetische Operatoren

Schreibe Code, der zwei Variablen, x und y, 
mit den Werten 12 und 3 (jeweils) initialisiert.
Danach initialisiere eine weitere Variable z, 
die ihr Produkt enthält.
*/
let x = 12;
let y = 3;
let z = x * y;
console.log(`${z}`);

// Challenge
/* Modulo-Operator
Schreiben Sie einen Code, der drei Variablen, 
a, b und c, mit den Werten 9, 2.6 und 11 
(in dieser Reihenfolge) initialisiert.
Initialisieren Sie danach die folgenden Variablen:
d, die das Ergebnis von a modulo 2 enthalten wird 
e, die das Ergebnis von a modulo 3 enthalten wird
f, die das Ergebnis von c modulo 10 enthalten wird
Überprüfen Sie das Ergebnis und sehen Sie, wie sich 
verschiedene Dividenden und Divisoren auf das 
Ergebnis auswirken.
*/

let aa = 9;
let bb = 2.6;
let cc = 11;
let d = aa % 2;
let e = aa % 3;
let f = cc % 10;
console.log(`${d}, ${e}, ${f}`);

// Challenge
/* Modulo-Operator
Schreibe Code, der zwei Variablen, x und y, 
mit den Werten 15 und 4 (jeweils) initialisiert.
Danach initialisiere eine weitere Variable z, 
die das Ergebnis von x modulo y enthält.
*/
let xx = 15;
let yy = 4;
let zz = xx % yy;
console.log(`${zz}`);

// Challenge
/* Arithmetische Abkürzungen
Dir wird ein Code mit der Initialisierung von 
count gegeben. (Lösche diese Zeile nicht!)
Deine Aufgabe ist es, die folgenden Operationen 
in dieser Reihenfolge hinzuzufügen:
Addiere 4 zu count
Multipliziere count mit 2
Subtrahiere 1 von count
Verwende dazu die arithmetischen Abkürzungen!
*/
let count = 0;
count += 4;
count *= 2;
count -= 1;
console.log(count);

// Challenge
/* Arithmetische Abkürzungen
Dir wird ein Code mit der Initialisierung von 
balance gegeben. (Diese Zeile nicht löschen!)
Deine Aufgabe ist es, die folgenden Operationen 
in dieser Reihenfolge hinzuzufügen:
100 zu balance addieren
balance um 10% erhöhen
50 von balance subtrahieren
Verwende dazu die arithmetischen Abkürzungen!
*/
let balance = 0;
balance += 100;
balance *= 1.10;
balance -= 50;
console.log(balance);

// Challenge
/* Vergleichsoperatoren
Schreibe ein Skript, das 2 Variablen n1 und n2 
mit den Werten 8 und 9 (entsprechend) initialisiert.
Initialisiere danach eine weitere Variable n3, 
die speichert, ob n1 größer als n2 ist.
*/
let n1 = 8;
let n2 = 9;
let n3 = n1 > n2;
console.log(`n1 = ${n1},n2 = ${n2},n3 = ${n3}`);

// Challenge
/* Vergleichsoperatoren
Schreibe ein Skript, das eine Variable age mit 
dem Wert 18 initialisiert.
Danach initialisiere eine weitere Variable 
canVote, die speichert, ob die Person alt 
genug ist, um zu wählen (18 oder älter).
*/

let age = 18;
let canVote = age >= 18;
console.log(`age = ${age}, canVote = ${canVote}`);
// Given variables
let aaa = 10
let bbb = "10"
let ccc = true

let dd = a == b;
let ee = a === c;
let ff = b === c;
let gg = a === b;
console.log(`d = ${dd}`)
console.log(`e = ${ee}`)
console.log(`f = ${ff}`)
console.log(`g = ${gg}`)

// Challenge
/* Zusammenfassung – Einfache Mathematik
Dir wird ein Code gegeben, initialisiere die 
Variablen a und b, so dass c den Wert 24 enthält.
*/

let aaaa = 6;
let bbbb = 4;
let cccc= bbbb * aaaa;
console.log(`c = ${cccc}`);

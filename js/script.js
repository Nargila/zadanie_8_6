var a = 10;
	b = 4;
	value = (a * a) - (2 * a * b) - (b * b);

console.log("Wartość równania wynosi" +  value + "!");

if (value > 0) {
	console.log ("Wynik dodatni.");
} 
else if (value < 0) {
	console.log ("Wynik ujemny.");
}

if (value == 0) {
	document.write ("Wynik jest równy 0.")
}

else {
	document.write ("Wynik nie jest równy 0.")
}
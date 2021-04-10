/*
    13 /_4 __

    13 - 4 = 9      1
    9 - 4 = 5       1
    5 - 4 = 1       1
    1 - 4 = -3      0
*/

function divisionEntera(dividendo, divisor) {
    
    if (dividendo < divisor) {
        return 0;
    }
    
    return 1 + divisionEntera(dividendo - divisor, divisor);
}

console.log(divisionEntera(13, 4));

/* Ejercicio recursión
    Tenemos varios conejitos y cada conejito tiene dos grandes orejas 
    caídas. Queremos calcular el número total de orejas de todos los 
    conejitos de forma recursiva (sin bucles, ni multiplicaciones, 
    ni divisiones).

bunnyEars(0) → 0
bunnyEars(1) → 2
bunnyEars(2) → 4
*/

function bunnyEars(bunnies){
    return bunnies === 0 ? 0 : 2 + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(0));
console.log(bunnyEars(1));
console.log(bunnyEars(2));
console.log(bunnyEars(3));
console.log(bunnyEars(4));
for (let x = 1; x <= 10; x++) {
    let factorial = 1;
    for (let j = 1; j <= x; j++) {
        factorial *= j;
    }
    console.log(`El factorial de ${x} es: ${factorial}`);
}
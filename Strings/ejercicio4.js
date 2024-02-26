function reverseString(f)
{
    const reverse = f.split('').reverse().join('');
    return reverse;
                      

}
 
let frase = prompt("ingrese una frase");
console.log(reverseString(frase));
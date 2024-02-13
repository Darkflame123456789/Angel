let celsius = Number(prompt(" ingrese la temperatura de los grados celsius"));

function conversion() {
    let kelvinOFahrenheit = parseInt(prompt("seleccione una opcion:\n1. kelvin\n2. Fahrenheit"))
    
    if ( kelvinOFahrenheit == "1" ) {
    kelvinOFahrenheit = K = celsius + 273.15; 
    alert(`la temperatura ${kelvinOFahrenheit} en grados celsius covertida a kelvin es ${K}`);
  } else if (kelvinOFahrenheit == "2") {
    kelvinOFahrenheit = F =  (9*celsius)/5 + 32;
    alert(`la temperatura ${kelvinOFahrenheit} en grados celsius covertida a Fahrenheit es ${F}`);
  } else {
    alert("ingresa valores validos");
  }
  
}conversion()









function Numero(n) {
    
    if (n === 1) {
      console.log(n);
    } else {
      console.log(n);
      Numero(n - 1);
    }
  }
  
  Numero(10);
var n = 10; 
var a = 0;
var b = 1;

console.log(a);

for (var i = 2; i < n; i++) {
  var temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}
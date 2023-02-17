/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var c=0;
  var sNum=String(num); var aSNum=sNum.split(''); 
  var aNum=aSNum.map((num)=>{return Number(num);});
  var j=(aNum.length-1);
  for(let i = 0; i < aNum.length; i++) {
    while(i!=aNum.length) {
      if(aNum[i]===aNum[j]){c++;}
      break; } 
      j--; }
if(c===aNum.length){return true;}else{return false;}
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico
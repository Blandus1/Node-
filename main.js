function functioni(){
return Math.floor(Math.random() * 100) + 1;
} 

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


module.exports = {
    functioni,
    celsiusToFahrenheit,
}
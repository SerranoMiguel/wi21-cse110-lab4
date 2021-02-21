let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}
 

for (key in statistics) {
  if(statistics[key] %2 != 0 || key.substring(0,1) === "r"  ){
    console.log(statistics[key]);
  }
}

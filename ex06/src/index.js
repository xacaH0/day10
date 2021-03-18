var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
lion.roar = "roar-roar"
function myFunction(propName, propValue) {
  lion[propName] = propValue;
  
  
  return lion;
}
console.log(myFunction("roar", "roar-roar"));

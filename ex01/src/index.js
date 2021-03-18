var myPet = {
  species: "shepherd",
  name: "Lenny",
  legs: 4,
  friends: ["exd", "Dumbo"],
};
function myFunction(myObj) {
  return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };

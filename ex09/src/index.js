function myFunction(myObj, checkProp) {
    if (myObj[checkProp])
        return myObj[checkProp]
    return "Not Found"
}

console.log(
    myFunction({
        "title": "Titanic",
        "song": "My Heart Will Go On",
        "genre": "drama"
    }, "title")
)

module.exports = myFunction;
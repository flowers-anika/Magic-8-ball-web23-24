function shake() {
   // alert("signs point to yes")
   var myFortune = getFortune()
   displayFortune(myFortune)
}

function displayFortune (fortune) {
    //alert(fortune)
    document.getElementById("fortune-display").innerHTML = fortune
}

function getFortune() {
    var listOfFortunes = getListOfFortunes ()
    var randomNumber = getRandomNumberLessThan(listOfFortunes.length)

    return listOfFortunes[randomNumber]
}

function getListOfFortunes() {
    return ["yes","no","maybe","probably","probably not","kinda","ask again later"]
}

function getRandomNumberLessThan(max) {
    var randomDecimal = (Math.random() * max)
    return Math.floor(randomDecimal)
}
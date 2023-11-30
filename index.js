/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let userInput = document.getElementById("user-input")
let resultLength = document.getElementById("length")
let resultVolume = document.getElementById("volume")
let resultMass = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    resultLength.innerHTML = `${getLength(userInput)}`
    resultVolume.innerHTML = `${getVolume(userInput)}`
    resultMass.innerHTML = `${getMass(userInput)}`
})

function getLength(measure) {
    return `${measure.value} mètres = ${(Number(measure.value) * 3.281).toFixed(3)} pieds | ${measure.value} pieds = ${(Number(measure.value) / 3.281).toFixed(3)} mètres`
}

function getVolume(measure) {
    return `${measure.value} litres = ${(Number(measure.value) * 0.264).toFixed(3)} gallons | ${measure.value} gallons = ${(Number(measure.value) / 0.264).toFixed(3)} litres`
}

function getMass(measure) {
    return `${measure.value} kilos = ${(Number(measure.value) * 2.204).toFixed(3)} livres | ${measure.value} livres = ${(Number(measure.value) / 2.204).toFixed(3)} kilos`
}

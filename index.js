// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"]

function findMatching(drivers, attribute) {
    return drivers.filter(function(driver) { return driver.toLowerCase() === attribute.toLowerCase() })
}

function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function(driver) {
        return driver.charAt(0) === attribute.charAt(0)
    })
} //recall :charAt(0) --- PICK OUT A CHARACTER IN A STRING


function matchName(drivers, argument) {
    return drivers.filter(function(driver) {
        return driver.name === argument


    })
}
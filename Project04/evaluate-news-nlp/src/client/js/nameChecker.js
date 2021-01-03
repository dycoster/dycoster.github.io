function testRegExp(inputText) {
    if (inputText.test(-a-zA-Z0-9) == "true")
    return inputText;
    else {
        alert ('please enter valid text')
    }
}

function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
export { testRegExp }
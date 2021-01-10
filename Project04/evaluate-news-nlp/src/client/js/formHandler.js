function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    console.log("::: Form Submitted :::")

    // check the input is valid
    const regex = new RegExp('^[a-zA-Z\\s]+$');
    if(regex.test(formText)){
        document.getElementById('formResults').innerHTML = 'The results from the analyses:';

    // post userInput serverside API
    postData('http://localhost:8081/add', {name: formText})

    // receive response from API to updateUI
    .then(function(res) {
        document.getElementById('sentiment').innerHTML = `Cloudmeaning considers this text to be: ${res.score_tag} & ${res.subjectivity.toLowerCase()}`;
        document.getElementById('confidence').innerHTML = `Cloudmeaning is ${res.confidence}% confident in this analyses.`;
    });
    } else {
        document.getElementById('formResults').innerHTML = 'Invalid input, please try again';
    }
}

const postData = async (url = '', data = {})=> {
    const response = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }


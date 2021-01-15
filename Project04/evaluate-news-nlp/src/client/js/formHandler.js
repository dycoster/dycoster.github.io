function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    // from https://regexr.com/
    const regex = new RegExp(/[A-Z.0-9]/gim);

    // inspiration from https://knowledge.udacity.com/questions/386759
    if(regex.test(formText)){
            document.getElementById('formResults').innerHTML = 'The results from the analyses:';

            console.log("::: Form Submitted :::");

        // post userInput to serverside, these threads has been helpfull to me https://knowledge.udacity.com/questions/314461 and https://knowledge.udacity.com/questions/127378
            fetch ('http://localhost:8081/add', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({formText}),
            })

            .then (res => res.json())

            // receive response from API to updateUI
            .then(function(res) {
                document.getElementById('subjectivity').innerHTML = `Cloudmeaning considers this text to be: ${res.subjectivity.toLowerCase()}`;
                document.getElementById('confidence').innerHTML = `Cloudmeaning is ${res.confidence}% confident in this analyses.`;
            });
    } else {
        document.getElementById('formResults').innerHTML = 'Invalid input, please try again';
    }
}


export { handleSubmit }


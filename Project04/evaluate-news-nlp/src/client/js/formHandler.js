function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    postData('http://localhost:8081/add', {name: formText})

    .then(function(res) {
        document.getElementById('sentiment').innerHTML = `Sentiment: ${res.score_tag.toLowerCase()}`;
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement.toLowerCase()}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity.toLowerCase()}`;
        document.getElementById('confidence').innerHTML = `Accuracy: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony.toLowerCase()}`;
    })
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


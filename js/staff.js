var endpoint = 'https://api.terminalsaturn.com';




function newChat() {
    const cChat = document.getElementById("chatstorage").getElementsByClassName('messagecard')[0].cloneNode(true)

    document.getElementById("chat").appendChild(cChat)
}

function newTicket() {

}

function newChannel() {

}

for (let i = 0; i < 2; i++){
    newChat()
}

fetch(`${endpoint}/newTicket`, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        data: "Hello"
    })
}).then(response => {
    if (!response.ok) {
        // r4('Server error: ' + response.status)
    }
    return response.json();
})
    .then(data => {
       // alert(data.value)

    })
    .catch(error => {
       // alert(error)
    });
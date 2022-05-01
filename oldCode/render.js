document.getElementById('send').addEventListener('click', send)
document.getElementById('quit').addEventListener("click", quit)

function send() {
    const value = document.querySelector("#input").value
    window.api.send("msg", value)
}

function quit() {
    window.api.send("quit")
}

window.api.receive('back', (e, a) => {
    document.getElementById('text').innerText += e
})

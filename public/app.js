function onLoad() {
    const app = document.getElementById("app")
    app.innerHTML = "Loading..."
    fetch("/api")
        .then(res => res.json())
        .then(json => {
            app.innerHTML = json.message
        })
        .catch(e => {
            app.innerHTML = "Failed to retrieve data from /api"
            console.log(e.message)
        })
}

document.addEventListener("DOMContentLoaded", onLoad)

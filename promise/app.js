let outputDiv = document.querySelector('.filter')
function getData(url, errorMessage) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`${errorMessage} ${response.status}`);
        }
        return response.json();
    })
}

getData("https://pokeapi.co/api/v2/pokemon/ditto", "Couln't get data")
    .then(response => {
        return getData(response.abilities[0].ability.url, "Couln't get product");
    })
    .then(data => {
        outputDiv.innerHTML = data.effect_entries[0].effect;
    })
    .catch(error => {
        outputDiv.innerHTML = error.message;
    })

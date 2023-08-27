const pokeXml = new XMLHttpRequest();
const resultXml = new XMLHttpRequest();

pokeXml.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
pokeXml.send();

pokeXml.addEventListener('load', function() {
    const resultJSON = JSON.parse(this.responseText);
    const resultUrl = resultJSON.abilities[0].ability.url;

    resultXml.open('GET', resultUrl);
    resultXml.send();

    resultXml.addEventListener('load', function () {
        const res = JSON.parse(this.responseText);
        console.log(res.effect_entries[0].effect);
    });
})
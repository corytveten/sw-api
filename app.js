const APP = {
    urls: {
        base: 'https: //swapi.dev/api/',
        people: 'people/',
        planets: 'planets/',
        films: 'films/',
        species: 'species/',
        vehicles: 'vehicles/',
        starships: 'starships/',
    },
    init: () => {
        APP.addListeners();
        APP.buildNav();
    },
    addListeners: () => {
        let nav = document.getElementById('nav');
        nav.addEventListener('click', APP.getData);
        nav.addEventListener('click', APP.getData);
    },
    
}
const APP = {
    urls: {
        base: 'https://swapi.dev/api/',
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
    buildNav: () => {
        let df = new DocumentFragment();
        for (let nm in APP.urls) {
            if (nm != 'base') {
                let link = document.createElement('a');
                link.href = `${APP.urls.base}${APP.urls[nm]}`;
                link.textContent = nm;
                link.setAttribute('data-link', `${APP.urls.base}${APP.urls[nm]}`)
                df.append(link);
            }
        }
        document.getElementById('nav').append(df);
    },
    getData: (ev) => {
        if (ev) ev.preventDefault();
        //show overlay / loader
        document.querySelector('.overlay').classList.add('active');
        //get the url
        let link = ev.target;
        let url = link.getAttribute('data-link');
        //fetch the data
        fetch(url)
          .then((resp) => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
          })
          .then(APP.buildList)
          .catch((err) => {
            console.error(err);
            document.querySelector('.overlay').classList.remove('active');
          });
        //call the build function
      },
    buildList: (data) => {
        let m = document.getElementById('main');
        console.log(data);

        let footer = document.getElementById('footer');
        footer.innerHTML = '';

        if (data.previous) {

        }
        if (data.next) {

        }
    }

}

document.addEventListener('DOMContentLoaded', APP.init)
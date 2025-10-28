//assegno la mia API key ad una variabile
const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/'
//variabile con markup
const markupString = `
     <div class="col-4">
        <div class="card rounded-0 p-3 position-relative">
            <img src="./assets/img/spongebob600x600.jpg" alt="">
            <img class="pin" src="./assets/img/pin.svg" alt="">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nulla.</p>
                <h2>title</h4>
            </div>
        </div>
    </div>`
//dichiaro una variabile per l'elemento html
const rowEl = document.querySelector('.row')
//console.log(rowEl);
//richiamo gli elementi HTML dell'overlay
const overlayEl = document.querySelector('.overlay');
const overlayImgEl = document.querySelector('.overlay-img');
const closeBtnEl = document.querySelector('.close-btn');
//chiusura overlay
closeBtnEl.addEventListener('click', () => {
    overlayEl.classList.add('d-none');
    document.body.classList.remove('no-scroll')
});
//utilizzo la variabile apiUrl per effettuare una chiamata ajax
axios.get(apiUrl)
    .then(response => {
        //console.log(response.data);
        //il dato restituito dalla chiamata lo assegno a sua volta ad una variabile
        const arrayObj = response.data
        console.log(arrayObj);
        //eseguo un ciclo forEach o for semplice per iterare nel dato restituito dalla API key
        arrayObj.forEach(element => {
            //console.log(element);
            //destrutturazione
            const { id, title, date, url } = element
            //assegno il valore delle proprietà degli oggetti(ora divenute variabili) al markupup
            const markupString = `
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="card rounded-0 p-3 position-relative">
                        <img class="card-img-top rounded-0 polaroid" src="${url}" alt="">
                        <img class="pin" src="./assets/img/pin.svg" alt="">
                        <div class="card-body p-0">
                            <p class="pt-1 pb-1 mb-0">${date}</p>
                            <h2 class="mb-0">${title}</h2>
                        </div>
                    </div>
                </div>`
            //inserisco la markupString all'interno dell'elemento html
            rowEl.innerHTML += markupString
        });
        //variabile per richiamare tutte le immagini generate dopo la chiamata AJAX e
        //la generazione dinamica del markup
        //la utilizzo in un ciclo forEach per far si che l'evento applicato venga ripetuto per ogni immagine
        const allImageEl = document.querySelectorAll('.polaroid')
        allImageEl.forEach(img => {
            img.addEventListener('click', () => {
                overlayEl.classList.remove('d-none')
                document.body.classList.add('no-scroll')
                //aggiorno immagine dentro overlay
                overlayImgEl.src = img.src
            })
        })
    })
    .catch(error => {
        console.error('Errore nella chiamata API:', error);
    });
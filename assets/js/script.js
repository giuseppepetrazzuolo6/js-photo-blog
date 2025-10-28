/*
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API,
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*/

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
                        <img class="card-img-top rounded-0" src="${url}" alt="">
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
    })
    .catch(error => {
        console.error('Errore nella chiamata API:', error);
    });
/*
Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata,
disponiamo un’immagine qualunque ed un button di chiusura.

Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata,
dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
*/

//richiamo gli elementi HTML dell'overlay
const overlayEl = document.querySelector('.overlay');
const overlayImgEl = document.querySelector('.overlay-img');
const closeBtnEl = document.querySelector('.close-btn');
//aggiungo un evento che rimuove la classe d-none all'overlay cliccando sulle immagini
//assegno al tag img dell'overlay il valore dell'immagine cliccata (src)
//aggiungo un evento al bottone che aggiunge nuovamente la classe d-none all'overlay

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
            const { id, title, date, url } = element
        });

    })
    .catch(error => {
        console.error('Errore nella chiamata API:', error);
    });
//sapendo che il dato restituito dalla chiamata è un array di oggetti,
//assegno il valore delle proprietà degli oggetti agli elementi html
//incrocio le dita e se non funziona mi chiudo in camera a piangere :'C

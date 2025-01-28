  //MILESTONE 1
// Richiamo variabile per output
const outputEl = document.querySelector('.cardContainer');

// Richiamo variabili per gestire overlay
const overlayContainer = document.querySelector('.overlay-container');
const closeOverlay = document.querySelector('.closeButton');
const overlayImg= document.querySelector ('.overlayImg');


    // Estrapolazione array oggetti tramite API 

    axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then((response) => {

      // Creo array con i dati da utilizzare
    let arrayObj = response.data;

      // Stampo in console l'array con gli oggetti
      console.table(arrayObj); 

    // Creo un ciclo per tutta la lunghezza dell'array

        for (let i = 0; i < arrayObj.length; i++) {
            const cardInfo = arrayObj[i];

            // stampo in console ogni oggetto iterato
            console.log(cardInfo);

            // destrutturazione oggetto cardInfo
            const  {title, date, url} = cardInfo;
            
            // inserisco nell'output il codice html con le proprietà dell'oggetto destrutturato

            outputEl.innerHTML += `
              <div class="card">
                  <div class="imgContainer">
                  <img class="redPin" src="./img/pin.svg" alt="red-pin">
                  <img class="holidayImg" src="${url}" alt="">
                  
                  </div>
                  <div class="photoInfo">
                  <span class="dataInfo" >${date}</span>
                  <p class= "photoText"> ${title.toUpperCase()} </p>
                  </div>
              </div>
            `;
            
        }


  //MILESTONE 2 : 
  // Mostro l'overlay al click sulla foto
    
   outputEl.addEventListener('click', () => {

    // Rimuovo le classi hidden quando clicco sulla foto

    overlayContainer.classList.remove('hidden');
    overlayImg.classList.remove('hidden'); 
    closeOverlay.classList.remove('hidden');

  });

// Se clicco sul bottone nascondo l'overlay, torno allo stato precedente aggiundendo le classi hidden

closeOverlay.addEventListener('click', () => {

 // Aggiungo la classe hidden al container dell'overlay quando clicco sul bottone

 overlayContainer.classList.add('hidden');

});


// Mostro all’interno dell’overlay la foto specifica cliccata (MILESTONE 3)
   //  creo costante che richiami tutte le foto

    const cardPhotos = document.querySelectorAll('.holidayImg');

 //Utilizzo un ciclo per iterare tutte le foto

     for (let i = 0; i < cardPhotos.length; i++) {

      // Aggiungo l'evento click ad ogni foto

       cardPhotos[i].addEventListener('click', () => {
       overlayImg.src = cardPhotos[i].src;
        });
     }

   })
     
// In caso di errore stampo in console l'errore

    .catch(error => {
      console.error(error);
    });


  






// richiamo variabile per output
const outputEl = document.querySelector('.cardContainer');

    // estrapolazione array oggetti tramite API 

    axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then((response) => {
    let arrayObj = response.data;

      // stampo in console l'array con gli oggetti
      console.table(arrayObj); 

    // creo un ciclo per tutta la lunghezza dell'array
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
      
    })
     
    // in caso di errore stampo in console l'errore
    
    .catch(error => {
      console.error(error);
    });
    
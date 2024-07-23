const myForm = document.getElementsByTagName('form')[0];
const myArray = [];

// Funzione per gestire l'input e aggiornare la lista
const myName = function(e) {
    e.preventDefault(); // Previeni l'invio del modulo

    const inputValue = document.getElementById('input').value;
    const lista = document.getElementById('name-list');

    // Controllo se l'input non è vuoto
    if (inputValue) {
        myArray.push(inputValue);

        // Creo un nuovo elemento della lista e lo aggiungo alla lista
        const newLi = document.createElement('li');
        newLi.classList.add('list-group-item');
        newLi.innerText = inputValue;
        lista.appendChild(newLi);

        // Salvo l'array aggiornato nella local storage
        localStorage.setItem('nomi', JSON.stringify(myArray));

        // Svuoto il campo input
        document.getElementById('input').value = '';
    }
};

// Funzione per caricare i nomi salvati da local storage
const loadSavedNames = function() {
    const savedNames = localStorage.getItem('nomi');
    if (savedNames) {
        const arrayName = JSON.parse(savedNames);
        createListFromArray(arrayName);
        // Aggiorna l'array locale
        myArray.push(...arrayName);
    }
};

// Funzione per creare la lista da un array
const createListFromArray = function(array) {
    const lista = document.getElementById('name-list');
    lista.innerHTML = ''; // Svuota la lista esistente
    array.forEach(name => {
        const newLi = document.createElement('li');
        newLi.classList.add('list-group-item');
        newLi.innerText = name;
        lista.appendChild(newLi);
    });
};

// Funzione per rimuovere l'ultimo elemento
const removeLastName = function() {
    if (myArray.length > 0) {
        // Rimuovi l'ultimo elemento dall'array
        myArray.pop();

        // Aggiorna il local storage
        localStorage.setItem('nomi', JSON.stringify(myArray));

        // Ricrea la lista nel DOM
        createListFromArray(myArray);
    }
};

// Aggiungi gli event listener
myForm.addEventListener('submit', myName);
document.getElementById('remove').addEventListener('click', removeLastName);

// Carica i nomi salvati all'avvio
loadSavedNames();

//ESERCIZIO CONTATORE

function updateCounter() {
    let elapsedTime = parseInt(sessionStorage.getItem('elapsedTime')) || 0;
    elapsedTime++;
    sessionStorage.setItem('elapsedTime', elapsedTime);
    document.getElementById('counter').innerText = elapsedTime + " secondi";
}

// Inizializza il contatore al caricamento della pagina
window.onload = function() {
    // Verifica se esiste un valore nel sessionStorage
    let savedTime = sessionStorage.getItem('elapsedTime');
    if (savedTime) {
        document.getElementById('counter').innerText = savedTime + " secondi";
    }
    // Avvia l'aggiornamento del contatore ogni secondo
    setInterval(updateCounter, 1000);
}

// Funzione per resettare il contatore
document.getElementById('resetButton').onclick = function() {
    sessionStorage.removeItem('elapsedTime');
    document.getElementById('counter').innerText = "0 secondi";
}
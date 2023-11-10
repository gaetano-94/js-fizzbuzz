'use strict';

//1)Scrivi un programma che stampi in console i numeri da 1 a 100

//2)ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//3)BONUS 1)Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

//4)BONUS 2)Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

const numeroContenitore = document.querySelector('.box');

for (let i = 1; i < 100; i++) {
  const divContenitore = document.createElement('div');
  let value = 1;

  if (i % 15 === 0) {
    value = 'fizzbuzz';
  } else if (i % 3 === 0) {
    value = 'fizz';
  } else if (i % 5 === 0) {
    value = 'buzz';
  }

  if (typeof value !== 'number') {
    divContenitore.classList.add(value);
  }

  divContenitore.append(value);
  numeroContenitore.appendChild(divContenitore);
}

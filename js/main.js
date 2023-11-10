'use strict';

//1)Scrivi un programma che stampi in console i numeri da 1 a 100

//2)ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//3)BONUS 1)Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

const numeroContenitore = document.querySelector('.container');

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

  divContenitore.append(value);
  numeroContenitore.appendChild(divContenitore);
}

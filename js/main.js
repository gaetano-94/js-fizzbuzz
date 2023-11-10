'use strict';

//1)Scrivi un programma che stampi in console i numeri da 1 a 100

//2)ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//3)BONUS 1)Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

let numero100 = 100;

const numeroContenitore = document.querySelector('.container-number');

for (let i = 1; i < numero100; i++) {
  const divContenitore = document.createElement('div');

  if (i % 15 === 0) {
    divContenitore.append('fizzbuzz');
  } else if (i % 3 === 0) {
    divContenitore.append('fizz');
  } else if (i % 5 === 0) {
    divContenitore.append('buzz');
  } else {
    divContenitore.append(i);
  }
}

'use strict';

function average(array) {
          let sum = 0;
          for(let item of array) {
               sum += item;      
          }
          return Math.ceil(sum/array.length)
}

function changeToLetter(num) {
          return String.fromCharCode(96 + num);
}

function average_to_letter(collection) {
          
          return changeToLetter(average(collection));
          
}

module.exports = average_to_letter;


'use strict';

function changeToLetter(num) {
          return String.fromCharCode(96 + num);
}

function even_to_letter(collection) {
          let result = [];
          for(let item of collection) {
                    if(item%2 === 0) {
                              result.push(changeToLetter(item));
                    }
          }
          
          return result;
}

module.exports = even_to_letter;

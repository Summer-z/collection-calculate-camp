'use strict';

function changeToWord(num) {
          return String.fromCharCode(96 + num);
} 

function number_map_to_word(collection) {
          let result = [];
          for(let item of collection) {
                    result.push(changeToWord(item));
          }
          
          return result;
}

module.exports = number_map_to_word;

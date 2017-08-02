'use strict';

function changeToWord(num) {
          if(num <= 26) {
                    return String.fromCharCode(96 + num);
          } else {
                    let letterOne = String.fromCharCode(96 + parseInt((num-1)/26));
                    let letterTwo = String.fromCharCode(96 + num%26);
                    return letterOne + letterTwo;
          }
}

function number_map_to_word_over_26(collection) {
          let result = [];
          for(let item of collection) {
                    result.push(changeToWord(item));
          }
          
          return result;
}

module.exports = number_map_to_word_over_26;

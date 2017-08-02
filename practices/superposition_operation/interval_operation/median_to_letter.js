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

function median_to_letter(collection) {
          let middle;
          let len = collection.length;
          let item = parseInt(len/2);
          if(len%2 !== 0) {
                 middle = collection[item];
          } else {
                 middle = Math.ceil((collection[item] + collection[item-1])/2);   
          }
          
          return changeToWord(middle);
}

module.exports = median_to_letter;

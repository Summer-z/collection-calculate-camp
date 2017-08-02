'use strict';

function choose_multiples_of_three(collection) {
          let triArr = [];
          for (let item of collection) {
                    if (item%3 === 0) {
                              triArr.push(item);
                    }
          }
          
          return triArr;
          
}

module.exports = choose_multiples_of_three;

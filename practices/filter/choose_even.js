'use strict';

function choose_even(collection) {
          let evenArr = [];
          for (let item of collection) {
                    if (item%2 === 0) {
                              evenArr.push(item);
                    }
          }
          
          return evenArr;
}

module.exports = choose_even;

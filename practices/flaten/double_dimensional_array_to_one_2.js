'use strict';

function change(arr) {
          let Arr = [];
          for(let item of arr) {
                    if(Arr.indexOf(item) === -1) {
                              Arr.push(item);
                    }
          }
          
          return Arr;
}

function double_to_one(collection) {
          let result = [];
          for(let item of collection) {
                    if(Array.isArray(item)) {
                              result = result.concat(item);
                    } else {
                              result.push(item);
                    }
          }
          
          return change(result);
}

module.exports = double_to_one;

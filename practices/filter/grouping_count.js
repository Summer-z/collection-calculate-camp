'use strict';

function find(input, obj) {
          
          for (let item in obj) {
                    if (item == input) {
                              return true;
                    }
          }          
          
          return false;
}

function grouping_count(collection) {
          let count = 1;
          let obj = {};
          for (let item of collection) {
                   let key = obj[item.toString()];
                   if (find(key, obj)) {
                             count++;
                   }
                   obj[item.toString()] = count;
          }
          
          return obj;
}

module.exports = grouping_count;

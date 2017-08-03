'use strict';


function ifExist(obj, element) {
          
        for(let item in obj) {               
                  if(item == element) {
                            return true;
                  } 
        }
        return false;
}

function grouping_count(collection) {
          let count = 1;
          let obj = {};
          for(let item of collection) {
                    if(ifExist(obj, item)) {
                            obj[item]++;   
                    } else {
                              obj[item]= count;
                    }
          }
          
          return obj;
}

module.exports = grouping_count;

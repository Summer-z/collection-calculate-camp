'use strict';

function choose_no_repeat_number(collection) {
          let arrNoRep = [];
          
          for (let item of collection) {
                    if (arrNoRep.indexOf(item) === -1) {
                          arrNoRep.push(item);      
                    }
          }
          
          return arrNoRep;
}

module.exports = choose_no_repeat_number;

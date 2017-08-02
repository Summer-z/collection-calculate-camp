'use strict';


function get_integer_interval_2(number_a, number_b) {
          let arrNum = [];
          if( number_a <= number_b ) {
                    
                 for( let i=number_a; i<=number_b; i++ ) {
                          if (i%2 === 0) {
                                    arrNum.push(i);
                          }
                 }   
                    
          } else {
                    
                 for( let i=number_a; i>=number_b; i-- ) {
                          if (i%2 === 0) {
                                    arrNum.push(i);
                          }
                 }  
                    
          }
          
          return arrNum;
          
}

module.exports = get_integer_interval_2;

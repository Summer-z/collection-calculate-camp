'use strict';

function fun(item) {     
          let numVal = parseInt((item-1)/26);
          let numRe = parseInt((item)%26);
          if (numRe === 0) {
                              numRe = 26;
          }
                    
          if (numVal === 0) {                           
                     return String.fromCharCode(96 + numRe);
          } else  {     
                    return (String.fromCharCode(96 + numVal) + String.fromCharCode(96 + numRe));
          }   
        
}

function get_letter_interval_2(number_a, number_b) {
          let arrStr = [];
          if (number_a <= number_b) {
                    
                    for (let i=number_a; i<=number_b; i++) {
                                 arrStr.push(fun(i));              
                    }       
                    
          } else {
                    
                 for (let i=number_a; i>=number_b; i--) {
                              arrStr.push(fun(i));
                    }   
                    
          }
          
          return arrStr;
          
}

module.exports = get_letter_interval_2;


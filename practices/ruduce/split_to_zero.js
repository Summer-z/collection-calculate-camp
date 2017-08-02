'use strict';

function spilt_to_zero(number, interval) {
        let result = [number];
        let count = Math.ceil(number/interval);
        for(count; count>0; count--) {
            number = Number(parseFloat(number - interval).toFixed(1));
            result.push(number);
        }
        
        return result;
        
}

module.exports = spilt_to_zero;


function findKey(array, element) {
          for(let item of array) {
                    if(item.key === element) {
                              return item;
                    }
          } 
          return false;
}

function ifSplit(element) {
          let array = element.split('-');
          if(array.length > 1) {
                    return array;
          }
          return false;
}

function count_same_elements(collection) {
          let result = [];
          let count = 1;
          for(let item of collection) {
                    let key = item;
                    if(ifSplit(item))  {
                              key = ifSplit(item)[0];
                              count = parseInt(ifSplit(item)[1]);    
                    } 
                    if(!findKey(result, key))   {
                              result.push({key, count});
                    } else {
                              findKey(result, key).count++;
                    }
          }
          
          return result;
}

module.exports = count_same_elements;


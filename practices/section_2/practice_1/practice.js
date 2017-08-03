
function findKey(array, element) {
          for(let item of array) {
                    if(item.key === element) {
                              return item;
                    }
          } 
          return false;
}

function count_same_elements(collection) {
          let result = [];
          let count = 1;
          for(let item of collection) {
                 if(!findKey(result, item))   {
                          result.push({key: item, count});
                 } else {
                        findKey(result, item).count++;
                 }
          }
          return result;
}

module.exports = count_same_elements;

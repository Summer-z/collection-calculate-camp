
function ifSameEle(array, element) {
          for(let item of array) {
                    if(item === element) {
                              return true;
                    }
          }
          return false;
}

function changeCount(number) {
          if(number < 3) {
                    number--;
          } else {
                    let a = parseInt(number/3, 10);
                    for(let i=0; i<a; i++) {
                              number--;
                    }     
          }
          
          return number;
}

function create_updated_collection(collection_a, object_b) {
          for(let item of collection_a) {
                    if(ifSameEle(object_b.value, item.key)) {
                              item.count = changeCount(item.count);
                    }
          }
          
          return collection_a;
}

module.exports = create_updated_collection;

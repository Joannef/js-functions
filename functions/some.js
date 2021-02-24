/* 
The some() method executes the callback function once for each element present in the array until it finds the 
 one where callback returns a truthy value (a value that becomes true when converted to a Boolean). 
 If such an element is found, some() immediately returns true. Otherwise, some() returns false. 
 callback is invoked only for indexes of the array with assigned values. It is not invoked for indexes 
 which have been deleted or which have never been assigned values.

 callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

 some() return true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
 */

Array.prototype.mySome = function(callback){
    var anyFunc = false;
    for(let i=0; i < this.length; i++) {
        // if callback function is true, return true
        if(callback(this[i], i, this) == true) {
            anyFunc = true;
        }
        else {
            anyFunc = false;    // else false
        }
    }
    return anyFunc  //return bool
}

// TESTING
const evenArray = [1, 2, 3, 4, 5];
const oddArray = [1, 3, 5];
const baseArray = [];


// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log("Even Array: " + evenArray.some(even));
// expected output: true
console.log("Odd Array: " + oddArray.some(even));
// expected output: false
console.log("Base Array: " + baseArray.some(even));
// expected output: false
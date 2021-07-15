/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
    for (element of array) {
      element = appendString + element;
    }
  
    return array;
}

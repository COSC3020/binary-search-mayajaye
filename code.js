//Maya Conway
//code.js
//Binary Search
//2-9-25

function binarySearch(list,element) {
    var start = 0;
    var end = list.length -1;
    var ele = 0;

    while (start <= end) {              //while the list has more than one element
        const mid = Math.floor(end / 2);//store the approximate middle of the array
        if (list[mid] == element) {     //if the middle element is == to element
            ele = mid;                  //store the index, but check for the first occurrence
            var found = true;
            end = mid-1;                //narrow down the list to the left & search again
        }
        else if (list[mid] < element) { //if the middle element is < element
            start = mid + 1;            //narrow down the list to the right &search again
        }
        else {
            end = mid - 1;              //otherwise mid is < and not equal to element
        }                               //narrow down the list to the left & search again
    }

    if (!found) return -1;              //not found, return -1
	else return ele;                    //found is true, return index of element
}
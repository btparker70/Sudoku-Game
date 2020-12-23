// Replaces single missing number from array
function replaceSingleMissingNumber(array) {
    // Checks which index has null
    var missingIndex = jQuery.inArray(null, array);

    // Find missing number
    var missingNum = findMissingNumber(array);

    // Add missing number to array
    array.splice(missingIndex, 1, missingNum);


}

// Counts # of null in array 
// returns true if only 1 null
function oneNullCounter(array) {
    var counter = 0;
    for (m = 0; m < array.length; m++) {
        if (array[m] === null) {
            counter++;
        }
    }
    // If there's only one null
    if (counter === 1) {
        return true
    }
    return false;
}

// Find missing number
// Returns missing number
function findMissingNumber(array) {
    // Copies array for manipulation
    var copyArray = [...array];
    // Sorts array
    copyArray.sort();
    console.log(copyArray);
    // Returns which number is missing
    if (copyArray[0] !== 1) {
        return 1;
    } else {
        for (k = 0; k < copyArray.length; k++) {
            if (copyArray[k] + 1 !== copyArray[k + 1]) {
                console.log(copyArray[k] + "go")
                console.log(copyArray[k] + 1)
                return copyArray[k] + 1;
            }
        }
    }
}

// Makes an array with a game row
// Returns an array
function rowArrayMaker(rowNumber) {
    var array = [];
    for (i = 1; i < 10; i++) {
        var letter = String.fromCharCode(65 + i - 1);
        var num = $(`#row-${rowNumber}`).children(`#block_${letter}${rowNumber}`).text();

        if (num == '') {
            array.push(null);
        } else {
            array.push(parseInt(num));
        }
    }
    return array;
}

// Makes an array with a game column
// Returns an array
function columnArrayMaker(colLetter) {
    var array = [];
    for (i = 1; i < 10; i++) {
        var num = $(`#block_${colLetter}${i}`).text();

        if (num == '') {
            array.push(null);
        } else {
            array.push(parseInt(num));
        }
    }
    return array;
}

function replaceRows() {
    for (n = 1; n < 10; n++) {

        var rowNumber = n;
        var array = rowArrayMaker(rowNumber);
        var nullChceck = oneNullCounter(array);
        if (nullChceck === true) {
            findMissingNumber(array);
            replaceSingleMissingNumber(array);
            rowRender(rowNumber, array);
        }
    }
}

function rowRender(rowNumber, array) {
    for (j = 1; j < 10; j++) {
        var letter = String.fromCharCode(65 + j - 1);
        var ele = $(`#block_${letter}${rowNumber}`);
        ele.text(array[j - 1]);
    }
}
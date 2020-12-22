var easyGame1 = [
    [1, 2, 6, null, null, 7, null, null, null],
    [null, null, 3, null, 8, null, null, null, 5],
    [5, null, 8, null, 9, null, null, 3, null],
    [6, null, 4, 8, 7, null, 5, null, 2],
    [null, null, 5, null, null, null, 8, null, null],
    [2, null, 9, null, 5, 3, 1, null, 6],
    [null, 6, null, null, 4, null, 3, null, 1],
    [3, null, null, null, 2, null, 9, null, null],
    [null, null, null, 3, null, null, 7, 5, 8],
];
gamePopulator(easyGame1);
function gamePopulator(gameArray) {
    for (i = 0; i < gameArray.length; i++) {
        for (j = 0; j <gameArray[i].length; j++) {

            $(`#block_A${j}`).text(gameArray[i][j]);
        }
    }
}

// loop through each element(row) in array
// populate each block with that element's elements(row blocks)

// if(gameArray[i][j] === null) {
                
// }
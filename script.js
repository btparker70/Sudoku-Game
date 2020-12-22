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

var easyGame2 = [
    [8, 5, null, 9, 4, null, null, null, 7],
    [1, null, null, null, null, null, 8, null, null],
    [null, 2, null, 8, 1, null, null, 3, null],
    [null, null, 6, null, null, null, 4, 9, null],
    [4, null, null, 3, 9, 8, null, null, 5],
    [null, 9, 1, null, null, null, 7, null, null],
    [null, 1, null, null, 3, 7, null, 4, null],
    [null, null, 5, null, null, null, null, null, 6],
    [6, null, null, null, 5, 4, null, 7, 1],
];

gamePopulator(easyGame1);
function gamePopulator(gameArray) {
    for (i = 0; i < gameArray.length; i++) {
        for (j = 0; j < gameArray[i].length; j++) {
            console.log(gameArray[i][j])
            var letter = String.fromCharCode(65 + j);
            $(`#block_${letter}${i + 1}`).text(gameArray[i][j]);
            console.log($(`#block_${letter}${j + 1}`))
        }
    }
}


$('#new-game').on('click', function() {
    $('.block').empty();
    gamePopulator(easyGame2);
})
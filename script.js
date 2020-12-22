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

// Easy games
var easyGames = [easyGame1, easyGame2];

// Populates game board
function gamePopulator(gameArray) {
    for (i = 0; i < gameArray.length; i++) {
        for (j = 0; j < gameArray[i].length; j++) {
            var letter = String.fromCharCode(65 + j);
            $(`#block_${letter}${i + 1}`).text(gameArray[i][j]);
        }
    }
}

// New-game button
$('#new-game').on('click', function () {
    $('.block').empty();
    var randomNum = Math.floor(Math.random() * easyGames.length);
    gamePopulator(easyGames[randomNum]);
})

// Select empty block: Change block color when clicked
$('.block').on('click', function () {
    $('.block').css('background-color', 'white');
    $(this).css('background-color', 'rgb(64, 187, 64)');
})

// Select empty block: Change row/col color when clicked
$('.block').on('click', function () {
    // If the block is empty
    if ($(this).text() === '') {
        // Letter
        var row = $(this).attr('id').charAt(6);
        // Number
        var col = $(this).attr('id').charAt(7);
        $('.block').css('background-color', 'white');

        // Colors the row and column selected
        for (i = 1; i < 10; i++) {
            $(`#block_${row}${i}`).css('background-color', 'rgb(131, 207, 131)');
        }
        for (j = 0; j < 9; j++) {
            var letter = String.fromCharCode(65 + j);
            $(`#block_${letter}${col}`).css('background-color', 'rgb(131, 207, 131)');
        }

        // Colors the selected square
        $(this).css('background-color', 'rgb(64, 187, 64)');
    } else
    // Color all same blocks with number
    {
        $('.block').css('background-color', 'white');
        var num = $(this).text();
        $(`.block:contains('${num}')`).css('background-color', 'rgb(64, 187, 64)');
    }
})

// Enter number on board from button
$('.clicker-block').on('click', function () {
    const getNum = $(this).text();
    $(".block[style='background-color: rgb(64, 187, 64);']").text(getNum);
})
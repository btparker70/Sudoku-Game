var rowSingle = [
    [null, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, null, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, null, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, null, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, null, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, null, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, null, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, null, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, null],
];

var colSingle = [
    [null, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, null, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, null, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, null, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, null, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, null, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, null, 7, 7],
    [8, 8, 8, 8, 8, 8, 8, null, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, null],
]

gamePopulator(colSingle);
// Populates game board
function gamePopulator(gameArray) {
    $(".block").removeClass('anchored block-anchored');
    for (i = 0; i < gameArray.length; i++) {
        for (j = 0; j < gameArray[i].length; j++) {
            var letter = String.fromCharCode(65 + j);
            if (gameArray[i][j] !== null) {
                $(`#block_${letter}${i + 1}`).text(gameArray[i][j]).addClass('anchored block-anchored');
            } else {
                $(`#block_${letter}${i + 1}`).text(gameArray[i][j]);
            }
        }
    }
}

// New-game button
$('#new-game').on('click', function () {
    $('.block').empty();
    var randomNum = Math.floor(Math.random() * easyGames.length);
    gamePopulator(easyGames[randomNum]);
})

// Solver button
$('#solver').on('click', function () {

    replaceCols();
        replaceRows();

})

// Undo button
$('#undo').on('click', function () {

})

// Select empty block: Change block color when clicked
$('.block').on('click', function () {
    $('.block').css('background-color', 'white').removeClass('selected');
    $(this).css('background-color', 'rgb(64, 187, 64)').addClass('selected');

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
    if ($(".block[class*='selected']").hasClass('anchored') === false) {
        const getNum = $(this).text();
        $(".block[class*='selected']").text(getNum);
    }
})
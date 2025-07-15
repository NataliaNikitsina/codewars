// describe("Tests", () => {
//     it("test", () => {
//    board = [[1,1,0,0,0],
//             [1,1,0,0,0],
//             [0,0,0,0,0],
//             [0,0,0,1,1],
//             [0,0,0,1,1]];
//         game = new Game(board);
//         Test.expect(game.play()==2, "Should return '2'");
//
//    board = [[1,0,1,0,1],
//             [1,0,1,0,1],
//             [1,1,1,0,0],
//             [0,0,0,1,1],
//             [0,0,0,1,1]];
//         game = new Game(board);
//         Test.expect(game.play()==3, "Should return '3'");
//
//    board = [[1,0,1,0,1],
//             [0,1,0,1,0],
//             [1,0,1,0,1],
//             [0,1,0,1,0],
//             [1,0,1,0,1]];
//         game = new Game(board);
//         Test.expect(game.play()==13, "Should return '13'");
//
//    board = [[1,0,0,0,0],
//             [0,0,1,1,0],
//             [1,0,1,0,1],
//             [1,1,1,1,0],
//             [1,1,1,0,1]];
//         game = new Game(board);
//         Test.expect(game.play()==4, "Should return '4'");
//     });
// });

function Game(board) {
  this.mainbBoard = board
    this.play()
}

Game.prototype.play = function(){
    let countOfEat = 0;
    this.mainbBoard[0].forEach((item) => {
        if (item === 1) countOfEat++;
    })
    for (let i = 1; i < this.mainbBoard.length - 1; i++) {
        for (let j = 0; j < this.mainbBoard[i].length; j++) {
            if (this.mainbBoard[i][j] !== this.mainbBoard[i][j + 1] && this.mainbBoard[i][j] !== this.mainbBoard[i + 1][j] && this.mainbBoard[i][j] !== this.mainbBoard[i - 1][j] && this.mainbBoard[i][j] === 1) {
                countOfEat++;
            }
        }
    }
    return countOfEat
}

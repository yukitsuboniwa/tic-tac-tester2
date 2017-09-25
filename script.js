var grid = [0, 0, 0,
            0, 0, 0,
            0, 0, 0]

var player = 1
// Check if grid is taken
function playTurn (index) {
  if(grid[index] || isGameOver()) {
  return false
  } else {
    console.log("player: " + player)
      grid[index] = player
        if (player === 1) player = 2
        else player = 1
    console.log("grid: " + grid.join(" "))
        return true
  }
}

function isGameOver(){
// It should return a true or false if the game is over.
  var winner = whoWon()
    if (winner === 1 || winner === 2|| winner === 3) {
    return true;
  } else return false;
}



function whoWon() {
// It should return 0 if the game is not yet finished. Else it should return
// either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
// return 0;

  //TOP ROW
  if (grid[0] === 1 && grid[1] === 1 && grid[2] === 1) return 1;
  if (grid[0] === 2 && grid[1] === 2 && grid[2] === 2) return 2;


  //MIDDLE ROW
  if (grid[3] === 1 && grid[4] === 1 && grid[5] === 1) return 1;
  if (grid[3] === 2 && grid[4] === 2 && grid[5] === 2) return 2;

  //BOTTOM ROW
  if (grid[6] === 1 && grid[7] === 1 && grid[8] === 1) return 1;
  if (grid[6] === 2 && grid[7] === 2 && grid[8] === 2) return 2;

  //LEFT COLUMN
  if (grid[0] === 1 && grid[3] === 1 && grid[6] === 1) return 1;
  if (grid[0] === 2 && grid[3] === 2 && grid[6] === 2) return 2;

  //MIDDLE COLUMN
  if (grid[1] === 1 && grid[4] === 1 && grid[7] === 1) return 1;
  if (grid[1] === 2 && grid[4] === 2 && grid[7] === 2) return 2;

  //RIGHT COLUMN
  if (grid[2] === 1 && grid[5] === 1 && grid[8] === 1) return 1;
  if (grid[2] === 2 && grid[5] === 2 && grid[8] === 2) return 2;

  //LEFT DIAGONAL
  if (grid[0] === 1 && grid[4] === 1 && grid[8] === 1) return 1;
  if (grid[0] === 2 && grid[4] === 2 && grid[8] === 2) return 2;

  //RIGHT DIAGONAL
  if (grid[2] === 1 && grid[4] === 1 && grid[6] === 1) return 1;
  if (grid[2] === 2 && grid[4] === 2 && grid[6] === 2) return 2;

  // Draw Game
  if (grid[0] === 1 && grid[1] === 2 && grid[2] === 1 &&
      grid[3] === 2 && grid[4] === 2 && grid[5] === 1 &&
      grid[6] === 1 && grid[7] === 1 && grid[8] === 2) return 3;

  else return 0;
}

function restart () {
  grid = [0, 0, 0,
          0, 0, 0,
          0, 0, 0]

  player = 1

console.log('restart')

}

// var grid = [0, 0, 0,
//             0, 0, 0,
//             0, 0, 0]
//
// var player = 1
//
// function playTurn (index) {
//   console.log('playTurn')
//   if (grid[index] || isGameOver()) {
//     return false
//     console.log("grid: " + grid.join(" "))
//   } else {
//     console.log("player: " + player)
//     grid[index] = player
//     if (player === 1) player = 2
//     else player = 1
//     console.log("grid: " + grid.join(" "))
//     return true
//   }
//
// }
//
// function isGameOver () {
//   if (whoWon()) return true
//   return false
//
//
// }
//
// function whoWon () {
//   if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
//   if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
//   if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
//   if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
//   if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
//   if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
//   if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
//   if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
//   if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
//       grid[5] && grid[6] && grid[7] && grid[8]) return 3
//   return 0
// }
//
// function restart () {
//   grid = [0, 0, 0,
//           0, 0, 0,
//           0, 0, 0]
//   player = 1
//
//   console.log('restart')
// }

// if (grid[0] === 0 || grid[1] === 0 || grid[2] === 0 ||
//     grid[3] === 0 || grid[4] === 0 || grid[5] === 0 ||
//     grid[6] === 0 || grid[7] === 0 || grid[8] === 0) return 0;
//
// else return 3;

  // if (grid[0] === 1 && grid[1] === 1 && grid[2] === 1) ||
  //    (grid[3] === 1 && grid[4] === 1 && grid[5] === 1) ||
  //    (grid[6] === 1 && grid[7] === 1 && grid[8] === 1) ||
  //    (grid[0] === 1 && grid[3] === 1 && grid[6] === 1) ||
  //    (grid[1] === 1 && grid[4] === 1 && grid[7] === 1) ||
  //    (grid[2] === 1 && grid[5] === 1 && grid[8] === 1) ||
  //    (grid[0] === 1 && grid[4] === 1 && grid[8] === 1) ||
  //    (grid[2] === 1 && grid[4] === 1 && grid[6] === 1)  {
  //      return 1;
  //    } else if
  //     (grid[0] === 2 && grid[1] === 2 && grid[2] === 2) ||
  //     (grid[3] === 2 && grid[4] === 2 && grid[5] === 2) ||
  //     (grid[6] === 2 && grid[7] === 2 && grid[8] === 2) ||
  //     (grid[0] === 2 && grid[3] === 2 && grid[6] === 2) ||
  //     (grid[1] === 2 && grid[4] === 2 && grid[7] === 2) ||
  //     (grid[2] === 2 && grid[5] === 2 && grid[8] === 2) ||
  //     (grid[0] === 2 && grid[4] === 2 && grid[8] === 2) ||
  //     (grid[2] === 2 && grid[4] === 2 && grid[6] === 2)  {
  //       return 2;
  //     } else if
  //     (grid[0] === 1 && grid[1] === 2 && grid[2] === 1
  //     && grid[3] === 2 && grid[4] === 2 && grid[5] === 1
  //     && grid[6] === 1 && grid[7] === 1 && grid[8] === 2) {
  //       return 3;
  //     } else {
  //       return 0;
  //     }

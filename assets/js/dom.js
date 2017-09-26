// $(document).ready(function () {
//
// })

$(document).ready(init)

// this point onward
function init() {


  // target the element
  var $box = $('.box')

  // add event
  $box.on('click', boxClick)

  // change the title to timer
  // that changes every second
  // Tic Tac Toe: <5 seconds passed>
  var timer = setInterval(everyFiveSecond, 1000)
  clearInterval(timer)
}

var count = 0

function everyFiveSecond() {
  // console.log('hey')
  var $title = $('h1')
  count++
  $title.text('Tic Tac Toe: ' +  count + ' seconds passed')
}

function boxClick() {
  var $title = $('h1')
  count++
  // console.log($title.text())

  // change the $title into 'Tic Tac Toe: <click count>''
  $title.text('Tic Tac Toe: ' +  count)

}

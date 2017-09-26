$(function() {
  // var now = new Date(Date.now())
  // console.log(now.toString())
  // console.log(now.toDateString())
  //
  // console.log('h', now.getHours());
  // console.log('m', now.getMinutes());
  // console.log('s', now.getSeconds());
// buildTime()

 setInterval(buildTime,1000)


 setInterval(bgChanger, 100)

})

function bgChanger() {
  // var colorArr = ['red', 'green', 'blue', 'yellow', 'gold', 'pink']

  // var colorIndex = Math.floor(Math.random() * 6)

  var $body = $('body')
  // $body.css('backgroundColor', colorArr[colorIndex])

  $body.css('backgroundColor', getRandomColor[animateBg])

}

// create random color with rgb :DONE
function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// changing gradually : DONE
function animateBg(i) {
    document.body.style.backgroundColor = 'hsl(' + i + ', 100%, 50%)';

    setTimeout(function() {
        animateBg(++i)
    }, i);
}
animateBg(0);

function buildTime() {
  var now = new Date(Date.now())
  var h = now.getHours()
  var m = now.getMinutes() // TODO: fix the single digit bug
  var s = now.getSeconds()

  var hLength = h.toString.length
  var mLength = m.toString.length
  var sLength = s.toString.length

  if (hLength = 1) {
    h = '0' + h
  }
  if (mLength < 2) {
    m = '0' + m
  }
  if (sLength < 2) {
    s = '0' + s
  }

  // var time = h + ':' + m + ':' +  s
  var time = `${h}:${m}:${s}`

  $('h2').text(time)

  // console.log(time)

}

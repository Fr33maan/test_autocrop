var fs = require('fs')
var gm = require('gm').subClass({ imageMagick: true })
var smartcrop = require('smartcrop-gm')

function applySmartCrop (src, dest, width, height) {
  const file = fs.readFileSync(src, { encoding: null })
  smartcrop.crop(file, { width: width, height: height }).then(function (result) {
    console.log(result)
    var crop = result.topCrop
    gm(file)
      .crop(crop.width, crop.height, crop.x, crop.y)
      .resize(width, height)
      .write(dest, function (error) {
        if (error) return console.error(error)
      })
  })
}

var images = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png'
]

images.map(image => {
  applySmartCrop('./uncropped/' + image, './cropped/' + image, 64, 64)
})

const path = require('path')
const execFile = require('child_process').execFile

const bin = path.join(__dirname, 'fontlist')
const font_exceptions = ['iconfont']

function tryToGetFonts(s) {
  let fonts = []
  let m = s.match(/\([\s\S]+?\)/)
  if (m) {
    let a = m[0].replace(/[()]/g, '').split('\n')
    fonts = fonts.concat(a.map(i => {
      return i.replace(/^\s+|\s+$/g, '').replace(/,$/, '')
    }))
  }

  return fonts
}

module.exports = () => new Promise((resolve, reject) => {
  execFile(bin, (error, stdout, stderr) => {
    if (error) {
      reject(error)
      return
    }

    let fonts = []
    if (stdout) {
      fonts = fonts.concat(tryToGetFonts(stdout))
    }
    if (stderr) {
      fonts = fonts.concat(tryToGetFonts(stderr))
    }

    fonts = Array.from(new Set(fonts))
      .filter(i => i && !font_exceptions.includes(i))

    resolve(fonts)
  })
})

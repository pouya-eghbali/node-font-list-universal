const platform = process.platform
const for_darwin = require('./libs/darwin')
const for_win32 = require('./libs/win32')
const for_unix = require('./libs/unix')

exports.getFonts = async () => {
  let fonts

  if (platform === 'darwin') {
    fonts = await for_darwin()

  } else if (platform === 'win32') {
    fonts = await for_win32()

  } else {
    fonts = await for_unix()
  }

  fonts = fonts.map(i => {

    // parse unicode names, eg: '"\\U559c\\U9e4a\\U805a\\U73cd\\U4f53"' -> '"喜鹊聚珍体"'
    try {
      i = i.replace(/\\u([\da-f]{4})/ig, (m, s) => String.fromCharCode(parseInt(s, 16)))
    } catch (e) {
      console.log(e)
    }

    // replace ""
    i = i.replace(/^"/, '').replace(/"$/, '')
    return i
  })
  fonts.sort()

  return fonts
}

require('./index').getFonts()
  .then(fonts => {
    //console.log(fonts)
    console.log(fonts.join('\n'))
  })
  .catch(err => {
    console.log(err)
  })

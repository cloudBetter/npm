function dateForIos(d) {
  return d.replace(/-/g, '/')
}
module.exports ={
  dateForIos:dateForIos
}
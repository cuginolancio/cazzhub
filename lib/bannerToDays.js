module.exports = function(banner) {
  var asterisks = []
  var week = 1
  var offset = 0;
  for (var i = 0; i < banner.length; i++) {
    if (banner.charAt(i) === "\n") {
      week += 1
      offset = i + 1
    } else if (banner.charAt(i) !== " ") {
      asterisks.push(((i - offset) * 7) + week)
    }
  }
  return asterisks
}

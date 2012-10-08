var moment = require("moment")

module.exports = function(offsets, date) {
  return offsets.map(function(offset) {
    return moment(date).add("days", offset - 1).add("hours", 12).format()
  })
}

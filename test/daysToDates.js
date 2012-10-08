var daysToDates = require("../lib/daysToDates")
var expect = require("chai").expect

describe("daysToDates", function() {

  it("should take offsets and a starting date", function() {
    var date = "2013-01-01"
    var offset = [1]
    expect(daysToDates(offset, date)).to.be.deep.equal(["2013-01-01T12:00:00+01:00"])
  })

  it("should take offsets and a starting date", function() {
    var date = "2013-01-01"
    var offset = [1, 8, 15, 41]
    expect(daysToDates(offset, date)).to.be.deep.equal(
      [
        "2013-01-01T12:00:00+01:00",
        "2013-01-08T12:00:00+01:00",
        "2013-01-15T12:00:00+01:00",
        "2013-02-10T12:00:00+01:00"
      ]
    )
  })
})

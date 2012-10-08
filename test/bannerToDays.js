var expect = require("chai").expect
var bannerToDays = require("../lib/bannerToDays.js")

describe("bannerToDays", function() {

  it("should see the first asterisk as the first day", function() {
    var banner = "*"
    expect(bannerToDays(banner))
      .to.be.deep.equal([1])
  })

  it("should see the second asterisk on the right 8 days later", function() {
    var banner = " *"
    expect(bannerToDays(banner)).to.be.deep.equal([8])
  })

  it("should see 2 asterisks as 2 days", function() {
    var banner = "**"
    expect(bannerToDays(banner)).to.be.deep.equal([1, 8])
  })

  it("should see 3 asterisks as 3 days", function() {
    var banner = "***"
    expect(bannerToDays(banner)).to.be.deep.equal([1, 8, 15])
  })

  it("should work with mixed spaces/asterisks", function() {
    var banner = "* * *"
    expect(bannerToDays(banner)).to.be.deep.equal([1, 15, 29])
  })

  it("should see an asterisk below as the day after", function() {
    var banner = "\n*"
    expect(bannerToDays(banner)).to.be.deep.equal([2])
  })

  it("should work with multiple rows", function() {
    var banner = "\n\n*"
    expect(bannerToDays(banner)).to.be.deep.equal([3])
  })

})

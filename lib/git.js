var exec = require("child_process").exec
var async = require("async")

var file = "cazzhub.txt"
var datesToCommit = function(dates, done) {

  var changeFile = function(doneChange) {
    shell("echo abc >> " + file, doneChange)
  }
  var commitDate = function(date, doneCommit) {
    shell("git commit -a --date='" + date + "' -m 'prova'", doneCommit)
  }

  async.eachSeries(dates, function(date, doneEach) {
    async.series([
      changeFile,
      commitDate.bind(null, date)
    ], doneEach)
  }, done)
}

var init = function(userName, userMail, done) {
  
  var removeGitRepo = function(doneRemove) {
    shell("rm -rf .git", doneRemove)
  }
  var initGitRepo = function(doneInit) {
    shell("git init", doneInit)
  }
  var createFirstFile = function(doneCreate) {
    shell("touch " + file, doneCreate)
  }
  var addFirstFile = function(doneAdd) {
    shell("git add .", doneAdd)
  }
  var configureUserName = function(doneConfigure) {
    shell("git config user.name " + userName, doneConfigure)
  }
  var configureUserMail = function(doneConfigure) {
    shell("git config user.email " + userMail, doneConfigure)
  }
  
  async.series([
    removeGitRepo,
    initGitRepo,
    createFirstFile,
    addFirstFile,
    configureUserName,
    configureUserMail
  ], done)

}

var shell = function(command, callback) {
  exec(command, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
        callback(new Error("schifo"))
      }
      callback(null)
  })
}

module.exports = {
  init: init,
  datesToCommit: datesToCommit
}

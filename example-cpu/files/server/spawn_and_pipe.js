// Function executes given command and pipes stdout and stderr to callback function
// cmd is command (program or script) to execute
// args are arguments passed to cmd
// callback is function(err, res) where err is error object with reason set from stderr, and res is string from stdout

this.executeScript = function(cmd, args, callback) {
  var argsArray = args ? args.split(" ") : [];

  var spawn = require('child_process').spawn;
  var es = require("event-stream");

  var fullCmd = cmd + (args ? " " + args : "");
  var child = null;
  child = spawn(cmd, argsArray);

  child.on("error", function(err) {
    callback(new Meteor.Error(500, "Error executing \"" + fullCmd + "\": " + err.message));
  });

  child.on("close", function(code, signal) {
    if(code === 0) {

    } else {
      callback(new Meteor.Error(500, "Error executing \"" + fullCmd + "\""));
    }
  });

  child.stdout.pipe(es.split()).pipe(es.mapSync(function(line) {
    if(line) {
      callback(null, "" + line);
    }
  }));

  child.stderr.pipe(es.split()).pipe(es.mapSync(function(line) {
    if(line) {
      callback(new Meteor.Error(500, "" + line));
    }
  }));
};

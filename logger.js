const EventEmitter=require("events");
const emitter=new EventEmitter();
function log()
{
    console.log("Working on log");
    emitter.emit("done");

}
//module.exports.log=log;
//module.exports.emitter=emitter;
module.exports={log,emitter};


const EventEmitter=require("events");
class Emitter extends EventEmitter
{

  log()
  {
    console.log("Working on log");
    this.emit("done");
  }
}
module.exports=Emitter;
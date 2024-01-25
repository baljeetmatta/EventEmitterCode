//const events=require("events");
const EventEmitter=require("events");

//console.log(events);
const emitter=new EventEmitter();

//emitter.emit("done")
emitter.on("done",()=>{
    console.log("Done handled");

})
emitter.emit("done");
function testMessage()
{
    console.log("Function called");
    emitter.emit("done");

}
//testMessage();

//const fs=require("fs");
//const path=require("path");


const obj=require("./logger");
// const EventEmitter=require("events");
// const emitter=new EventEmitter();
// emitter.on("done",()=>{
//     console.log("Done called");
// })
obj.emitter.on("done",()=>{
    console.log("Done called");
})
obj.log();

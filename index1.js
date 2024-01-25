const Emitter=require("./logger1");
const e=new Emitter();
e.on("done",()=>{
    console.log("Emitter called");
})

e.log();


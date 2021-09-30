const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/praveendynamic",{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connect successful");
}).catch((error)=>{
    console.log(error);
})
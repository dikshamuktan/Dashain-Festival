import mogoose from "mongoose";

 const eventSchema= mogoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        date:{
            type:Date,
            require:true
        },
        description:{
            type:Number,
            require:true
        },
    },
    {timestampes:true}
 )


 const eventModel= mogoose.model("event",eventSchema);
 export default eventModel;
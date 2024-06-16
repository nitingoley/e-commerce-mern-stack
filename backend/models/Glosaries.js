import mongoose from "mongoose";

const localPro = mongoose.Schema({

    product: {
        type:String,
        required: true
    },
    
    price:  {
        type:Number,
    },
    photoImg:{
        type:String,
        required: true
    }
})

export default mongoose.model("Local-item" , localPro);
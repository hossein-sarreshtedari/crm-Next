import { Schema , model , models } from "mongoose";


const customerSchema = new Schema({

    name : {

        type : String,
        required : true
    },
    lastName : {

        type :String,
        required : true,
    },
    email : {

        type : String,
        required : true
    },
    phone : {

        type : String,
        required : true,
    },
    address : {

        type : String,
        required : true,
    },
    postalCode : {

        type : Number,
        required : true
    },
    Data : {

        type : String,
        required : true
    },
    products : {

        type : Array,
    },
    createAt : {

        type : Date,
        default : () => Date.now()
    }
})

const Customer = models.Customer || model("Customer" , customerSchema);

export default Customer;
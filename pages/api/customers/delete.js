import Customer from "@/models/Customer";
import conectToDB from "@/utils/ConectToDB";

export default async function handler(req, res) {

    if(req.method === "POST"){

        try{

            await conectToDB();
        }
        catch(err){

            console.log(err);
            res.status(500).json({status : false , message : "Error in connect To DB"});
            return;
        }


        const body = req.body;

        try{

            await Customer.findByIdAndDelete(body.customerId);
            res.status(200).json({status : true , message :"customer delete succsessfully."})

        }
        catch(err){

            console.log(err);
            res.status(500).json({status : false , message : "error when delete customer"})
        }





    }

}
import Customer from "@/models/Customer";
import conectToDB from "@/utils/ConectToDB";

export default async function handler(req,res){

    if(req.method == "POST"){
        

        try{

            await conectToDB();
        }
        catch(err){

            console.log(err);
            res.status(500).json({status : false , message : "error when conncet to DB"})
            return;
        }

        const body = req.body;

        try{

            let customerData = await Customer.findByIdAndUpdate(body._id , body)
            await customerData.save();
           

            res.status(200).json({status : true , message : "edite succsessfully"})
        }
        catch(err){

            console.log(err);
            res.status(500).json({status : false , message : "error when efite customer"})
        }


        



    }
}
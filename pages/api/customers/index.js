import conectToDB from "@/utils/ConectToDB";
import Customer from "@/models/Customer";


export default async function handler(req , res){

    if(req.method === "GET"){

        try{

            await conectToDB();
        }
        catch(err){
    
            console.log(err);
            res.status(500).json({status : false , message : "Error in connect To DB"});
            return;
        }

        try{

            const Allcustomers = await Customer.find();
            res.status(200).json({status : true , data : Allcustomers})

        }
        catch(err){
    
            console.log(err);
            res.status(500).json({status : false , message : "Error in Get customers"});
        }
      

    }

   



    

}
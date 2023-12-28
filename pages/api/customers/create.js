import conectToDB from "@/utils/ConectToDB";
import Customer from "@/models/Customer";


export default async function handler(req,res){


    if(req.method === "POST"){

        try{

            await conectToDB();
        }
        catch(err){
    
            console.log(err);
            res.status(500).json({status : false , message : "Error in connect To DB"});
        }


        const body = req.body;


        try{

            const Newcustomer = await Customer.create(body);
            res.status(201).json({status : true , message : "add SuccsessFully"})
        }
        catch(err){

            console.log(err);
            res.status(500).json({status : false , message : "error when create"})
        }
        
        
    }

    

}
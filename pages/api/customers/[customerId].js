import Customer from "@/models/Customer";
import conectToDB from "@/utils/ConectToDB";

export default async function handler(req, res) {

    const { customerId } = req.query;
  
    try {

        await conectToDB();
    }
    catch (err) {

        console.log(err);
        res.status(500).json({ status: false, message: "Error when connecting to DB" });
        return;
    }

    if (req.method === "GET") {

        try {

            const customer = await Customer.findById(customerId);
            res.status(200).json({status : true , data : customer})
        }

        catch (err) {

            console.log(err)
            res.status(500).json({status : false , message : "error when find customer"})
        }
    }



}
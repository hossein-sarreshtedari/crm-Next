import Customer from "@/models/Customer";
import conectToDB from "@/utils/ConectToDB";
import DteailCustomerPage from "@/pages/components/templates/DteailCustomerPage"

const DetailCustomer = ({customer}) => {


    return (

        <div>



            <DteailCustomerPage customer={customer} />



            
        </div>
    );
};

export default DetailCustomer;


export async function getServerSideProps(context){

    const {customerId} = context.query;

    try{

        await conectToDB();
    }
    catch(err){

        console.log(err)
    } 

   
        const data = await Customer.findById(customerId) ;
       

    return {

        props : {customer : JSON.parse(JSON.stringify(data))}
    }
}
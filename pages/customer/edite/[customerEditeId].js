import Customer from "@/models/Customer";
import EditePageCustomer from "@/pages/components/templates/EditePageCustomer";
import conectToDB from "@/utils/ConectToDB";

const EditeCustomer = ({customer}) => {
    return (

        <>

            <EditePageCustomer customer={customer} />
            
        </>
    );
};

export default EditeCustomer;


export async function getServerSideProps(context){

        const {customerEditeId} = context.query;


        try{

            await conectToDB();
        }
        catch(err){
    
            console.log(err)
        } 


        const data = await Customer.findById(customerEditeId);

        return {

            props : {customer : JSON.parse(JSON.stringify(data))}
        }



}
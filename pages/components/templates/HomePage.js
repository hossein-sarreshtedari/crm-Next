
import Link from "next/link";
import styles from "./HomePage.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const HomePage = ({ customers }) => {

    const router = useRouter();


    const [AllCustomers , setAllCustomers] = useState(customers);


    const updateCustomers = () => {

      

        axios.get("/api/customers")
        .then(res => {

            console.log(res.data)

            if(res.data.status){

                setAllCustomers(res.data.data);
            }
            else{

                window.alert(res.data.message)
            }
        })
        .catch(err => {

            console.log(err)
            window.alert("problem in catch")
        })
    }


    const deleteHandler = (id) =>{

        axios.post("/api/customers/delete" , {customerId : id})
        .then(res => {

                if(res.data.status){

                    window.alert(res.data.message)
                    updateCustomers();
                   
                }
                else{

                    window.alert(res.data.message)
                }
        })
        .catch(err => {

            console.log(err);
            window.alert("problem in catch")
        })

    }

    return (

        customers &&
        <div className={styles.Content}>

            {AllCustomers.map(item => {

                    return  <div key={item._id} className={styles.customerDiv}>
                
                    <div>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.lastname}>{item.lastName}</span>
                    <span className={styles.email}>{item.email}</span>
                    </div>
    
                    <div>
                        <button className="buttons button3" onClick={() => deleteHandler(item._id)}>Delete</button>
                        <Link href={`/customer/edite/${item._id}`}><button className="buttons button2">Edite</button></Link>
                        <Link href={`./customer/${item._id}`}><button className="buttons button2">Details</button></Link>
                    </div>
    
    
                </div>
    
            })}
           
        </div>
    );
};

export default HomePage;
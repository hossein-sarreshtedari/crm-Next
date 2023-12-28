import { useRouter } from "next/router";
import styles from "./DteailCustomer.module.css";
import axios from "axios";
import Link from "next/link";

const DteailCustomerPage = ({ customer }) => {

    const router = useRouter();

    const deleteHandler = (id) =>{

        console.log("hh")

        axios.post("/api/customers/delete" , {customerId : id})
        .then(res => {

            if(res.data.status){

                window.alert(res.data.message);
                router.push("/")

            }
            else{

                window.alert(res.data.message);
            }
        })
        .catch(err => {

            console.log(err);
            window.alert("problem in catch")

        })

    }

    return (

        customer &&
        <>

            <div className={styles.titlePage}>Customer Details</div>

            <div className={styles.dataBox}>

                <table>
                    <tbody>
                        <tr>

                            <td>Name : <span>{customer.name}</span></td>
                            <td>Last Name : <span>{customer.lastName}</span></td>
                            <td>Email : <span>{customer.email}</span></td>

                        </tr>

                        <tr>

                            <td>Phone : <span>{customer.phone}</span></td>
                            <td>Address : <span>{customer.address}</span></td>
                            <td>Postal Code : <span>{customer.postalCode}</span></td>

                        </tr>

                        <tr>

                            <td>Date : <span>{customer.Data}</span></td>

                        </tr>

                    </tbody>

                </table>


            </div>

            {customer.products.map(item => {

                return <div className={styles.dataBox} key={item.id} style={{margin : "2rem 0"}}>

                    <table>
                        <tbody>
                            <tr>

                                <td>Name : <span>{item.productName}</span></td>
                                <td>Price : <span>{item.productPrice}</span></td>
                                <td>QTY : <span>{item.producrQty}</span></td>

                            </tr>

                        </tbody>
                    </table>


                </div>

            })}

            <div className={`${styles.dataBox} ${styles.lastbox}`} style={{margin : "2rem 0"}}>

                    <span>Edite Or Delete ?</span>
                    <button className="buttons button3" onClick={() => deleteHandler(customer._id)}>Delete</button>
                    <Link href={`/customer/edite/${customer._id}`}><button className="buttons button2">Edite</button></Link>

            </div>


        </>
    );
};

export default DteailCustomerPage;
import React, { useState } from "react";
import styles from "./AddCustomer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const AddCustomer = () => {

    const router = useRouter();
    const [productCount , setProductCount] = useState(1);
    const [formData, setFormData] = useState({

        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        Date: "",
        products: []
    });



    const ProductAddHandler = () => {

       
        setProductCount(lastValue => lastValue + 1)
        setFormData({...formData , products : [...formData.products , {id : productCount , productName : "" , productPrice : "" , producrQty : "" }]})

    }


    const productInputHandler  = (e , id) => {

        const findIndex = formData.products.findIndex(item => item.id === id);

        formData.products[findIndex][e.target.name] = e.target.value;
        setFormData({...formData , products : [...formData.products]})
    }


    const removeProductHandler = (id) => {

        const findIndex = formData.products.findIndex(item => item.id === id);
        formData.products.splice(findIndex , 1);
        setFormData({...formData , products : [...formData.products]})
    }



    const inputHandler = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const saveHandler = () => {

        axios.post("/api/customers/create" , formData)
        .then(res => {

            if(res.data.status){

                window.alert(res.data.message);
                router.push("/")

            }
            else(

                console.log(res.data.message)
            )
        
        })
        .catch(err => {

            console.log(err)
        })
    }
    


    return (

        <>

            <div className={styles.titlePage}>Add New Customer</div>

            <div>

                <div className={styles.inputs}>

                    <label htmlFor="name">Name</label>
                    <input type="text" value={formData.name} name="name" id="name" onChange={inputHandler} />

                </div>



                <div className={styles.inputs}>

                    <label htmlFor="lastName">LastName</label>
                    <input type="text" value={formData.lastName} name="lastName" id="lastName" onChange={inputHandler} />
                </div>


                <div className={styles.inputs}>

                    <label htmlFor="email">Email</label>
                    <input type="text" value={formData.email} name="email" id="email" onChange={inputHandler} />

                </div>


                <div className={styles.inputs}>

                    <label htmlFor="phone">Phone</label>
                    <input type="text" value={formData.phone} name="phone" id="phone" onChange={inputHandler} />

                </div>


                <div className={styles.inputs}>

                    <label htmlFor="address">Address</label>
                    <input type="text" value={formData.address} name="address" id="address" onChange={inputHandler} />

                </div>

                <div className={styles.inputs}>

                    <label htmlFor="postalCode">PostalCode</label>
                    <input type="text" value={formData.postalCode} name="postalCode" id="postalCode" onChange={inputHandler} />

                </div>

                <div className={styles.inputs}>

                    <label htmlFor="Data">Data</label>
                    <input type="Date" value={formData.Data} name="Data" id="Data" onChange={inputHandler} />

                </div>


                <div className={styles.addProducts}>

                    <div className={styles.titleofProductDiv}>Product of Customer</div>


                    <div className={styles.fatherProducts}>

                        {formData.products.map(item => {

                                const goal = formData.products.find(item2 => item2.id === item.id);

                                return  <div key={item.id} className={styles.products}>

                                <div className={styles.inputs}>
                    
                                    <label htmlFor={`product${item.id}`}>Prodct Name</label>
                                    <input type="text" value={goal.productName} name="productName" id={`product${item.id}`} onChange={(e) => productInputHandler(e , item.id)} />
                    
                                </div>
                    
                                <div className={styles.bottomProduct}>
                    
                                    <div className={styles.inputs}>
                                        <label htmlFor={`Price${item.id}`}>Price</label>
                                        <input type="text" value={goal.productPrice} name="productPrice" id={`Price${item.id}`} onChange={(e) => productInputHandler(e , item.id)} />
                                    </div>
                    
                                    <div className={styles.inputs}>
                                        <label htmlFor={`QTY${item.id}`}>QTY</label>
                                        <input type="text" value={goal.producrQty} name="producrQty" id={`QTY${item.id}`} onChange={(e) => productInputHandler(e , item.id)} />
                                    </div>
                    
                                </div>
                    
                    
                                <button className="buttons button3" onClick={(e) => removeProductHandler(item.id)} style={{ width: "100%", margin: "1rem 0 0" }}>Remove</button>
                    
                            </div>; ;
                        })}


                    </div>


                    <button className="buttons button2" onClick={ProductAddHandler} style={{ width: "100%", margin: "1rem 0 0" }}>Add Item</button>

                </div>


                <div className={styles.btns}>

                    <button className="buttons button3" onClick={() => router.back()}>Cansel</button>
                    <button className="buttons button2" onClick={saveHandler}>Save</button>

                </div>


            </div>

        </>
    );
};

export default AddCustomer;
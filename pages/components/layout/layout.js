import React, { Children } from 'react';
import styles from "./layout.module.css";
import Link from 'next/link';

const Layout = ({children}) => {

    return (

        <div className={styles.mainLayout}>
            

            <header className={styles.header}>

                <Link href="/"><h1 className={styles.title}>MY CRM Project</h1></Link>
                <Link href={"./newcustomer"}><button className="buttons button1">Add Customer</button></Link>

            </header>


            <div className={styles.mainContent}>

                {children}

            </div>
            

            <footer className={styles.footer}>

                
                <span>Created By @Hossein | Next.js Project</span>


            </footer>

            
        </div>
    );
};

export default Layout;
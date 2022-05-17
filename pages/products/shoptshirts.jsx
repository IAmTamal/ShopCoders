import React, { useEffect } from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import products from "../../models/ProductSchema"
import connectDb from '../../middleware/db'


const Shoptshirts = ({ allproducts }) => {



    return (
        <>
            <Navbar />
            <div className={`container-fluid ${styles.shirtpage_parent}`}>

                {allproducts.map((product) => {
                    return (
                        <TshirtCard key={product._id} product={product} />
                    )

                })}


            </div>

        </>
    )
}

// we have used this in place of useeFFECT
// because we are not using useEffect in this page
// we are calling connecttomongo and connecting to the database, then we are getting the data from the database
// and we are storing and passing them as props !!

export async function getServerSideProps(context) {
    connectDb();
    let allproducts = await products.find({ category: "tshirt" });
    return {
        props: { allproducts: JSON.parse(JSON.stringify(allproducts)) }, // will be passed to the page component as props
    }
}

export default Shoptshirts
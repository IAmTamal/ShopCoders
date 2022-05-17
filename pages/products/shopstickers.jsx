import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import Stickerscard from '../../components/Stickerscard'
import products from "../../models/ProductSchema"
import connectDb from '../../middleware/db'


const shopstickers = ({ allproducts }) => {
    return (
        <>
            <Navbar />

            <div className={`container-fluid ${styles.shirtpage_parent}`}>
                {allproducts.map((product) => {
                    return (
                        <Stickerscard key={product._id} product={product} />
                    )
                })
                }
            </div>

        </>
    )
}


// get server side props
export async function getServerSideProps(context) {
    connectDb();
    let allproducts = await products.find({ category: "stickers" });
    return {
        props: { allproducts: JSON.parse(JSON.stringify(allproducts)) },
    }
}


export default shopstickers


import React from 'react'
import TshirtCard from '../../components/TshirtCard'
import styles from "../../styles/Shoptshirts.module.css"
import Navbar from "../../components/Navbar.jsx"
import Mugscard from '../../components/Mugscard'
import products from "../../models/ProductSchema"
import connectDb from '../../middleware/db'


const Shopmugs = ({ allproducts }) => {
    return (
        <>
            <Navbar />

            <div className={`container-fluid ${styles.shirtpage_parent}`}>
                {allproducts.map((product) => {
                    return (
                        <Mugscard key={product._id} product={product} />
                    )
                })}

            </div>

        </>
    )
}


// get server side props
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }


    let allproducts = await products.find({ category: "mugs" });


    return {
        props: { allproducts: JSON.parse(JSON.stringify(allproducts)) }, // will be passed to the page component as props
    }
}

export default Shopmugs


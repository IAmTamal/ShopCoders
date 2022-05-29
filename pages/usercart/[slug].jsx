
import mongoose from 'mongoose';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar.jsx';
import Users from "../../models/UserSchema.js"
import styles from "../../styles/Usercart.module.css"
import { useUser } from "@auth0/nextjs-auth0";
import Link from 'next/link';
import { BsFillCartFill, BsFillHeartFill, BsFillEyeFill } from "react-icons/bs";


const Usercart = ({ singleuser }) => {

    const { user, error, isLoading } = useUser();






    return (


        <>

            <div className={styles.cart_mainparent}>

                <Navbar />

                <div className="container" style={{ marginTop: "5rem" }}>
                    <h3 className={styles.cart_cartusername}> Welcome to your cart, {user && user.name.split(" ")[0]} </h3>
                </div>

                <div className={`container ${styles.cart_cartcardsparent}`}>



                    {singleuser.cartproducts.length > 0 && singleuser.cartproducts.map((item, index) => {

                        return (
                            <>




                                <div className={`card ${styles.itemscard_card}`} style={{ width: "18rem" }}>
                                    <Image src={item.img} className={`card-img-top ${styles.itemscard_img}`} alt="..." height={300} width={300} />

                                    <div className="card-body">

                                        <h5 className={`card-title ${styles.itemscard_title}`}>{item.name}</h5>




                                        <h5 className={styles.itemcard_price}>$ {item.price}</h5>

                                        <Link href={`/detailed-product/${item.slug}`} passHref >

                                            <BsFillEyeFill
                                                size={20}
                                                style={{ fill: "#C70A80", marginRight: "1rem", cursor: "pointer" }}
                                            />

                                        </Link>

                                        <BsFillHeartFill
                                            size={20}
                                            style={{ fill: "#F24C4C", marginRight: "5px", cursor: "pointer" }}
                                        />

                                    </div>
                                </div>


                            </>

                        )
                    })}




                </div>

            </div>



        </>
    )
}


export async function getServerSideProps(context) {

    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let singleproduct = context.query.slug;
    let singleuser = await Users.findOne({ email: context.query.slug });

    return {
        props: {
            singleuser: JSON.parse(JSON.stringify(singleuser)),
        }, // will be passed to the page component as props
    }
}

export default Usercart








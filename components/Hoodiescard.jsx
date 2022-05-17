import React, { useEffect } from 'react'
import Image from "next/image";
import sales from "../public/assets/sale.svg";
import Link from 'next/link'
import Head from "next/head";
import styles from "../styles/Shoptshirts.module.css"

const Hoodiescard = ({ product }) => {


    return (
        <>
            <Head>
                <title>ShopCoders | Hoodies</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Link href={`/detailed-product/${product.slug}`} passHref>
                <div className={`card ${styles.shirtcard}`} >

                    <div className="card-body">
                        <Image className={`${styles.product_cardimg}`} alt="..." src={product.img} width={300} height={300} />

                        <h5 className={`card-title`}>{product.name}</h5>
                        <p className={`card-text`}>{product.desc}</p>
                        <p className={`card-text`}>${product.price}</p>


                    </div>
                </div>
            </Link>
        </>
    )
}

export default Hoodiescard
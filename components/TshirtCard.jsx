import React from 'react'
import Image from "next/image";
import sales from "../public/assets/sale.svg";
import Link from 'next/link'
import Head from "next/head";
import styles from "../styles/Shoptshirts.module.css"

const TshirtCard = () => {
    return (
        <>
            <Head>
                <title>ShopCoders | T-Shirts</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Link href={"/detailed-product/lmao"} passHref>
                <div className={`card ${styles.shirtcard}`} >
                    <Image src={sales} className="card-img-top" alt="..." height={400} width={400} />
                    <div className="card-body">
                        <h5 className={`card-title`}>Card title</h5>
                        <p className={`card-text`}>Some quick example text to build on the card title and make up the bulk of the cards content.</p>

                    </div>
                </div>
            </Link>
        </>
    )
}

export default TshirtCard
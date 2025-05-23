import { GetStaticProps } from "next"

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe"
import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"

interface HomeProps {
    products: {
        id: string
        name: string
        imageUrl: string
        price: number
    }[]
}

export default function Home({ products }: HomeProps) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2.5,
            spacing: 48
        }
    });

    return (
        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>
            <HomeContainer ref={sliderRef} className="keen-slider">
                {products.map(product => {
                    return (
                        <Product className="keen-slider__slide" href={`/product/${product.id}`} key={product.id} prefetch={false}>
                            <Image src={product.imageUrl} width={520} height={480} alt="" />

                            <footer>
                                <strong>{product.name}</strong>
                                <span>{product.price}</span>
                            </footer>
                        </Product>
                    )
                })}
            </HomeContainer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    });


    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price;

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format((price.unit_amount ?? 0) / 100),
        }
    })

    return {
        props: {
            products
        },
        revalidate: 60 * 60 / 2
    }
}
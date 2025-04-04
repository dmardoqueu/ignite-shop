import { ImageContainer, ProductContainer, ProductDetails } from "@src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate at similique aliquid porro, id quidem quo? Quasi quam maxime voluptates fugiat deleniti esse omnis soluta? Optio consequatur enim esse?</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}
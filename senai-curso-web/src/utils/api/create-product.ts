import { RegisterProductState } from "../../pages/cadastro-produtos/Form";

export const createProduct = async (product: RegisterProductState) => {
    await fetch(`http://localhost:4000/api/v1/products`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(product)
    })
}
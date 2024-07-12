import { RegisterProductState } from "../../pages/cadastro-produtos/Form";

export const getProductById = async (id: string) => {
    const request = await fetch(`http://localhost:4000/api/v1/products/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await request.json();

    return data.data as RegisterProductState;
}
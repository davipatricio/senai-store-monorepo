import { FormEvent, useState } from "react";
import CreateProductForm, { RegisterProductState } from "./Form";
import { numberToPrice } from "../../utils/lib";
import { createProduct } from "../../utils/api/create-product";

export default function CadastroProdutos() {
  const [createdProducts, setCreatedProducts] = useState<
    RegisterProductState[]
  >([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onAdd = (data: RegisterProductState) => {
    createProduct(data)
    setCreatedProducts((old) => [...old, data]);
  };

  return (
    <form className="group" onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl">Cadastro de Produtos</h1>

      <div className="flex flex-col gap-4 my-10 max-w-[620px] w-full">
        <CreateProductForm onAdd={onAdd} />
      </div>

      {/* <div className="flex flex-col gap-1">
        {createdProducts.map((product) => (
          <div>
            {product.name} - {product.description.slice(0, 10)} -{" "}
            {numberToPrice(product.price)}
          </div>
        ))}
      </div> */}

      <div className="overflow-x-auto border-t border-t-gray-500 py-10">
        <table className="table-auto w-full">
          <thead>
            <tr className="flex gap-4">
              <th className="text-start w-[180px]">Nome</th>
              <th className="text-start w-[180px]">Descrição</th>
              <th className="text-start w-[180px]">Preço</th>
              <th className="text-start w-[180px]">Frete</th>
              <th className="text-start w-[180px]">Estoque</th>
              <th className="text-start w-[180px]">Pagamento</th>
              <th className="text-start w-[180px]">Garantia?</th>
            </tr>
          </thead>
          <tbody>
            {createdProducts.map((product) => (
              <tr className="flex gap-4" key={product.name}>
                <td className="w-[180px] overflow-hidden">{product.name}</td>
                <td className="w-[180px] overflow-hidden">
                  {product.description}
                </td>
                <td className="w-[180px] overflow-hidden">
                  {numberToPrice(product.price)}
                </td>
                <td className="w-[180px] overflow-hidden">
                  {numberToPrice(product.freight)}
                </td>
                <td className="w-[180px] overflow-hidden">
                  {product.quantity}
                </td>
                <td className="w-[180px] overflow-hidden">
                  {product.paymentMethods.join(", ")}
                </td>
                <td className="w-[180px] overflow-hidden">
                  {product.hasWarranty ? "Sim" : "Não"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}

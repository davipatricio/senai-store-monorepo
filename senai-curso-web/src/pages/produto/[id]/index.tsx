import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { numberToPrice } from "../../../utils/lib";
import { RegisterProductState } from "../../cadastro-produtos/Form";
import { getProductById } from "../../../utils/api/get-product-by-id";

const NamedPaymentMethods = {
  pix: 'Pix',
  card: 'cartão',
  boleto: 'boleto'
}

export default function ProductPage() {
  const [product, setProduct] = useState<RegisterProductState | null | undefined>(null);
  const { id } = useParams();

  useEffect(() => {
    const init = async () => {
      if (!id) return;

      const data = await getProductById(id);
      if (data) setProduct(data)
      else setProduct(undefined)
    }

    init();
  }, [id])

  if (product === null) {
    return (
      <h1>Carregando produto, aguarde...</h1>
    )
  };

  if (typeof product === 'undefined') {
    throw new Error('Not found')
  };

  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-x-10 gap-y-4 lg:flex-row w-full">
        <div className="max-w-[344px] m-auto sm:m-0 max-h-[344px] w-full h-full rounded-2xl overflow-hidden flex-shrink-[0.1]">
          <img src={product.imageBase64} className="hover:scale-110 transition-all" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="font-bold max-w-[670px] text-xl md:text-2xl">
              {product.name}
            </p>

            <span className="text-red-400 line-through font-bold">
              De {numberToPrice(product.price * 1.123)}
            </span>

            <span className="text-emerald-400 font-bold text-2xl">
              {numberToPrice(product.price)}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <button
              type="button"
              className="my-2 w-fit bg-emerald-700 hover:bg-emerald-800 focus:bg-emerald-800 text-xl p-2 px-4 rounded-xl font-bold"
            >
              Adquirir
            </button>

            <span className="text-neutral-200">
              Formas de pagamentos aceitas: {
                product.paymentMethods.map(method => NamedPaymentMethods[method]).join(', ')
              }
            </span>
            {
              product.paymentMethods.includes('boleto') && (
                <span className="text-neutral-300">
                  * O pagamento em boleto pode demorar até 3 dias úteis para ser
                  aprovado.
                </span>
              )
            }
          </div>
        </div>
      </header>

      <section className="text-md md:w-[80%]">
        <h1 className="text-2xl font-bold my-2">Descrição</h1>
        <p>
          {product.description}
        </p>
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { RegisterProductState } from "../../../pages/cadastro-produtos/Form";
import { getProducts } from "../../../utils/api/get-products";

interface ProductSectionProps {
  title: string;
}

export default function ProductSection({
  title,
}: ProductSectionProps) {
  const [products, setProducts] = useState<RegisterProductState[]>([])

  useEffect(() => {
    const init = async () => {
      const storeProducts = await getProducts();
      setProducts(storeProducts)
    }

    init();
  }, [])

  return (
    <section className="flex flex-col gap-4 rounded-xl p-4 bg-neutral-950 w-full overflow-x-auto">
      <h1 className="font-bold text-2xl">{title}</h1>

      <div className="flex gap-2">
        {products.length === 0 && (
          <p>Não há produtos cadastrados.</p>
        )}

        {products.map((product, i) => (
          <ProductCard key={i} id={product.id} image={product.imageBase64} name={product.name} price={product.price} />
        ))}
      </div>
    </section>
  );
}

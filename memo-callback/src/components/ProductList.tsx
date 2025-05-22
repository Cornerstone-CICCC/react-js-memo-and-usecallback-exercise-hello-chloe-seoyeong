import { useCallback, useEffect, useState } from "react";
import GetProductsButton from "./GetProductsButton";

type ProductProps = {
  id: number;
  title: string;
  price: number;
};
const ProductList = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const fetchProducts = useCallback(async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    setProducts(data.products);
  }, []);

  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts]);

  return (
    <div>
      <h2>ProductList</h2>
      <GetProductsButton onFetch={fetchProducts} />
      <ul>
        {products.map((product, i) => (
          <li key={i}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

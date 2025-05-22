import { useState } from "react";

type ProductProps = {
  id: number;
  title: string;
  price: number;
};
const ProductList = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    setProducts(data);
  };
  fetchProducts();

  console.log(products);
  return (
    <div>
      <h2>ProductList</h2>
    </div>
  );
};

export default ProductList;

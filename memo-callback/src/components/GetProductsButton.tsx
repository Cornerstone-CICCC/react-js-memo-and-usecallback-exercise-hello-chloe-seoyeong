type Props = {
  fetch: () => void;
};

const GetProductsButton = ({ fetch }: Props) => {
  console.log("Rendered Button Component");
  return <button onClick={fetch}>Fetch Products</button>;
};

export default GetProductsButton;

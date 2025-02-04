import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<{ name: string; price: number }[]>(
    []
  );

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
      },
    ]);
  };

  return (
    <>
      <h1>Re-store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - £{item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </>
  );
}
export default App;

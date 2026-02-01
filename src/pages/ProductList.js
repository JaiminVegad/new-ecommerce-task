import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: "15px" }}>
      <h2>Product List</h2>

      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, marginBottom: 20 }}
      />

      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
  },
};

export default ProductList;

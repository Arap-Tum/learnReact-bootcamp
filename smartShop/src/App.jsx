import { Route, Router , Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { products as productsData } from "./data/products";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} loading={loading} />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>

    <Footer />
    </>
  );
}

export default App;

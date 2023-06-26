"use client";
import { useState, useEffect } from "react";
// import products from "./utils/products";
import Product from "./components/Product";

const Homepage = ({}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:5005/api/products");
            console.log(res);
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };

        fetchProducts();
    }, []);
    return (
        <>
            <div className="max-w-7xl mx-auto grid  grid-cols-4 gap-6 px-8  mb-12">
                {products.map((product) => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        </>
    );
};
export default Homepage;

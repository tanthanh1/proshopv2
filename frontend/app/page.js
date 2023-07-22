"use client";
import { useState, useEffect } from "react";
// import products from "./utils/products";
import Product from "./components/Product";
import Loading from "./loading";

const Homepage = ({}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("in useEffect");
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:5005/api/products");
            console.log(res);
            const data = await res.json();
            // console.log(data);
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    if (loading) {
        console.log("inloading");
        return <Loading />;
    }

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

"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import products from "./utils/products";
import Product from "./components/Product";
import Loading from "./loading";
import { useGetProductsQuery } from "./slices/apiSlice";

const Homepage = ({}) => {
    // const [products, setProducts] = useState([]);

    // const dispatch = useDispatch();
    const { data: products, error, isLoading } = useGetProductsQuery();

    /// use useEffect and fetch to fetch data from line 16 to 36
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     console.log("in useEffect");

    //     const fetchProducts = async () => {
    //         const res = await fetch("http://localhost:5005/api/products");
    //         console.log(res);
    //         const data = await res.json();
    //         // console.log(data);
    //         setProducts(data);
    //         setLoading(false);
    //     };

    //     fetchProducts();
    // }, []);

    // if (loading) {
    //     console.log("inloading");
    //     return <Loading />;
    // }
    /// end

    return (
        <>
            <div className="max-w-7xl mx-auto grid  grid-cols-4 gap-6 px-8  mb-12">
                {isLoading ? (
                    <Loading />
                ) : (
                    products.map((product) => (
                        <Product product={product} key={product._id} />
                    ))
                )}
            </div>
        </>
    );
};
export default Homepage;

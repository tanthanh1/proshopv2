"use client";
import products from "../../utils/products";
import { useEffect, useState } from "react";

const page = ({ params }) => {
    const [productResult, setProductResult] = useState({});

    useEffect(() => {
        const fetchProductById = async () => {
            const res = await fetch(
                "http://127.0.0.1:5005/api/products/" + params.id
            );
            const data = await res.json();
            setProductResult(data);
        };
        fetchProductById();
    }, [params.id]);

    console.log(productResult);
    return (
        <div>
            <h3>{productResult.name}</h3>
            <p>{productResult.description}</p>
        </div>
    );
};
export default page;

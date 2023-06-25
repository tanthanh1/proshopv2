"use client";
import products from "../../utils/products";

const page = ({ params }) => {
    const productResult = products.find(
        (product) => product.name == decodeURIComponent(params.name)
    );

    console.log(productResult);
    return (
        <div>
            <h3>{productResult.name}</h3>
            <p>{productResult.description}</p>
        </div>
    );
};
export default page;

"use client";
import Link from "next/link";

const Product = ({ product }) => {
    return (
        <>
            <div className="border border-solid  rounded border-[rgba(0, 0, 0, 0.176)] shadow p-5">
                <img src={product.image} alt="" />
                <Link
                    className="text-center mt-5 block font-bold"
                    href={`/product/${product._id}`}
                >
                    {product.name}
                </Link>
                <p className="text-center">{product.price}</p>
            </div>
        </>
    );
};
export default Product;

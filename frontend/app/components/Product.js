"use client";
import Link from "next/link";

const Product = ({ product }) => {
    return (
        <>
            <div className="border border-solid  rounded border-[rgba(0, 0, 0, 0.176)] shadow p-5">
                <Link
                    className="text-center mt-2 block font-bold"
                    href={`/product/${product._id}`}
                >
                    <img className="mb-4" src={product.image} alt="" />
                    {product.name}
                </Link>
                <p className="text-center mt-2 font-medium text-[24px] text-[#7b8a8b]">
                    $ {product.price}
                </p>
            </div>
        </>
    );
};
export default Product;

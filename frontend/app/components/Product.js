"use client";
import Link from "next/link";
import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <>
            <div className="flex flex-col  items-center gap-4 border border-solid  rounded border-[rgba(0, 0, 0, 0.176)] shadow p-5">
                <Link
                    className="text-center mt-2 block font-bold flex-1"
                    href={`/product/${product._id}`}
                >
                    <img className="mb-4" src={product.image} alt="" />
                    {product.name}
                </Link>

                <div className="text-red-700 ">
                    <Rating score={product.rating} />
                </div>

                <p className="text-center  font-medium text-[24px] text-[#7b8a8b]">
                    $ {product.price}
                </p>
            </div>
        </>
    );
};
export default Product;

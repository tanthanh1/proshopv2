"use client";
import { useRouter } from "next/navigation";
import products from "../../utils/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { useGetProductByIdQuery } from "../../slices/apiSlice";
import Loading from "../../loading";
import Rating from "../../components/Rating";

const page = ({ params }) => {
    console.log(params);
    // const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
    const router = useRouter();
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty }));
        router.push("/cart");
    };

    const selectQtyHandler = (e) => {
        setQty(Number(e.target.value));
    };

    const {
        data: product,
        isLoading,
        error,
    } = useGetProductByIdQuery(params.id);

    // useEffect(() => {
    //     const fetchProductById = async () => {
    //         const res = await fetch(
    //             "http://127.0.0.1:5005/api/products/" + params.id
    //         );
    //         const data = await res.json();
    //         setProduct(data);
    //     };
    //     fetchProductById();
    // }, [params.id]);

    console.log(product);
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="max-w-6xl mx-auto">
                    <div className="flex gap-4">
                        <img className="w-1/2" src={product.image} alt="" />
                        <div className="w-1/3">
                            <h3 className="font-medium text-2xl">
                                {product.name}
                            </h3>
                            <Rating score={product.rating} />
                            <p>{product.description}</p>
                        </div>

                        <div className="w-1/6 border rounded self-start py-4">
                            <div className="flex flex-row border-b  gap-2 justify-between py-4 px-4">
                                <div>Price:</div>
                                <div>{product.price}</div>
                            </div>
                            <div className="flex flex-row border-b gap-2 justify-between  py-4 px-4">
                                <div>Status:</div>
                                <div>
                                    {product.countInStock === 0
                                        ? "Out of Stock"
                                        : "In stock"}
                                </div>
                            </div>
                            {/* Khong hien bang so luong neu ton kho =0     */}
                            {product.countInStock > 0 && (
                                <div className="flex flex-row border-b gap-2 justify-between  py-4 px-4">
                                    <div>Qty </div>
                                    <select
                                        className="border p-1 rounded"
                                        onChange={selectQtyHandler}
                                    >
                                        {[
                                            ...Array(
                                                product.countInStock
                                            ).keys(),
                                        ].map((x) => (
                                            <option value={x + 1} key={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div className="py-4 px-2 text-center ">
                                <button
                                    className="bg-primary-color text-white rounded px-5 py-2 disabled:text-slate-500"
                                    disabled={product.countInStock === 0}
                                    onClick={addToCartHandler}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default page;

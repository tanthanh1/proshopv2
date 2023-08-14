"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";


const page = () => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log("cart", cartItems);
    const dispatch = useDispatch();

    // xem lai doan nay co can async k???
    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({ ...product, qty }));
    };

    const removeFromCartHandler = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl text-gray-600 mb-6">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="bg-gray-200 p-4 rounded ">
                    Your cart is empty{" "}
                    <Link className="underline" href="/">
                        Go back
                    </Link>{" "}
                </div>
            ) : (
                cartItems.map((item) => (
                    <div>
                        {item.name}
                        {item.price}
                        <select
                            className="border p-1 rounded"
                            value={item.qty}
                            key={item._id}
                            onChange={(e) =>
                                addToCartHandler(item, Number(e.target.value))
                            }
                        >
                            {[...Array(item.countInStock).keys()].map((x) => (
                                <option value={x + 1} key={x + 1}>
                                    {" "}
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                        <button onClick={() => removeFromCartHandler(item)}>
                            <FaTrash />
                        </button>
                    </div>
                ))
            )}

            {cartItems.length !== 0 && (
                <div className=" mt-4">
                    <Link
                        href="/login?redirect=shipping"
                        className="border bg-primary-color py-1 px-4  rounded text-white"
                        disable
                    >
                        Proceed to Check out
                    </Link>
                </div>
            )}
        </div>
    );
};
export default page;

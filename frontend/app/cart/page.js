"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { FaTrash } from "react-icons/fa";

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
        <>
            <h1>Shopping Cart</h1>
            {cartItems.map((item) => (
                <div>
                    {item.name}
                    {item.price}
                    <select
                        className="border p-1 rounded"
                        name=""
                        id=""
                        value={item.qty}
                        onChange={(e) =>
                            addToCartHandler(item, Number(e.target.value))
                        }
                    >
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option value={x + 1}>{x + 1}</option>
                        ))}
                    </select>
                    <button onClick={() => removeFromCartHandler(item)}>
                        <FaTrash />
                    </button>
                </div>
            ))}
        </>
    );
};
export default page;

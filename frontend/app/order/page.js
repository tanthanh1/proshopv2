"use client";
import { useSelector, useDispatch } from "react-redux";
import { useCreateOrderMutation } from "../slices/apiSlice";
import { clearCart } from "../slices/cartSlice";
import { useRouter } from "next/navigation";
const page = () => {
    const {
        paymentMethod,
        cartItems,
        totalPrice,
        shippingPrice,
        itemsPrice,
        taxPrice,
    } = useSelector((state) => state.cart);
    // name: { type: String, required: false },
    // qty: { type: Number, required: false },
    // image: { type: String, required: false },

    // product: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     ref: "Product",
    // },

    const dispatch = useDispatch();
    const router = useRouter();

    const orderItems = cartItems.map(({ name, qty, _id: product, image }) => ({
        name,
        qty,
        image,
        product,
    }));

    console.log(orderItems);

    // const { _id, name } = useSelector((state) => state.auth.userInfo);

    const [createOrder, res] = useCreateOrderMutation();
    const clickOrderHandler = async () => {
        try {
            const result = await createOrder({
                paymentMethod,
                totalPrice,
                shippingPrice,
                itemsPrice,
                taxPrice,

                // user: _id,
                orderItems,
            });
            console.log(result);
            dispatch(clearCart());
            router.push(`/success?orderid=${result.data._id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {paymentMethod}
            <button onClick={clickOrderHandler}> Order </button>
        </div>
    );
};
export default page;

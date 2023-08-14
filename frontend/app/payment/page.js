"use client";
import { addPaymentMethod } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
    const { paymentMethod } = useSelector((state) => state.cart);

    const [payment, setPayment] = useState(paymentMethod);

    const { userInfo } = useSelector((state) => state.auth);
    const router = useRouter();
    useEffect(() => {
        if (!userInfo) {
            router.push("/login");
        }
    }, [userInfo]);

    const dispatch = useDispatch();

    const changePaymentMethodHandler = (e) => {
        console.log(e.target.value);
        dispatch(addPaymentMethod(e.target.value));
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="Paypal"
                    checked={paymentMethod === "Paypal"}
                    onChange={changePaymentMethodHandler}
                />
                Paypal
            </label>
             
            <label>
                <input
                    type="radio"
                    value="Cash"
                    checked={paymentMethod === "Cash"}
                    onChange={changePaymentMethodHandler}
                />
                Cash
            </label>
            <label>
                <input
                    type="radio"
                    value="Credit Card"
                    checked={paymentMethod === "Credit Card"}
                    onChange={changePaymentMethodHandler}
                />
                Credit Card
            </label>
            <Link
                className="border bg-primary-color py-1 px-4  rounded text-white"
                href="/order"
            >
                Continue
            </Link>
        </div>
    );
};
export default page;

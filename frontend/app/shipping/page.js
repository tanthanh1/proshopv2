"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShippingAddress } from "../slices/cartSlice";

const page = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);
    useEffect(() => {
        if (!userInfo) router.push("/login");
    }, [userInfo]);

    const shippingAddress = useSelector((state) => state.cart.shippingAddress);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    // const shippingAddress = { address, city, postalCode, country };

    const submitShippingAddressHandler = (e) => {
        e.preventDefault();
        dispatch(addShippingAddress({ address, city, postalCode, country }));
        router.push("/payment");
    };
    // router.push("/login");
    return (
        <div className="max-w-xs mx-auto ">
            <h1 className="text-4xl text-{#b5c0c1} mb-4"> Shipping</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label>Address:</label>

                    <input
                        className="px-2 border border-{#b5c0c1} rounded leading-8"
                        type="text"
                        name="email"
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label>City:</label>
                    <input
                        className="px-2  border border-{#b5c0c1} rounded leading-8"
                        type="text"
                        name="password"
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label>Postal Code:</label>

                    <input
                        className="px-2 border border-{#b5c0c1} rounded leading-8"
                        type="text"
                        name="email"
                        value={postalCode}
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label>Country:</label>

                    <input
                        className="px-2 border border-{#b5c0c1} rounded leading-8"
                        type="text"
                        name="email"
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="border bg-primary-color py-1 px-4  rounded text-white"
                        onClick={submitShippingAddressHandler}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};
export default page;

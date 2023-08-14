"use client";
import { useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useUpdateUserMutation } from "../slices/apiSlice";
import { setCredentials } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const page = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!userInfo) {
            router.push("/login");
        } else {
            setName(userInfo.name);
            setEmail(userInfo.email);
        }
    }, [userInfo]);

    const dispatch = useDispatch();
    const [updateUser, res] = useUpdateUserMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        const result = await updateUser({ name, email, password }).unwrap();

        if (result) dispatch(setCredentials({ ...result }));
        toast.success("Profile updated successfully");
        console.log(result);
        // router.push("/profile");
    };

    console.log("Van chay o day");

    return (
        <div className="max-w-xl mx-auto ">
            <h1 className="text-4xl text-{#b5c0c1} mb-6">Profile </h1>
            <form className="space-y-6" onSubmit={submitHandler}>
                <div>
                    <label className="block">Name:</label>
                    <div className="mt-2">
                        <input
                            className="mt-2"
                            className="block w-full px-2 border border-{#b5c0c1} rounded leading-8"
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block">Email:</label>
                    <div className="mt-2">
                        <input
                            className="mt-2"
                            className="block w-full px-2 border border-{#b5c0c1} rounded leading-8"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block">Password:</label>
                    <div className="mt-2">
                        <input
                            className="block w-full px-2 border border-{#b5c0c1} rounded leading-8"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    className="border bg-primary-color py-1 px-4  rounded text-white mr-2"
                    type="submit"
                    onClick={submitHandler}
                >
                    Update
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};
export default page;

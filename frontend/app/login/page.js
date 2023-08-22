"use client";

import { useLoginUserMutation } from "../slices/apiSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCredentials } from "../slices/authSlice";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
const page = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const searchParams = useSearchParams();
    const search = searchParams.get("redirect");
    const redirect = search ? search : "/";
    // const redirect = `/${search}`;
    console.log(redirect);

    // console.log("usePathname", search);
    // console.log("ssss", `/${search}`);

    useEffect(() => {
        if (userInfo) {
            // console.log(`/${search}`);
            router.push(redirect);
        }
    }, [userInfo]);

    const submitLoginHandler = (e) => {
        e.preventDefault();
        // console.log(email, password);
        loginUser();

        // router.push("/");
    };

    const [postUser, res] = useLoginUserMutation();

    const loginUser = async () => {
        console.log({ email, password });
        try {
            const result = await postUser({ email, password }).unwrap();

            dispatch(setCredentials({ ...result }));

            // if (result.status === 401) console.log("Error");
            // else console.log(result);
        } catch (error) {
            toast.error(error.data.message);
        }
    };
    console.log("loop");

    // useEffect(() => {
    //     loginUser();
    // }, []);

    return (
        <div className="max-w-xs mx-auto ">
            <h1 className="text-4xl text-{#b5c0c1} mb-4"> Sign In</h1>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label>Email:</label>

                    <input
                        className="px-2 border border-{#b5c0c1} rounded leading-8"
                        type="text"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label>Password:</label>
                    <input
                        className="px-2  border border-{#b5c0c1} rounded leading-8"
                        type="password"
                        name="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="border bg-primary-color py-1 px-4  rounded text-white mr-2 disabled:opacity-40"
                        type="submit"
                        disabled={res.isLoading}
                        onClick={submitLoginHandler}
                    >
                        Login
                    </button>
                    <Link href="/register">Register </Link>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};
export default page;

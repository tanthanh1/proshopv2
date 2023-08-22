"use client";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { useGetProfileQuery, useLogoutUserMutation } from "../slices/apiSlice";
import { setCredentials, logout } from "../slices/authSlice";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const Header = () => {
    const [isClient, setIsClient] = useState(false);
    // console.log("This is Header", process.env.NEXT_PUBLIC_BASE_URL);
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    let itemQty = 0;
    cartItems.map((x) => (itemQty = itemQty + x.qty));

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [logoutApiCall] = useLogoutUserMutation();

    // const { data, isLoading, error } = useGetProfileQuery();

    const { userInfo } = useSelector((state) => state.auth);
    // console.log(userInfo);
    // console.log(userInfo);

    const logoutHandler = async (e) => {
        e.preventDefault();
        await logoutApiCall().unwrap();
        dispatch(logout());
    };

    // console.log("abc", user);

    // if (data) {
    //     dispatch(setCredentials(data));
    // }

    return (
        <>
            <div className="bg-primary-color">
                <div className="h-[60px] flex justify-between items-center w-7xl max-w-[90%]  mx-auto text-white mb-12">
                    <Link className="leading-10" href="/">
                        ProShop
                    </Link>
                    <div className="flex justify-between gap-4">
                        <form className="space-x-4" action="">
                            <input
                                className="rounded pl-4 text-black outline-none h-full"
                                type="text"
                                placeholder="Search Products"
                            />
                            <button className="border rounded border-secondary-color px-4 py-1.5 hover:bg-secondary-color hover:text-black">
                                Search
                            </button>
                        </form>

                        {cartItems.length > 0 && isClient ? (
                            <Link className="self-center" href="/cart">
                                Cart {cartItems.reduce((a, c) => a + c.qty, 0)}
                            </Link>
                        ) : (
                            <Link className="self-center" href="/cart">
                                Cart
                            </Link>
                        )}

                        {userInfo && isClient ? (
                            <Menu
                                as="div"
                                className="relative self-center text-left"
                            >
                                <Menu.Button className="inline-flex justify-center items-center w-full hover:opacity-60">
                                    {userInfo.name}
                                    <ChevronDownIcon
                                        className="-mr-1 h-5 w-5 text-gray-400 "
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute  top-[30px] border bg-white w-[140px] text-gray-700 shadow-xl  rounded leading-10">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={`${
                                                        active && "bg-gray-200"
                                                    } w-full px-4  text-gray-500 text-left inline-block`}
                                                    href="/profile"
                                                >
                                                    Profile
                                                </Link>
                                            )}
                                        </Menu.Item>

                                        {/* className="hover:bg-gray-200 w-full px-4  text-gray-500" */}
                                        <Menu.Item>
                                            <button
                                                className="hover:bg-gray-200 w-full px-4  text-gray-500 text-left"
                                                onClick={logoutHandler}
                                            >
                                                Logout
                                            </button>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        ) : (
                            <Link className="self-center" href="/login">
                                Sign in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;

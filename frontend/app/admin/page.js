"use client";
import { addPaymentMethod } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    useGetOrdersQuery,
    useDeleteOrderMutation,
    useDeliverOrderMutation,
} from "../slices/apiSlice";
import Loading from "../loading";

const page = () => {
    console.log("day la dau trang moi khi chay");
    const { data, error: error2, isLoading } = useGetOrdersQuery();
    // console.log(data);
    const [deleteUser] = useDeleteOrderMutation();
    const [deliverOrder, { error }] = useDeliverOrderMutation();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!isLoading) setOrders([...data]);
    }, [isLoading]);

    const deleteOrderHandler = async (id) => {
        await deleteUser(id);
        const newOrder = orders.filter((order) => order._id !== id);
        setOrders([...newOrder]);
    };

    const markShippedOrderHandler = async (id) => {
        //
        const result = await deliverOrder(id)
            .unwrap()
            .then((payload) => {
                const newOrder = orders.map((order) => {
                    if (order._id === id)
                        return { ...order, isDelivered: true };
                    return order;
                });
                setOrders([...newOrder]);
            })
            .catch((error) => console.error("rejected", error));
    };

    return (
        <div>
            {/* {error && <h1>{JSON.stringify(error.data)}</h1>} */}
            {isLoading ? (
                <Loading />
            ) : (
                orders.map((order, index) => (
                    <div key={index}>
                        <h1>{order._id}</h1>
                        <button onClick={() => deleteOrderHandler(order._id)}>
                            Delete
                        </button>
                        {order.isDelivered ? (
                            <span className="text-blue-400">SHIPPED</span>
                        ) : (
                            <button
                                onClick={() =>
                                    markShippedOrderHandler(order._id)
                                }
                            >
                                Mark Shipped
                            </button>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};
export default page;

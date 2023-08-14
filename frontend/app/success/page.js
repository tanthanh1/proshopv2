"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const page = () => {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderid");
    return (
        <div>
            <h1>Thank you for shopping</h1>
            <p> Your order number is: {orderId} </p>
        </div>
    );
};
export default page;

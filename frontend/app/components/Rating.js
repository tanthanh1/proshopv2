"use client";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ score }) => {
    return (
        <div>
            <div className="flex">
                {[...Array(5).keys()].map((x) => {
                    if (Number(score) >= x + 1)
                        return <FaStar key={x} className="text-yellow-400" />;
                    if (Number(score) % 1 >= 0.5 && Number(score) > x)
                        return (
                            <FaStarHalfAlt
                                key={x}
                                className="text-yellow-400"
                            />
                        );
                    return <FaRegStar key={x} className="text-yellow-400" />;
                })}
            </div>
        </div>
    );
};
export default Rating;

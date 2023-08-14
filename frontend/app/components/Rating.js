"use client";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ score }) => {
    const phanDu = Number(score) % 1;
    const phanNguyen = Number(score) - phanDu;

    return (
        <div>
            <div className="flex">
                {[...Array(5).keys()].map((x) => {
                    if (Number(score) >= x + 1)
                        return <FaStar className="text-yellow-400" />;
                    if (Number(score) % 1 >= 0.5 && Number(score) > x)
                        return <FaStarHalfAlt className="text-yellow-400" />;
                    return <FaRegStar className="text-yellow-400" />;
                })}
            </div>

            {/* {score}
            {[...Array(phanNguyen).keys()].map((x) => (
                <FaStar className="text-yellow-400" />
            ))}
            {phanDu >= 0.5 ? (
                <FaStarHalfAlt className="text-yellow-400" />
            ) : (
                <FaRegStar className="text-yellow-400" />
            )}
            {phanNguyen < 4 &&
                [...Array(5 - (phanNguyen + 1)).keys()].map((x) => (
                    <FaRegStar className="text-yellow-400" />
                ))} */}
        </div>
    );
};
export default Rating;

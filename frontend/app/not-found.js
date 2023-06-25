import Link from "next/link";
const NotFoundPage = () => {
    return (
        <div>
            <h1 className="text-center">
                The page is not found, please go back to homepage
            </h1>
            <Link
                className="text-center mx-auto mt-12 w-[170px] block px-4 py-2 bg-custom-color text-primary-color rounded border"
                href="/"
            >
                Back To Home
            </Link>
        </div>
    );
};
export default NotFoundPage;

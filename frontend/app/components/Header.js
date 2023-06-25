import Link from "next/link";
const Header = () => {
    return (
        <>
            <div className="bg-primary-color">
                <div className="h-[60px] flex justify-between items-center max-w-7xl mx-auto text-white mb-12">
                    <Link className=" leading-10" href="/">
                        ProShop
                    </Link>
                    <div className="">
                        <form className="flex justify-between gap-4" action="">
                            <input
                                className="rounded pl-4 text-black outline-none"
                                type="text"
                                placeholder="Search Products"
                            />
                            <button className="border rounded border-secondary-color px-4 py-1.5 hover:bg-secondary-color hover:text-black">
                                Search
                            </button>
                            <Link className="self-center" href="/cart">
                                Cart
                            </Link>
                            <Link className="self-center" href="/signin">
                                Sign In
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;

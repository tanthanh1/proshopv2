import products from "./utils/products";
import Product from "./components/Product";

const Homepage = ({}) => {
    return (
        <>
            <div className="max-w-7xl mx-auto grid  grid-cols-4 gap-6 px-8  mb-12">
                {products.map((product) => (
                    <Product product={product} />
                ))}
            </div>
        </>
    );
};
export default Homepage;

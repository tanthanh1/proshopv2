const page = ({ params }) => {
    return (
        <div>
            <h2>Hello</h2>
            <h3 className="text-orange-50">{params}</h3>
        </div>
    );
};
export default page;

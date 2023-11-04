import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div className="w-56 h-56 text-center flex flex-col justify-center items-center border-red-500 border-2">
                <h2 className="text-3xl font-bold text-red-500">Error found!!!!!!!</h2>
                <p>Go back to the </p>
                <Link to='/'><button className="btn btn-primary">home page</button></Link>
            </div>
        </div>
    );
};

export default Error;
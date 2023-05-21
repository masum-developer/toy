import { Link } from "react-router-dom";

const AgeCategory = () => {
    return (

        <div>
            
            <h2 className="text-5xl text-center my-5">Shop Toys By Age</h2>
            <div className="flex flex-col space-y-2 md:flex-row justify-between items-center mt-5">
           <Link> <div className="rounded-full bg-info w-40 h-40 flex flex-col justify-center items-center text-xl font-bold text-white">
                <p>0-18</p>
                <p>Months</p>
            </div>
            </Link>
            <Link>
            <div className="rounded-full bg-red-300 w-40 h-40 flex flex-col justify-center items-center text-xl font-bold text-white">
                <p>18-36</p>
                <p>Months</p>
            </div>
            </Link>
            <Link>
            <div className="rounded-full bg-purple-400 w-40 h-40 flex flex-col justify-center items-center text-xl font-bold text-white">
                <p>3-5</p>
                <p>Years</p>
            </div>
            </Link>
            <Link>
            <div className="rounded-full bg-blue-300 w-40 h-40 flex flex-col justify-center items-center text-xl font-bold text-white">
                <p>6-8</p>
                <p>Years</p>
            </div>
            </Link>
            <Link>
            <div className="rounded-full bg-green-400 w-40 h-40 flex flex-col justify-center items-center text-xl font-bold text-white">
                <p>9-11</p>
                <p>Years</p>
            </div>
            </Link>
            <Link>
            <div className="rounded-full bg-orange-400 w-40 h-40 flex flex-col justify-center items-center text-xl font-bold text-white">
                <p>Big Kids</p>
                <p>12+</p>
            </div>
            </Link>
            
        </div>
        </div>

    );
};

export default AgeCategory;
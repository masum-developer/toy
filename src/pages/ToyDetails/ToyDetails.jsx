import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ToyDetails = () => {
    useTitle('ToyDetails');
    const toy = useLoaderData();
    const { toyName, sellerName, sellerEmail, toyPicture, price, rating, quantity, detail } = toy;

    return (
        <div>
            <h2>Toy details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl my-5">
                <div className="w-[30%]">
                <figure><img className="w-64 h-60" src={toyPicture} alt="Toy" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <p>Quantity: {quantity}</p>
                    
                    
                </div>
                <div className="card-body">
                <p>Seller Name: {sellerName}</p>
                    <p>Seller Email: {sellerEmail}</p>
                    <p>Details:{detail}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
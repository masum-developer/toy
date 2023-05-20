import { Link } from "react-router-dom";

const SingleCategory = ({shop}) => {
    const {_id,toyName,toyPicture,price,rating} = shop;
    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={toyPicture} alt="Shoes" className="rounded-xl w-40 h-40 img-fluid" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                    <Link to={`/toy/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;
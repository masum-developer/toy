import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../providers/AuthProvider";

const SingleCategory = ({shop}) => {
    const {_id,toyName,toyPicture,price,rating} = shop;
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleViewDetails = () => {
        if(!user){
            Swal.fire({
                title: 'Warning!',
                text: 'You have to login first',
                icon: 'success',
                confirmButtonText: 'Please Login'
              })
        }
       
          navigate(`/toy/${_id}`);
    }
    return (
        <div className="card ml-16  md:ml-0 w-64 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={toyPicture} alt="Shoes" className="rounded-xl w-40 h-40 img-fluid" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                 
                    <button className="btn bg-black" onClick={handleViewDetails}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;
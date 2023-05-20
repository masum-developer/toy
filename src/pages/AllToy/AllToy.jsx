import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToy = () => {
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("");

    
    useEffect(() => {
        fetch('http://localhost:5000/all-toy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toy-name/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };

    
    return (
        <div>
            <h2>No of Toy: {toys.length}</h2>
            <div className="mb-5 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="border-2 border-black mr-2 px-3"
                />
                <button className="btn btn-info btn-sm" onClick={handleSearch}>Search</button>
                
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                        <th>SL</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {toys?.map((toy, index) => (
                        <tr key={toy._id}>

                            <td>
                            {index + 1}
                            </td>
                            <td>
                                {toy.sellerName}
                            </td>
                            
                            <td>
                                {toy.toyName}
                            </td>
                            <td>
                            {toy.subCategory}
                            </td>
                            <td>
                            {toy.price}
                            </td>
                            
                            <td>{toy.quantity}</td>
                            <td>
                                <Link to={`/toy/${toy._id}`} className="btn btn-outline btn-info mr-2">View Details</Link>
                                
                            </td>

                        </tr>
                        ))}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToy;
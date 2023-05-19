import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/my-toy/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

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
            <h2 className="text-5xl text-center mb-5">My toy</h2>
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
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action Taken</th>
                        </tr>
                    </thead>
                    <tbody>
                    {toys?.map((toy, index) => (
                        <tr key={toy._id}>

                            <td>
                            {index + 1}
                            </td>
                            
                            <td>
                                {toy.toyName}
                            </td>
                            <td>
                            {toy.price}
                            </td>
                            <td>{toy.quantity}</td>
                            <td>
                                <button className="btn btn-outline btn-warning mr-2">Update</button>
                                <button className="btn btn-outline btn-error">Delete</button>
                            </td>

                        </tr>
                        ))}

                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default MyToy;
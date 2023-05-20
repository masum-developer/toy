import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {

    useTitle('MyToy');
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/my-toy/ascending/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleAscending = () => {
        fetch(`http://localhost:5000/my-toy/ascending/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    const handleDescending = () => {
        fetch(`http://localhost:5000/my-toy/descending/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }


    const handleDelete = id => {
        console.log(id);
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/toy-delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        const remaining = toys.filter(toy => toy._id !== id)
                        setToys(remaining)
                    }
                })
        }
    }


    return (
        <div>
            <h2 className="text-5xl text-center mb-5">My toy</h2>
            <div>
                <button onClick={handleAscending} className="btn btn-outline btn-info mr-3">Ascending</button>
                <button onClick={handleDescending} className="btn btn-outline btn-error">Descending</button>
            </div>

            <div className="overflow-x-auto w-full mt-3">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Price- $</th>
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
                                    {toy.toyName}
                                </td>
                                <td>
                                    {toy.price}
                                </td>
                                <td>{toy.quantity}</td>
                                <td>
                                    
                                    <Link to={`/toy-edit/${toy._id}`} className="btn btn-outline btn-warning mr-2">Edit</Link>
                                    <button onClick={() => handleDelete(toy._id)} className="btn btn-outline btn-error">Delete</button>
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
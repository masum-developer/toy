import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ToyEdit = () => {
    useTitle('EditToy');
    const toy = useLoaderData();
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        console.log(price,quantity,detail);
        const updatedToy = {price,quantity,detail}
        fetch(`https://my-avenger-server.vercel.app/toy-update/${toy._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('Data updated successfully');
            }
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                
                    <div className="card-body">
                    <h2 className="text-center text-3xl">Edit</h2>
                        <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" defaultValue={toy?.price} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" defaultValue={toy?.quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            
                            <textarea className="border-2" name="detail" id="" cols="30" rows="10" defaultValue={toy?.detail}></textarea>
                        </div>
                        
                        <div className="form-control mt-6">
                            
                            <input type="submit" className="btn btn-info border-0" value="Update" />
                        </div>
                        </form>
                        

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ToyEdit;
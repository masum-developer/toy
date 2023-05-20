import { useContext } from "react";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle('AddToy');
    const {user} = useContext(AuthContext);

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        data.sellerName=user.displayName;
        data.sellerEmail=user.email;
        
        fetch("http://localhost:5000/add-toy", {
          method: "POST",
          headers: {
             "Content-Type": "application/json" 
            },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if(result.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Toy added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
            
          });
        console.log(data);
    };

    return (
        <div className="w-1/3 mx-auto">
            <h2 className="text-3xl text-center mb-5">Add Toy</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-black pl-20 py-5 mb-5">
            <input
              className="form-control border-2 border-black"
              {...register("toyPicture")}
              placeholder="picture url"
              type="url"
              
            />
                <input className="form-control border-2 border-black mt-5" {...register("toyName",{ required: true, maxLength: 20 })} 
                placeholder="Toy Name"
                />
            
            <br />
                <select className="form-control border-2 border-black mt-5" {...register("subCategory")}>
                    <option value="marvel">Marvel</option>
                    <option value="avengers">avengers</option>
                    <option value="transformers">transformers</option>
                    <option value="starwars">starwars</option>
                    starwars
                </select>
                <br />
                <input className="form-control border-2 border-black mt-5"
                {...register("price", { required: true })}
                placeholder="price"
                type="number"
                />
                <br />
                <input className="form-control border-2 border-black mt-5"
                {...register("rating", { required: true })}
                placeholder="rating"
                type="number"
                />
                <br />
                <input className="form-control border-2 border-black mt-5"
                {...register("quantity", { required: true })}
                placeholder="quantity"
                type="number"
                />
                <br />
                
                <textarea placeholder="Details" className="form-control border-2 border-black mt-5"
                {...register("detail", { required: true })}>
                     
                </textarea>
                <br />
                <input className="btn px-5 py-3 mt-5 btn-info" type="submit" value="Add Toy" />
                <br />
                <br />
            </form>

        </div>
    );
};

export default AddToy;

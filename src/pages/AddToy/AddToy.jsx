import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
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
          });
        console.log(data);
    };

    return (
        <div className="w-1/3 mx-auto">
            <h2 className="text-3xl mb-5">Add Toy</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control border-2 border-black"
              {...register("toyPicture")}
              placeholder="picture url"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
                <input className="form-control border-2 border-black mt-5" {...register("toyName",{ required: true, maxLength: 20 })} 
                placeholder="Toy Name"
                />
            
            <br />
                <select {...register("subCategory")}>
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
                
                <textarea className="form-control border-2 border-black mt-5"
                {...register("detail", { required: true })}>
                     
                </textarea>
                <br />
                <input className="form-control px-5 py-3 mt-5 bg-green-400" type="submit" value="Add Toy" />
                <br />
                <br />
            </form>

        </div>
    );
};

export default AddToy;

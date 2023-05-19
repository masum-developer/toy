import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);

        createUser(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                
                    <div className="card-body">
                    <h2 className="text-center text-3xl">Register</h2>
                        <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Give photo url" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            
                            <input type="submit" className="btn bg-green-600 border-0" value="Register" />
                        </div>
                        </form>
                        <p>Already have an account <Link className="text-green-600 font-bold" to='/login'>Login</Link> </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
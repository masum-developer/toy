import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle} from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import Swal from 'sweetalert2'

const Register = () => {
    useTitle('Register');
    const [error,setError] = useState('');
    const {createUser,userProfile,logOut,googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
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
            console.log(result.user)
            setError('')
              userProfile(name,photo)
              .then(r=>console.log(r))
              .catch(error=>console.log(error))
              logOut();
              
                Swal.fire({
                    title: 'Success',
                    text: 'Register done',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            
              navigate('/login');
              
        
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/')
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
                            
                            <input type="submit" className="btn bg-black border-0" value="Register" />
                        </div>
                        </form>
                        <p>Already have an account <Link className="text-info font-bold" to='/login'>Login</Link> </p>
                        <p className='text-error'>{error}</p>
            <button onClick={handleGoogleLogin} className='btn btn-info mt-3'> <FaGoogle></FaGoogle> - Login with Google</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, json } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const { login } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        login(email, password)
            .then(result=>{
                console.log(result.user)
                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }

                //update user data
                fetch('https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/users/',{
                    method: "PATCH",
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.modifiedCount>0){
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'User data updated successfully!',
                        })
                    }
                })
            })
            .catch(error=>{
                console.error(error);
            })
    }


    return (
        <div className="hero bg-base-100 py-5 md:py-10" data-aos="fade-up" data-aos-duration="1000">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl md:text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className="flex justify-center items-center my-3">
                            <h2>Do not have an account? Please <Link className="text-blue-700 font-semibold underline hover:no-underline" to="/register">Register</Link></h2>
                        </div>
                        <hr />
                        <div className="flex justify-evenly my-3">
                            <Link to="" className="flex items-center justify-center border border-gray-300 rounded-lg p-3">
                                <div className="flex gap-2">
                                    <img width="28" height="20" src="https://img.icons8.com/color/30/google-logo.png" alt="google-logo" />
                                    <span className="text-lg font-medium">
                                        Login with Google
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');


        // if (password.length < 6) {
        //     return setErrorMessage('Password must be 6 character or longer')
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     return setErrorMessage('Password must be one Uppercase letter')
        // }
        // else if (!/[!@#$%^&*()_+{}|:;<>,.?~]/.test(password)) {
        //     return setErrorMessage('Password must be one special character')
        // }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const creationTime = result.user?.metadata?.creationTime;
                const user = { name, email, password, creationTime}

                fetch('https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: 'User created successfully!',
                            })
                        }
                    })
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'error!',
                    text: 'User created failed!',
                })
            })

    }


    return (
        <div className="hero bg-base-100 py-5 md:py-10" data-aos="fade-up" data-aos-duration="1000">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-4xl md:text-4xl font-bold">Register now!</h1>
                </div>


                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="flex justify-center items-center my-3">
                            <h2>Already have an account? Please <Link className="text-blue-700 font-semibold underline hover:no-underline" to="/login">Login</Link></h2>
                        </div>
                        <hr />

                        <div>
                            <h2 className="text-center font-medium text-2xl">Register with</h2>
                            <div className="flex justify-evenly my-3">
                                <Link to="" className="flex items-center justify-center border border-gray-300 rounded-lg p-3">
                                    <div className="flex gap-2">
                                        <img width="28" height="20" src="https://img.icons8.com/color/30/google-logo.png" alt="google-logo" />
                                        <span className="text-lg font-medium">
                                            Google
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
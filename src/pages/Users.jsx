import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    console.log(users)


    const handleDelete = (id) => {
        // console.log(id)



        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this Coffee?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers)
                        }
                    })
            }
            else if (!result.isConfirmed) {
                Swal.fire(
                    'Canceled!',
                    'The user was not deleted.',
                    'success'
                )
            }
        })


        // fetch(`https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/users/${id}`, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.deletedCount > 0) {
        //             Swal.fire(
        //                 'Deleted!',
        //                 'Your Coffee has been deleted.',
        //                 'success'
        //             )
        //             const remainingUsers = users.filter(user => user._id !== id);
        //             setUsers(remainingUsers)
        //         }
        //     })







        // fetch(`https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/coffee/${_id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.deletedCount > 0) {
        //             Swal.fire(
        //                 'Deleted!',
        //                 'Your Coffee has been deleted.',
        //                 'success'
        //             )
        //             const remainingCoffees = coffees.filter(item => item._id !== _id);
        //             setCoffees(remainingCoffees)
        //         }
        //     })

    }
    return (
        <div className="max-w-screen-xl p-3 mx-auto">
            <h2>Total Users: {users.length}</h2>

            <div>
                <div className="overflow-x-auto border border-gray-500 rounded-xl p-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Creation time</th>
                                <th>Last Login</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* tbody */}
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.creationTime}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <button onClick={() => handleDelete(user._id)} title="delete this user?" className="px-4 py-2 rounded-lg bg-base-200 hover:text-red-600">X
                                    </button>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)

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
                fetch(`https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remainingCoffees = coffees.filter(item => item._id !== _id);
                            setCoffees(remainingCoffees)
                        }
                    })
            }
            else if (!result.isConfirmed) {
                Swal.fire(
                    'Canceled!',
                    'The coffee was not deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="flex flex-col lg:flex-row items-center shadow-xl rounded-xl p-2 min-h-[200px]">
            <div>
                <img src={photo} alt="" />
            </div>
            <div className="flex justify-between items-center gap-5 w-full px-2">
                <div className="space-y-3 text-base md:text-lg font-medium">
                    <h2>Name: <span className="font-bold"> {name}</span></h2>
                    <h2>Supplier: <span className="font-bold">{supplier}</span> </h2>
                    <h2>Quantity: <span className="font-bold">{quantity}pcs</span></h2>
                </div>
                <div>
                    <div className="btn-group btn-group-vertical space-y-2">
                        <button title="view" className="btn bg-[#D2B48C]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </button>
                        <Link to={`update-coffee-details/${_id}`}>
                            <button title="edit" className="btn bg-[#3C393B] text-white hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} title="delete" className="btn bg-[#EA4744] text-white hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
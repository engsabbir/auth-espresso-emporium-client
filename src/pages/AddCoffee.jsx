import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const quantity = form.get('quantity');
        const supplier = form.get('supplier');
        const taste = form.get('taste');
        const category = form.get('category');
        const details = form.get('details');
        const photo = form.get('photo');
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)


        fetch('https://espresso-emporium-with-crud-server-387iqt11l.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'This coffee is added!',
                      })
                }
            })
    }

    return (
        <div className="max-w-screen-xl mx-auto p-3">
            <div className="my-5 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                <Link to="/" className="font-page-title text-xl md:text-2xl font-bold hover:text-[#a72b2b]">Back To Home</Link>
            </div>
            <form onSubmit={handleAddCoffee} className="mb-10 md:mb-16 lg:mb-20 px-2 md:px-10 lg:px-20 py-2 md:py-10 lg:py-14 bg-[#F4F3F0] rounded-lg">
                <h2 className="font-page-title text-3xl md:text-4xl font-medium text-center">Add Coffee</h2>
                <h4 className="font-other-font my-5 text-center text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h4>
                <div>
                    {/* form name and quantity row */}
                    <div className="md:flex gap-5 mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="">
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="">
                                <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] text-2xl font-page-title" />
            </form>

        </div>
    );
};

export default AddCoffee;
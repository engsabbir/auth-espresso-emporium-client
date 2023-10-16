
const Navbar = () => {
    const navStyle = {
        backgroundImage: "url('https://i.ibb.co/V9TpJB2/15.jpg')"
    }
    return (
        <div style={navStyle} className="flex justify-center items-center py-2">
            <div className="flex gap-5 items-center justify-between">
                <img className="w-16 h-20" src="https://i.ibb.co/Dw0tPHP/logo1.png" alt="" />
                <h2 className="font-page-title text-white font-bold text-4xl md:text-5xl">Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Navbar;
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="mx-auto w-max">
            <div className="flex gap-5 text-lg font-medium">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>
        </div>
    );
};

export default Header;
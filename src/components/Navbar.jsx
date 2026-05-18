import { Menu, ShoppingCartIcon, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                <Link to="/" className="font-bold text-xl">GADGET<span className="text-emerald-600">MART</span></Link>

                <ul className="hidden md:flex space-x-8">
                    <li><NavLink to="/"
                        className={({ isActive }) => `
                     ${isActive ? "hover:text-emerald-600 border-b-2 text-emerald-600 border-emerald-600" : "text-black hover:text-emerald-600 "}`}>Home</NavLink></li>
                    <li><NavLink to="/shop" className={({ isActive }) => `
                     ${isActive ? "hover:text-emerald-600 border-b-2 text-emerald-600 border-emerald-600" : "text-black hover:text-emerald-600 "}`}>Shop</NavLink></li>
                    <li><NavLink to="/Contact" className={({ isActive }) => `
                     ${isActive ? "hover:text-emerald-600 border-b-2 text-emerald-600 border-emerald-600" : "text-black hover:text-emerald-600 "}`}>Contact</NavLink></li>
                </ul>
                <div className="flex items-center space-x-4">
                    <button className="text-slate-700 hover:text-emerald-600 transition-colors">
                        <ShoppingCartIcon className="w-6 h-6 " />
                    </button>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700">
                            {isOpen ? <X className="w-6 h-6 text-slate-700 hover:text-emerald-600 transition-colors" /> : <Menu className="w-6 h-6 text-slate-700 hover:text-emerald-600 transition-colors" />}
                        </button>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="absolute right-0 left-0 top-full md:hidden bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 pb-4 flex flex-col font-medium">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-emerald-600">Home</NavLink>
                    <NavLink to="/shop" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-emerald-600">Shop</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-emerald-600">Contact</NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;
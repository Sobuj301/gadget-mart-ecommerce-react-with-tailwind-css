import { Menu, Moon, ShoppingCartIcon, Sun, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    const [isOpen, setIsOpen] = useState(false);
    const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Shop", to: "/shop" },
        { name: "Contact", to: "/contact" },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-colors duration-500">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                
                {/* LOGO */}
                <Link to="/" className="font-bold text-xl tracking-tight z-10">
                    GADGET<span className="text-emerald-600">MART</span>
                </Link>

                {/* DESKTOP LINKS - CENTERED */}
                <ul className="hidden md:flex flex-1 justify-center gap-10 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `transition-all duration-300 ${isActive ? "text-emerald-600" : "hover:text-emerald-600"}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* ACTIONS */}
                <div className="flex items-center gap-4 z-10">
                    <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                        {dark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <Link to="/cartPage" className="relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                        <ShoppingCartIcon size={20} />
                        {totalItem > 0 && (
                            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-emerald-600 rounded-full animate-in zoom-in">
                                {totalItem}
                            </span>
                        )}
                    </Link>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE SLIDE-IN MENU */}
            <div 
                className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                }`}
            >
                <div className="flex flex-col items-center gap-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium hover:text-emerald-600 transition-colors"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
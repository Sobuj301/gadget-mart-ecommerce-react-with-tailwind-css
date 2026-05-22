import { Menu, Moon, ShoppingCartIcon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    )

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [dark])


    return (
        <div className="fixed w-full top-0 z-50 backdrop-blur border-b border-slate-200 dark:border-slate-800">

            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">

                {/* LOGO */}
                <Link
                    to="/"
                    className="font-bold text-xl"
                >
                    GADGET
                    <span className="text-emerald-600">MART</span>
                </Link>

                {/* NAV LINKS */}
                <ul className="hidden md:flex space-x-8">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-emerald-600 border-b-2 border-emerald-600 pb-1"
                                    : "hover:text-emerald-600 transition"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-emerald-600 border-b-2 border-emerald-600 pb-1"
                                    : "hover:text-emerald-600 transition"
                            }
                        >
                            Shop
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-emerald-600 border-b-2 border-emerald-600 pb-1"
                                    : "hover:text-emerald-600 transition"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>

                </ul>

                {/* ACTIONS */}
                <div className="flex items-center gap-4">

                    {/* DARK MODE */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="hover:text-emerald-600 transition"
                    >
                        {dark ? <Sun /> : <Moon />}
                    </button>

                    {/* CART */}
                    <button className="hover:text-emerald-600 transition">
                        <ShoppingCartIcon className="w-6 h-6" />
                    </button>

                    {/* MOBILE MENU */}
                    <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X /> : <Menu />}
                    </button>

                </div>

            </nav>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 md:hidden bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0B1220] dark:text-[#F9FAFB]  backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 pb-4 flex flex-col">

                    <NavLink className="py-2 hover:text-emerald-600" to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </NavLink>

                    <NavLink className="py-2 hover:text-emerald-600" to="/shop" onClick={() => setIsOpen(false)}>
                        Shop
                    </NavLink>

                    <NavLink className="py-2 hover:text-emerald-600" to="/contact" onClick={() => setIsOpen(false)}>
                        Contact
                    </NavLink>

                </div>
            )}
        </div>
    );
};

export default Navbar;
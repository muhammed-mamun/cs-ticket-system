import { FaPlus, FaBars } from "react-icons/fa6";

export default function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4  md:px-8">
            {/* 1. Left Side: Mobile Menu + Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars className="text-xl" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="capitalize">Home</a></li>
                        <li ><a className="uppercase">FAQ</a></li>
                        <li><a className="capitalize">Changelog</a></li>
                        <li><a className="capitalize">Blog</a></li>
                        <li><a className="capitalize">Download</a></li>
                        <li><a className="capitalize">Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold tracking-tight">CS — Ticket System</a>
            </div>

            {/* 2. Right Side: Links AND Button grouped together */}
            <div className="navbar-end flex items-center gap-2">
                {/* Desktop Links - They stay close to the button because they share this container */}
                <ul className="menu menu-horizontal hidden lg:flex px-1 gap-1 font-medium lowercase">
                   <li><a className="capitalize">Home</a></li>
                        <li ><a className="uppercase">FAQ</a></li>
                        <li><a className="capitalize">Changelog</a></li>
                        <li><a className="capitalize">Blog</a></li>
                        <li><a className="capitalize">Download</a></li>
                        <li><a className="capitalize">Contact</a></li>
                </ul>

                {/* Gradient Button */}
                <a className="btn border-none text-white font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition-all flex items-center gap-2 px-4">
                    <FaPlus /> 
                    <span className="hidden sm:inline">New Ticket</span>
                </a>
            </div>
        </div>
    )
}
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-black text-white h-[12vh] flex justify-center">
            <div className="w-4/5 flex items-center justify-between">
                <Link exact to="/">
                    <h1 className="font-bold text-2xl">
                        <span className="font-normal text-base">Simple</span>
                        Video Game
                    </h1>
                </Link>
                <div className="flex gap-x-3">
                    <NavLink
                        exact
                        to="/create-new"
                        className={(navData) =>
                            navData.isActive
                                ? "bg-white text-black border-2 border-white py-0.5 cursor-pointer px-2 rounded"
                                : "bg-balck text-white border-2 border-white py-0.5 cursor-pointer px-2 rounded hover:bg-white hover:text-black"
                        }
                    >
                        Create New
                    </NavLink>
                    <NavLink
                        exact
                        to="/"
                        className={(navData) =>
                            navData.isActive
                                ? "bg-white text-black border-2 border-white py-0.5 cursor-pointer px-2 rounded"
                                : "bg-balck text-white border-2 border-white py-0.5 cursor-pointer px-2 rounded hover:bg-white hover:text-black"
                        }
                    >
                        Home
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;

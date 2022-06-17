import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

function Search({ data, setData }) {
    let [value, setValue] = useState("");

    useEffect(() => {
        handleSearch();
    });
    let handleSearch = async (e) => {
        e.preventDefault();
        return await axios
            .get(`http://localhost:3006/users?q=${value}`)
            .then((response) => {
                setData(response.data);
                setValue("");
            })
            .catch((err) => console.log(err));
    };
    let usersNumber = data.length;

    return (
        <div className="flex items-center justify-center gap-x-5">
            <form className="flex">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search user name"
                    className="border-2 border-black rounded-l h-8 w-96 p-3"
                />
                <button
                    onClick={handleSearch}
                    className="bg-black flex justify-center items-center w-8 h-8 rounded-r cursor-pointer hover:bg-neutral-700"
                >
                    <FaSearch className="text-white " />
                </button>
            </form>
            <div className="flex flex-col items-center justify-center">
                <p>Number Of Users: {usersNumber}</p>
            </div>
        </div>
    );
}

export default Search;

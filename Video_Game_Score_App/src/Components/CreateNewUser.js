import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateNewUser() {
    let navigate = useNavigate();

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [address, setAddress] = useState("");

    let handleCreate = async (e) => {
        e.preventDefault();

        await axios
            .post("http://localhost:3006/users", {
                name: name,
                email: email,
                address: address,
                status: "Active",
                gamesNumber: 0,
            })
            .then(() => {
                navigate(`/`);
                window.location.reload();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="h-[80.5vh] flex justify-center pt-20">
            <form className="flex flex-col gap-2 w-4/5">
                <h1 className="font-bold text-3xl mb-5">
                    Fill This Empty Fields
                </h1>
                <input
                    className="border-2 border-black rounded px-2 w-2/5"
                    type="text"
                    placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="border-2 border-black rounded px-2 w-2/5"
                    type="email"
                    placeholder="user@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border-2 border-black rounded px-2 w-2/5"
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <div className="flex gap-2">
                    <button
                        className="px-4 py-1 bg-black rounded text-white cursor-pointer hover:bg-neutral-700 w-fit mt-5"
                        onClick={handleCreate}
                    >
                        Create
                    </button>
                    <Link
                        exact
                        to="/"
                        className="px-4 py-1 bg-white rounded text-black cursor-pointer border-solid border-2 border-black -700 w-fit mt-5 hover:bg-neutral-200"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default CreateNewUser;

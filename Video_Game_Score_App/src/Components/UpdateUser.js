import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function UpdateUser({
    loading,
    setLoading,
    userName,
    setUserName,
    gamesPlayed,
    setGamesPlayed,
    userStatus,
    setUserStatus,
    userEmail,
    setUserEmail,
    userAddress,
    setUserAddress,
}) {
    let { id } = useParams();
    let navigate = useNavigate();

    // loading handle
    useEffect(() => {
        if (loading) loadingReturn();
        if (userName) setLoading(false);
    }, [loading]);
    setLoading(true);
    let loadingReturn = () => {
        return <h1>Loading</h1>;
    };

    let handleUpdate = async (e) => {
        e.preventDefault();

        await axios
            .put(`http://localhost:3006/users/${id}`, {
                name: userName,
                email: userEmail,
                address: userAddress,
                status: userStatus,
                gamesNumber: gamesPlayed,
            })
            .then(() => {
                navigate(`/`);
                window.location.reload();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="h-[80.5vh] flex justify-center pt-20">
            <div className="w-4/5">
                <h1 className="font-bold mb-7 text-3xl">
                    Update {userName}'s Info
                </h1>
                <form className="flex flex-col gap-2">
                    <input
                        className="border-2 border-black rounded px-2 w-2/5"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        className="border-2 border-black rounded px-2 w-2/5"
                        type="number"
                        value={gamesPlayed}
                        onChange={(e) => setGamesPlayed(e.target.value)}
                    />
                    <input
                        className="border-2 border-black rounded px-2 w-2/5"
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <input
                        className="border-2 border-black rounded px-2 w-2/5"
                        type="text"
                        value={userAddress}
                        onChange={(e) => setUserAddress(e.target.value)}
                    />
                    <div className="flex gap-x-2 mt-5">
                        <button
                            className="px-4 py-1 bg-black rounded text-white cursor-pointer hover:bg-neutral-700 w-fit"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                        <Link
                            exact
                            to={`/user-profile/${id}`}
                            className="px-4 py-1 bg-white rounded text-black cursor-pointer border-solid border-2 border-black -700 w-fit hover:bg-neutral-200"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;

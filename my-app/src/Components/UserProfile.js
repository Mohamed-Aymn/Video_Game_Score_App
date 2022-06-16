import { axios } from "axios";
import React from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";

function UserProfile({
    data,
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

    setLoading(true);
    if (loading)
        return (
            <h1 className="flex items-center justify-center text-3xl font-bold h-[80.5vh] bg-neutral-200">
                Loading
            </h1>
        );

    let setUserData = () => {
        data.map((user) => {
            if (user.id == id) {
                setUserName(user.name);
                setGamesPlayed(user.gamesNumber);
                setUserStatus(user.status);
                setUserEmail(user.email);
                setUserAddress(user.address);
                setLoading(false);
            }
            return <></>;
        });
    };

    return (
        <div className="h-[80.5vh] flex justify-center pt-20">
            <div className="w-4/5">
                {setUserData()}
                <div>
                    <h1 className="font-bold text-3xl">{userName}</h1>
                    <p>
                        Played <span className="font-bold">{gamesPlayed}</span>{" "}
                        games
                    </p>
                </div>
                <ul className="my-7">
                    <li>
                        <span className="font-bold">Status:</span> {userStatus}
                    </li>
                    <li>
                        <span className="font-bold">Email:</span> {userEmail}
                    </li>
                    <li>
                        <span className="font-bold">Address:</span>{" "}
                        {userAddress}
                    </li>
                </ul>
                <div>
                    <div className="flex text-white w-fit gap-2 my-2">
                        <Link
                            exact
                            to="/"
                            className="px-4 py-1 bg-black rounded text-white cursor-pointer hover:bg-neutral-700 "
                        >
                            Back To Search Page
                        </Link>
                        <NavLink
                            exact
                            to={`/update/${id}`}
                            className="px-4 py-1 bg-white rounded text-black cursor-pointer border-solid border-2 border-black w-fit hover:bg-neutral-200"
                        >
                            Update Info
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

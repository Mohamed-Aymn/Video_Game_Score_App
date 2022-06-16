import React from "react";
import SmallDivider from "./SmallDivider";
import { Link, Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function Users({ data, setData, hide, loading, setLoading }) {
    if (loading)
        return (
            <h1 className="flex items-center justify-center text-3xl font-bold h-[68.3vh] bg-neutral-200">
                Loading
            </h1>
        );

    let usersNumber = data.length;
    let counter = 0;
    let dividerFunction = () => {
        if (counter + 1 < usersNumber) {
            counter += 1;
            return <SmallDivider />;
        }
    };
    let hideImplementation = (hide, user) => {
        if (!hide) {
            return (
                <div>
                    played
                    <span className="font-bold px-1">{user.gamesNumber}</span>
                    games
                </div>
            );
        }
    };

    return (
        <div exact path="/">
            <ul className="h-[68.3vh] overflow-y-auto">
                {data.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link
                                to={`user-profile/${user.id}`}
                                className="flex justify-center items-center py-3 my-1 hover:bg-neutral-200 cursor-pointer"
                            >
                                <span className="font-bold px-1">
                                    {user.name}
                                </span>
                                {hideImplementation(hide, user)}
                            </Link>
                            {dividerFunction(user)}
                        </li>
                    );
                })}
            </ul>
            <Routes>
                <Route exact path="/user-profile" element={<UserProfile />} />
            </Routes>
        </div>
    );
}

export default Users;

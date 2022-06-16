import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateNewUser from "./Components/CreateNewUser";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import UpdateUser from "./Components/UpdateUser";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const App = () => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [userName, setUserName] = useState("");
    let [gamesPlayed, setGamesPlayed] = useState("");
    let [userStatus, setUserStatus] = useState("");
    let [userEmail, setUserEmail] = useState("");
    let [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3006/users")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Router>
            <div className="App h-[70.3vh] overflow-x-auto">
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Home
                                data={data}
                                setData={setData}
                                loading={loading}
                                setLoading={setLoading}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/create-new"
                        element={<CreateNewUser />}
                    />
                    <Route
                        exact
                        path="/user-profile/:id"
                        element={
                            <UserProfile
                                data={data}
                                loading={loading}
                                setLoading={setLoading}
                                userName={userName}
                                setUserName={setUserName}
                                gamesPlayed={gamesPlayed}
                                setGamesPlayed={setGamesPlayed}
                                userStatus={userStatus}
                                setUserStatus={setUserStatus}
                                userEmail={userEmail}
                                setUserEmail={setUserEmail}
                                userAddress={userAddress}
                                setUserAddress={setUserAddress}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/update/:id"
                        element={
                            <UpdateUser
                                loading={loading}
                                setLoading={setLoading}
                                userName={userName}
                                setUserName={setUserName}
                                gamesPlayed={gamesPlayed}
                                setGamesPlayed={setGamesPlayed}
                                userStatus={userStatus}
                                setUserStatus={setUserStatus}
                                userEmail={userEmail}
                                setUserEmail={setUserEmail}
                                userAddress={userAddress}
                                setUserAddress={setUserAddress}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

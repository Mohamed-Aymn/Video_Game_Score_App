import React, { useState } from "react";
import Search from "./Search";
import Users from "./Users";
import Divider from "./Divider";
import HideButton from "./HideButton";

function Home({ data, setData, loading, setLoading }) {
    let [hide, setHide] = useState(false);

    return (
        <div className="">
            <div className="flex justify-center h-[10vh]">
                <div className="flex items-center justify-between gap-x-5 w-4/5">
                    <Search data={data} setData={setData} />
                    <HideButton
                        data={data}
                        setData={setData}
                        hide={hide}
                        setHide={setHide}
                    />
                </div>
            </div>
            <Divider />
            <Users
                data={data}
                setData={setData}
                hide={hide}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    );
}

export default Home;

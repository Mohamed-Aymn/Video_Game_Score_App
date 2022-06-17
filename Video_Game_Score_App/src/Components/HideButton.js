import React from "react";

function HideButton({ hide, setHide }) {
    let hideHandler = () => {
        setHide(!hide);
    };
    let hideButtonHandler = () => {
        return !hide ? <span>Hide</span> : <span>Show</span>;
    };
    return (
        <div className="flex flex-col my-2 items-center justify-center gap-1">
            <div className="flex justify-center align-center gap-2 py-3">
                <button
                    onClick={hideHandler}
                    className="px-4 py-2 bg-black rounded text-white cursor-pointer hover:bg-neutral-700"
                >
                    <span className="font-bold">{hideButtonHandler()}</span> The
                    Number Of Games Played
                </button>
            </div>
        </div>
    );
}

export default HideButton;

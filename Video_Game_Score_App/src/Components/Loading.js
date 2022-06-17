import React from "react";

/* 

* {
    margin: 0;
    font-family: "Be Vietnam Pro";
    font-size: 3px;
}

section {
    height: 100vh;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    height: 3rem;
    width: 3rem;
    border: rgba(128, 128, 128, 0.384) solid 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
}

.circle {
    height: 1.2rem;
    width: 1.2rem;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    left: -1.2rem;
    animation: loading infinite 2s linear;
    transform-origin: 2.7rem 50%;
}

@keyframes loading {
    100% {
        transform: rotate(360deg);
    }
}

*/

function Loading() {
    return (
        <div className="m-0 h-screen bg-neutral-200 flex justify-center align-center ">
            <div className="h-12 w-12 border-4 border-indigo-600 rounded-full flex justify-left align-center relative">
                <div className="h-5 w-5 bg-black rounder-full absoulte right-5" />
            </div>
        </div>
    );
}

export default Loading;

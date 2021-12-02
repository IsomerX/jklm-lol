import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Game from "./components/Game";
import FourOhFour from "./components/FourOhFour";
import firebase from "./fire/firebase";
import { useNavigate } from "react-router-dom";

const db = firebase.database();

const App = () => {
    const inputRef = useRef();
    const userRef = useRef();
    const navigate = useNavigate();

    const newRoomHandler = () => {
        const gamesRef = db.ref("games");
        const newGame = gamesRef.push();
        newGame.set({
            code: inputRef.current.value,
            users: [userRef.current.value],
        });
        console.log(newGame.key);
        // replace the url with the new game code in react router
        navigate(`/jklm-lol/${userRef.current.value}/${newGame.key}`, {replace: false});
    };

    return (
        <div>
            <Routes>
                <Route path="/jklm-lol" element={<Home />} />
                <Route path="/jklm-lol/:user/:code" element={<Game/>} />
                <Route path="/*" element={<FourOhFour />} />
            </Routes>
            <input ref={userRef} placeholder="username" required/>
            <input ref={inputRef} placeholder="enter room name" required/>
            <button onClick={newRoomHandler}>Make a new room</button>
        </div>
    );
};

export default App;

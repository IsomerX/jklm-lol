import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import firebase from "firebase";

const Game = () => {
    const db = firebase.database();
    const param = useParams();
    const userName = param.user;
    const code = param.code;
    const dbRef = db.ref(`games/${code}`);

    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        for(let i in allPlayers){
            if(allPlayers[i] === userName){
                return;
            }
        }
        dbRef.child("users").push(userName);
        dbRef.on("value", (snapshot) => {
            let users = snapshot.val().users;
            setAllPlayers(users);
            console.log(users);
        });
    }, [dbRef, userName, allPlayers]);

    const printPlayers = () => {
        const players = [];
        for(let i in allPlayers){
            players.push(<li key={i}>{allPlayers[i]}</li>);
        }
        return players;
    }

    return (
        <div>
            <h1>Game</h1>
            {printPlayers()}
        </div>
    );
};

export default Game;

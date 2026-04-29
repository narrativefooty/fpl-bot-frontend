import axios  from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [team, setTeam] = useState([]);

    function redirectTeam(type) {
        navigate(`/predictor/${type}`);
    }
    return(
        <>
        <div>
            <h1>Prem Predictor</h1>
            <h2> Select a type of bot</h2>
            <div>
                <button onClick={redirectTeam("view_information")}> View Information </button>
                <button onClick={redirectTeam("statistician")}> Statistician </button>
                <button onClick={redirectTeam("defensive_minded")}> Defensive Minded</button>
            </div>
        </div>
        </>
    )
}
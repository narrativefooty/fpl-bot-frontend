import axios  from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate()
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [team, setTeam] = useState([]);

    function redirectTeam(type) {
        navigate(`/teamscore/${type}`);
    }
    return(
        <>
        <div>
            <h1>Prem Predictor</h1>
            <h2> Select a type of bot</h2>
            <div>
                <button onClick={() => redirectTeam("view_information")}> View Information </button>
                <button onClick={() => redirectTeam("statistician")}> Statistician </button>
                <button onClick={() => redirectTeam("defensive_minded")}> Defensive Minded</button>
            </div>
        </div>
        </>
    )
}
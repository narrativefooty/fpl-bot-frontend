import axios  from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [team, setTeam] = useState([]);

    
    return(
        <>
        <div>
            <h1>Prem Predictor</h1>
            <h2> Select a type of bot</h2>
            <div>
                <button> View Information </button>
                <button> Statistician </button>
                <button> Defensive Minded</button>
            </div>
        </div>
        </>
    )
}
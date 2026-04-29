import axios  from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [team, setTeam] = useState([]);


    return(
        <>
        <div>
            <h1>Homepage</h1>

        </div>
        </>
    )
}
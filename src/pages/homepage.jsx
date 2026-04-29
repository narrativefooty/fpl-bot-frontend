import axios  from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get("fpl-bot-backend.vercel.app/api/home").then((teams)=>{
            setTeam(teams.data.team)
            setScore(teams.data.week)
            setTotalScore(teams.data.total)
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <>
        <div>
            <h1>Homepage</h1>
            {team.map((player, index) => (
                <div key={index}>
                    <p>{player.name}</p>
                    <p>{player.score}</p>
                </div>
            ))}
        </div>
        </>
    )
}
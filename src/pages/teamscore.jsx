import axios  from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function Teamscore() {
    const {type} = useParams();
    const navigate = useNavigate()
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [starters, setStarters] = useState([]);
    const [benched, setBenched] = useState([]);
    const [budget, setBudget] = useState([])
    const [defenders, setDefenders] = useState([])
    const [midfielders, setMidfielders] = useState([])
    const [forwards, setForwards] = useState([])

    useEffect(() => {
    axios.get(`https://fpl-bot-backend.vercel.app/api/scores/${type}`)
    .then(res => {
        setStarters(res.data.starters);
        setBenched(res.data.benchers);
        setBudget(res.data.budget);
        setTotalScore(res.data.total);
        setScore(res.data.score)
        setDefenders(res.data.starters.filter(p=>p.position == 2 && p.bench_order == 0))
        setMidfielders(res.data.starters.filter(p=>p.position == 3 && p.bench_order == 0))
        setForwards(res.data.starters.filter(p=>p.position == 4 && p.bench_order == 0))

    })
    .catch(err => console.log("API Error: ",err));
    }, [type]);
    
    return(
        <>
        <div>
            <h1>Prem Predictor</h1>
            <h2> { type } </h2>
            {Array.isArray(starters) && starters.length > 0 ? (
            <div id = "gk">
                <div className="player-box">
                    <h1>{starters.find(p=>p.position == 1 && p.bench_order == 0)?.name}</h1>
                </div>
                <div className="player-box">
                {defenders.map((Player,index) => (
                    <h1 key = {index}>{Player.name}</h1>
                    )
                )}
                </div>
                <div className="player-box">
                {midfielders.map((Player,index) => (
                    <h1 key = {index}>{Player.name}</h1>
                    )
                )}
                </div>
                <div className="player-box">
                {forwards.map((Player,index) => (
                    <h1 key = {index}>{Player.name}</h1>
                    )
                )}
                </div>
            </div>
            ) : (
                <h1> loading... </h1>
            )}
        </div>
        </>
    )
}
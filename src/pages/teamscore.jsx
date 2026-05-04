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

    useEffect(() => {
    axios.get(`https://predictor-backend-nine.vercel.app/api/scores/${type}`)
    .then(res => {
        setStarters(res.data.starters);
        setBenched(res.data.submitted);
        setLocked(res.data.locked);
        setTotalScore(res.data.total);
        setScore(res.data.score)
    })
    .catch(err => console.log("API Error: ",err));
    }, [type]);
    
    return(
        <>
        <div>
            <h1>Prem Predictor</h1>
            <h2> { type } </h2>
            <div id = "gk">
                <div className="player-box">
                    <h1>{starters.find(p=>p.position == 1 && p.bench_order == 0)?.name}</h1>
                </div>
            </div>
        </div>
        </>
    )
}
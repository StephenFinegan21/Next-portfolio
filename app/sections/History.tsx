import { history } from "../../data/history"
import HistoryCard from "../components/HistoryCard"

export default function History() {
    
    return(
        <>
        <div>
            {history.map((position) => (
                <HistoryCard key={position.id} position={position} />
            ))}
            
        </div>
        </>
    )

}
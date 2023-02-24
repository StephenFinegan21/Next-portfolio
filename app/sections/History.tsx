import { history } from "../../data/history"
import HistoryCard from "../components/HistoryCard"

export default function History() {
    
    return(
        <>
        <div className=" md:h-[60vh] md:flex flex-col items-center justify-start my-24  ">
            {history.map((position) => (
                <HistoryCard key={position.id} position={position} />
            ))}
            
        </div>
        </>
    )

}
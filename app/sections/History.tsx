import { history } from "../../data/history"
import HistoryCard from "../components/HistoryCard"

export default function History() {
    
    return(
        <>
        <div className=" md:h-[40vh] md:flex flex-col items-center justify-start my-24 md:my-0 ">
            {history.map((position) => (
                <HistoryCard key={position.id} position={position} />
            ))}
            
        </div>
        </>
    )

}
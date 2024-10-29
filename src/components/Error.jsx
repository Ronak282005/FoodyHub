import { useRouteError } from "react-router-dom"

export default function Error(){
    const err = useRouteError()
    return(
        <div>
            <h1>Opps!!!</h1>
            <h2>Something Went Wrong.</h2>
            <h2>{err.status}:{err.statusText}</h2>
            <h2>{err.data}</h2>
        </div>
    )
}
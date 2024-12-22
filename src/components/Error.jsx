import { useRouteError } from "react-router-dom";
import './Error.css'; // Import the CSS file at the top of your component

export default function Error() {
    const err = useRouteError();
    return (
        <div className="error-container">
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong.</h2>
            <h2>{err.status}: {err.statusText}</h2>
            <p>{err.data || "Please try again later."}</p>
        </div>
    );
}
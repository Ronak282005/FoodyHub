export default function Shimmer(){
    let shimmerContainer = {
        display:"flex",
        flexWrap:"wrap",
        width:"90%",
        margin:"2rem  auto",
        justifyContent:"center",
        gap: "1rem",
    }
    let shimmerCard = {
        padding: "1rem",
        width:"200px",
        backgroundColor:"#EEEEE4",
        height:"232px",
        borderRadius:"5px",
        boxShadow:"5px 5px 10px 0 gray",
    }
    return(
        <div className="shimmer-container" style={shimmerContainer}>
            <div className="shimmer-card" style={shimmerCard}></div>
            <div className="shimmer-card" style={shimmerCard}></div>
            <div className="shimmer-card" style={shimmerCard}></div>
            <div className="shimmer-card" style={shimmerCard}></div>
            <div className="shimmer-card" style={shimmerCard}></div>
            <div className="shimmer-card" style={shimmerCard}></div>
            <div className="shimmer-card" style={shimmerCard}></div>
            <div className="shimmer-card" style={shimmerCard}></div>
        </div>
    )
}
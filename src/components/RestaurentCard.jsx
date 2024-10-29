import {CDN_URl} from "../utils/constants"

export default function RestaurentCard(prop){

    let cardStyle={
        padding: "1rem",
        width:"200px",
        borderRadius:"5px",
        boxShadow:"5px 5px 10px 0 gray",
    }

    const {resData} = prop
    const {name,cloudnaryImageId,cuisines,avgRating,costForTwo,sla} = resData.info
   
    return(
        <div className="res-card" style={cardStyle}>
            <img src={CDN_URl+cloudnaryImageId} alt="rest image" />
            <h3>{name}</h3>
            <h4>{cuisines[0]}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes!</h4>
        </div>
    )
}

// export const withPromotedLable = ()=>{
//     return(prop)=>{
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurentCard {...prop}/>
//             </div>
//         )
//     }
// }


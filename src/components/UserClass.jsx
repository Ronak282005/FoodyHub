import React from "react";

class UserClass extends React.Component{
    constructor(prpos){
        super(prpos)

        this.state = {
            count : 0,
        }
        
    }
    render(){
        const {name,location,Handel} = this.props
        const {count} = this.state
        return(
            <div>
                <h3>count : {count}</h3>
                <button onClick={()=>{this.setState({count : this.state.count+1})}}>Increase Count!</button>
                <h3>{name}</h3>
                <h3>{location}</h3>
                <h3>{Handel}</h3>
            </div>
        )
    }
}

export default UserClass
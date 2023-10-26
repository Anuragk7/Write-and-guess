import { useEffect, useState } from "react";

export default function Result(props){
   
    return (
        <div className="bar">
            {props.res.map( (i,index) => {
                return (<div key = {index} style={{height: `${i*40}px`}} className="bars"></div>)
            })}
        </div>

    )
    
    


}
import { useEffect, useState } from "react";

export default function Result(props){
    const colors = ["bg-cyan-400", "bg-yellow-400","bg-cyan-400", "bg-yellow-400","bg-pink-400", "bg-yellow-400","bg-cyan-400", "bg-green-400","bg-purple-400", "bg-blue-400"]
    return (
        <div className=" flex flex-col  items-center p-4 bg-slate-200 m-4">
            <div className="flex flex-row ">
                <div className="flex flex-col items-center justify-between mb-10">
                    {props.res.map( (i,index) => {
                        const x = (10 - index)*10
                      return (<div> {x}</div>)
                        
                    })}
                    <div>0</div>
                </div>
                <div className="flex">
                    {props.res.map( (i,index) => {
                        return (<div key = {index} className="flex flex-col justify-end items-center">
                            <div  key = {index*2 +1}className= {`bara ${colors[index]}` } style={{height: `${i*100}% `}} >
                               
                            </div>
                            <div  key = {index*4 +2} className=" min-w-3 m-2 text-center">
                                {index}
                            </div>
                        </div>
                        )
                    })}
                </div>
                
            </div>
           
        </div>

    )
    
    


}
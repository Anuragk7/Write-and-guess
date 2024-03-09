import { useEffect, useState } from "react";

export default function Result(props){
   
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
                        return (<div key = {index} className="flex flex-col justify-end">
                            <div style={{height: `${i*100}%`}} className=" bg-cyan-400 m-2 ">

                            </div>
                            <div className=" min-w-3 m-2 text-center">
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
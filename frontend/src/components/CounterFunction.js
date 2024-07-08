import React ,{useState} from "react";

function CounterFunction(){

    let [number , setNumber]=useState(0)

    function increment(){

        setNumber(++number)
    }

    return (<div>
        <h3>functional component</h3>
        <h1>Counter ={number}</h1>
        <button onClick = {e=> increment()}>INCREEMENT</button>
    </div>
    )
}

export default CounterFunction;
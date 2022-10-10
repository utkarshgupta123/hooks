import React, {useState} from "react";

const StateTutorial = () => {
    const [counter,setCounter] = useState(0);

    const increment = () =>{
        setCounter (counter + 1);
    }

 return(
    <div>
        {counter}
        <button onClick={increment}>INCREMENT</button>
    </div>
 )
};

export default StateTutorial;
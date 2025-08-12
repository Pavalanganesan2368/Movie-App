import {React} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
const Render = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component rendered or updated");
    }, []);

    useEffect(() => {
        const render = document.getElementById("render");

    }, []);

    useEffect(() => {
        setInterval(() => {
            document.title = `Clicked ${count} times`;
        }, 20000)

        return() => {
            clearInterval();
        }
    },[count]);

    return(
        <div style={{textAlign: "center"}}>
            <h2>Count : {count}</h2>
            <h2 id='render'>It Render is {count}</h2>
            <h2>Another Render Count : {count}</h2>
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </div>
    );
}

export default Render;
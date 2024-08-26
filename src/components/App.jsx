import React, { useState } from 'react';
import './App.css';


function App(){
    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime);
    function showTime(){
        const updateTime = new Date().toLocaleTimeString();
        setTime(updateTime);
    }
    setInterval(showTime, 1000);

    return (
        <div className='container'>
            <h1>{currentTime}</h1>
            <button onClick={showTime}>Get Time</button>
        </div>
    );
}

export default App;
import React from 'react';
import { useState } from 'react';
import axios from 'axios'
    

function Timer() {

    var [timer1, setTimer1] = useState(0)
    var [timer2, setTimer2] = useState(0)

    const intervalId1 = setInterval(() => {
        setTimer1(timer1+1)
        if (timer1 == 10){
            clearInterval(intervalId1)
        }
    }, 1000)

    const intervalId2 = setInterval(() => {
        setTimer2(timer2+1)
        if (timer2 == 10){
            clearInterval(intervalId2)
        }
    }, 1000)

    const postItem = {
        timer1 : "1",
        timer2 : "2"
    }

    const addData = () =>{
        if (timer1 == timer2) {
            postData()
        }
    }

    const postData = (postItem) => {
        axios.post("http://localhost:3000/data", {
            timer1 : postItem.timer1,
            timer2 : postItem.timer2
        })
        .then(() => {
            console.log("success")
        }).catch(err => {
            console.log("failure", err)
        })
    }

    return (
        <div>
            {timer1}
            <br></br>
            {timer2}
            <br></br>
            <button onClick={postData}>Post</button>
        </div>
    );
}

export default Timer;
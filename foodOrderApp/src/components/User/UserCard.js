import React, { useEffect, useState } from "react";
import userData from '../../utils/resData.json';


const UserCard = (props) => {
    const {name} = props;
    console.log(userData);
    const [count, setCount] = useState(0)


    useEffect(()=>{
        // setInterval(()=>{
        //     console.log("set interval from useEffect");
        // },1000);
        console.log("userEffect when component loads on screen")

        return ()=>{
            console.log("userEffect return when the component gets unmounted");
        }
    },[])

    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h2>Count : {count}</h2>
            <h3>Location : Jodhpur</h3>
            <h4>Contact : jitendrasuthar995@gmail.com </h4>
        </div>
    )
}

export default UserCard;
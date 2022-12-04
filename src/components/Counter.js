import React from "react";

export default function Counter(props){
    return(
        <svg width="25" height="25" className="counter">
            <circle cx="12" cy="12" r="10" fill="#aeaeae" />
            <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="10px" fontFamily="Arial" dy=".2em" dx="-1px">{props.count}</text>
        </svg>
    )
}
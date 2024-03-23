import React from "react";


export default function Button(props,buttonName,customClass,value){
    return(
        <>
            <button
            className={props.customClass}
            value={props.value}
            >
                {props.buttonName}
            </button>
        </>
    )
}
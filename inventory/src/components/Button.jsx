import React from "react";


export default function Button(props,buttonName,customClass,value,type){
    return(
        <>
            <button
            className={props.customClass}
            value={props.value}
            type = {props.type}
            >
                {props.buttonName}
            </button>
        </>
    )
}
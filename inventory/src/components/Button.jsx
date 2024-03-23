import React from "react";


export default function Button(props,buttonName,customClass){
    return(
        <>
            <button
            className={props.customClass}
            >
                {props.buttonName}
            </button>
        </>
    )
}
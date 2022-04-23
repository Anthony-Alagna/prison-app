import React, { FunctionComponent } from 'react'
import "./piece.scss"

interface MessageProps{
    message:string
}

function FunctionalComponent(props:MessageProps) {
    return (
        <>
        <h1>
            Welcome {props.message}
        </h1>
        </>
    );
    
}
export default Function
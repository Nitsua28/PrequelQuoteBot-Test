import React from "react";

export function TestActorPictureComponent(props:{link:string}){
    return(<>
        <img src={props.link} alt="test"></img>
    </>)
}
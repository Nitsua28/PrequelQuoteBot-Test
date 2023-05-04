import React from "react";

export function TestGifComponent(props:{ID:string,link:string}){
    const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        //event.currentTarget.src = "https://cdn.presslabs.com/wp-content/uploads/2018/03/custom-error-pages.png";
        event.currentTarget.alt = "Error ID: "+ props.ID + "\n";
        console.log("Error ID: "+ props.ID);
      };
    return(<>
        <img onError={(e)=>onError(e)} src={props.link} alt="test" width={0}></img>
    </>)
}

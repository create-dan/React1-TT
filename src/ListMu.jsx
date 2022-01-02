import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const ListMu =(props)=>{
    return(
        <>
        <div className="toDoStyle">

        <span><DeleteIcon/></span>

        </div>
        <li>{props.text}</li>

</>
    )
}

export default ListMu;
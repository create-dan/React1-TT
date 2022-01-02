import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListMu from "./ListMu";



const ToDoListMu =()=>{

    const [item , setItem] = useState("");

    const [newItem , setNewItem] = useState([]);

    const itemEvent =(event)=>{

          setItem(event.target.value);
    }

    const listOfItems =()=>{

        setNewItem((prevVal)=>{

            return [...prevVal,item];

        })

        setItem("");

    }

    return(
        <>
            <div className="mainDiv">
             <div className="centerDiv">

             <br/>

             <h1>To Do List</h1>

             <input type="text" value={item} placeholder= "Add a Todo" onChange={itemEvent}/>

             <Button className="newBtn" onClick={listOfItems}><AddIcon/> </Button>

             <br />

             <ol>
                
         {    newItem.map ((val , index)=>{
                 return <ListMu key={index} text={val}/>
             })}
                
             </ol>

             <br />

             </div>

            </div>
        </>
    )

      
};

export default ToDoListMu;
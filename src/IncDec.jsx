import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';


const IncDec = () =>{

    const [num, setNum] = useState(0);

    const incNum =()=>{
        setNum(num+1);
    }

    const decNum =()=>{

        if(num<=0)
        {
            setNum(0);
            alert("you have rached to 0");
        }
        else
        {
            setNum(num-1);
        }
        
    }

    return(
        <>
            <div className="mainDiv">
            <div className="centerDiv">

                
                <h1>{num}</h1>
                <div className="btn-div">



                <Tooltip title="Add">
                <Button onClick={incNum} className="incBtn"> <AddIcon/> </Button>
                </Tooltip>

                <Tooltip title="Delete">
                <Button onClick={decNum} className="btn"> <RemoveCircleOutlineIcon/>
                </Button>
                </Tooltip>

                </div>
            </div>

            </div>
        </>
    )


}

export default IncDec;
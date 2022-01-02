
// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App()
// {
//     return (
//         <>

//         <Heading/>
//         <Para/>
//         <List/>

         





//         </>
//     )
// }

// export default App;


// import React from "react";
// import "./index.css";

// function App()
// {
    
// let currDate = new Date().toLocaleDateString();
// let currTime = new Date().toLocaleTimeString();
// let hour = new Date().getHours();



// let message = "";



// const cssStyle = {

// }

// if(hour>=1 && hour<12)
// {
//    message = "Good Morning";
//    cssStyle.color = "green";
// }else if(hour>=12 && hour<19)
// {
//     message = "Good Afternoon";
//     cssStyle.color= "red";

// }
// else
// {
//     message="Good Night";
//     cssStyle.color ="yellow";
// }


// return(
//     <>

//  {/* <div>
//      <h1>Hello Everyone ,<span style={cssStyle}> {message}</span></h1>
//      </div> */}

     
//     </>
// )


// }

// export default App;



// import React, {useState} from "react";



// Increment and Decrement on clicking button project

// const App = () =>{
  


//     const state = useState();


// const [count , setCount] = useState(1);

// const IncNum = () =>{
    
    
//     setCount(count+1);
// }

// const [count2 , decCount] = useState(100);

// const decNum = () =>{
//     decCount(count2-1);
// }


//     return(
//         <>

//         <div>
//             <h1 id="heading">{count}</h1>
//             <button onClick={IncNum}>Clike Me</button>
//             </div>


//             <div>
//             <h1 id="heading">{count2}</h1>
//             <button onClick={decNum}>Clike Me</button>
//             </div>
//         </>
//     )

// }




// Timer watch on refreshing project 

// import React, {useState} from "react";
// const App = () =>{

//   let newTime = new Date().toLocaleTimeString();

//   const [ctime , setCtime] = useState(newTime);

//   const updateTime = () =>{
//     newTime = new Date().toLocaleTimeString();
//     setCtime(newTime);

//   }

//     return(
//         <>
//               <div>
//             <h1 id="heading">{ctime}</h1>
//              <button onClick={updateTime} >Clike Me</button>         
//                </div>
//         </>
//     )
// }



// Digital Clock in ReactJs


// import React, {useState} from "react";

// const App = () =>{

//   let time = new Date().toLocaleTimeString();

//   const [ctime, setCtime] = useState(time);

//   const UpdateTime = () =>{

//      time = new Date().toLocaleTimeString();
//     setCtime(time);
//   }

//   setInterval(UpdateTime, 1000);

//   return (
//     <>
//       <h1>{ctime}</h1>
//     </>
//   )
// }




// Handling Events in reactsjs

// import React, {useState} from "react";


// const App = () =>{



//   const purple = "#000";
    

//   const [backColor, setBackColor] = useState(purple);

//   const [Name , setName ] = useState("button");

//   const bgChange = () =>{

//   let newBg = "#fff";

//   setBackColor(newBg);
//   setName("cliked on button")
    
//   }

  

//   const doubleColor = () =>{

//     setBackColor(purple);
//     setName(" button")
//   }

//   return(
//     <>
 
//        <div style={ { backgroundColor: backColor}} >
//          <button className="btn" onClick={bgChange}  onDoubleClick={doubleColor}> {Name} </button>
//          </div>

//     </>
//   )
// }





// Forms in react js


// import React, {useState} from "react";


// const App = () =>{



// //   const [lastname , setLastName] = useState("");

// //   const [fullName , setFullName] = useState("");

// //  const [lastNameNew , setLastNameNew] = useState("");

//   // const inputEvent = (event) =>{


   

//   //   setName(event.target.value);

//   //   console.log(event.target.value);
//   // } 


//   // const inputEventTwo = (event) =>{

//   //   setLastName(event.target.value);

//   // }



//   const [fullname , setFullName] = useState( {

//     fname: "",
//     lname: "",
//   });



//   const inputEvent = (event) =>{


   

//     // setName(event.target.value);

//     console.log(event.target.value);
//     console.log(event.target.name);

//     const value = event.target.value;
//     const name = event.target.name;


//     setFullName( (preValue)=>{

   

//         if(name==="fName")
//         {
//           return{

//             fname: value,
//             lname: preValue.lname,

//           };
         
  
//         }else  if(name==="lName")
//         {
//           return{

//             fname: preValue.fname,
//             lname: value,

//           };

//         }
       

      

     

//     })





//   } 




//   const changeName = (event) =>{


//      event.preventDefault();
//     //  setLastNameNew(lastname);
    
//     // setFullName(name);

//     alert("form submitted");
//   }








//   return(

//   <>

//       <>

//       <form onSubmit={changeName}>

//       <div>
//            <h1>Hello {fullname.fname} {fullname.lname}</h1>

//            <input type="text" placeholder ="Enter Your Name"
//            name="fName"
//              onChange={inputEvent} 
//               value={fullname.fname}
//            />

//            <br/>


//            <input type="text" placeholder ="Enter Your last name"
//            name="lName"
//              onChange={inputEvent}  
//              value={fullname.lname}
//            />



//            <button className="btn" type="submit">Submit</button>

//            </div>

//            </form>
       

//       </>
 
//   </>

// )

// }



// export default App;




import React, {useState} from "react";
import ToDoList from "./ToDoList";


const App = () =>{


  const [inputList , setInputList] = useState("");
  const [Items , setItems] =useState([]); // we are creating an array to store all 
                                          // values of list then we will display that

const itemEvent = (event) =>{

  // whenever we are writing something in input field , same thing should render below it.

  setInputList(event.target.value);
    
}

const listOfItems = () =>{

  // Whenever we are clicking the button we will add the value of input in
  // a array , and at the same time we will display that value in the list.


  setItems( (oldItems) =>{

    return [...oldItems , inputList]
  })

  setInputList("");



}


const deleteItem = (id) =>{
  console.log("working");

  setItems( (oldItems) =>{
    return oldItems.filter( (arrElem , index)=>{

    return index!==id;

    })
  })
}



  return(
    <>
         <div className="mainDiv">
         <div className="centerDiv">
         <br/>

         <h1>To Do list</h1>
         <br/>

         <input type="text" placeholder="Add a todo" 
         value={inputList}
         onChange={itemEvent} />

         <button onClick={listOfItems}>+</button>

         <ol>
           {/* <li>{inputList}</li> */}



      {   Items.map( (itemval , index) =>{

           {/* return <li>{inputList}</li> */}

      return     <ToDoList

                 id={index}
               key ={index}
             text={itemval}
             onSelect={deleteItem}
           />  // created a componect named ToDoList 
         })}



         </ol>



         </div>

         </div>
    </>
  )
}







export default App;
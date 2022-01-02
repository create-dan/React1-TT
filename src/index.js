
// import React from 'react';
// import ReactDOM from 'react-dom';



// // var h1 = document.createElement('h1');
// // h1.innerHTML = "javascript react";
// // document.getElementById('root').appendChild(h1);





// ReactDOM.render(
//     <>
// {/* <h1> 6th video</h1>
//     <p>this is para</p> 
//     <h1>This is heading</h1> */}

//   <h1>Top 5 Programmin Languages</h1>

//   <h3>Check The List</h3>

//   <ol>
//       <li> C++</li>
//       <li> Java</li>
//       <li> Python</li>
//       <li> javascript</li>
//   </ol>




//     </>,
//     document.getElementById('root'));


// import React from "react";
// import ReactDOM from "react-dom";


// const fname = "dnyaneshwar ";
// const lname = "shinde";









// ReactDOM.render(
    
//     <>

//     <h2> {` My name is ${fname} ${lname}`}</h2>
//     <h1>jsx in react {lname}</h1>

//     <p>This is para</p>

//     <h2>lets use math {Math.random()}</h2>
//     </>,
//     document.getElementById("root")

// );




// jsx challenge 2






// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css"
// const name = "dnyaneshwar";
// const dte = new Date().toLocaleDateString();
// const tme = new Date().toLocaleTimeString();

// const link = "https://picsum.photos/200";




// const heading = {

//     color: 'white',
//     backgroundColor: 'black',
//     textTransform: 'capitalize'
// }

// ReactDOM.render(

//     <>

//        {/* <h1>Hello my name is {name}</h1>

//        <h1>Hello my name is {name}</h1>
       
//        <h2>Todays data is {dte} </h2>

//        <h2>Now time is {tme} </h2> */}

//        {/* <h1  className="head">Hello my name is {name}</h1> */}
//        <h1 style = {heading} >Hello my name is {name}</h1>

//         <div className="imgDiv">
     
//        <img  src={link} alt="photo"/>



//        <img  src="https://picsum.photos/200" alt="photo"/>
    
//        </div>





//     </>,
//     document.getElementById("root")
// );




// Project --> Greating website 

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css"


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


// ReactDOM.render(
//     <>

// <div>
//      <h1>Hello Everyone ,<span style={cssStyle}> {message}</span></h1>

//      <br/>
//      <br/>

//      {/* <h2>{currDate}</h2>
//      <br/>
//      <h2>{currTime}</h2>
//      <br/>
//      <h2>{hour}</h2> */}
//      </div>  

//     </>,

//     document.getElementById("root")
// );






// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css"
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";
// import App from "./App";

// import {add,sub,mul,div} from "./Calc";


// ReactDOM.render(
//     <>

//    {/* <h1>This is component Lecture</h1> */} 

//     {/* <Heading/> */}
//    {/* <p>Lets start the lecture</p> */} 

//     {/* <Para/> */}

//    {/* <ol>
//        <li>first</li>
//        <li>second</li>
//        <li>third</li>
//        <li>fourth</li>
//        <li>fifts</li>
//    </ol> */}

//    {/* <List/> */}

//    {/* <App/> */}

//    <ul>
//        <li>sum of two num is {add(12,22)}</li>
//        <li>sub of two num is {sub(12,22)}</li>
//        <li>div of two num is {div(12,5)}</li>
//        <li>mult of two num is {mul(12,22)}</li>
//    </ul>


//     </>,

//     document.getElementById("root")
// );





// Date 10 dec
// Starting with netfilx series project



// import React from "react";
// import ReactDOM from "react-dom";
// import Card from "./Cards";
// import Sdata from "./Sdata";

// console.log(Sdata[0].sname);



// function ncard(val )
// {

//   return (

//     <Card imgSrc = {val.imgSrc}

//     title={val.title}
//     sname={val.sname}
//     // link=""
// />


//   )
     
// }



// ReactDOM.render(
   

//   <>

// <h1 className="headingStyle">  List of top 5 netflix series</h1>

//     <Card imgSrc = {Sdata[0].imgSrc}

//           title={Sdata[0].title}
//           sname={Sdata[0].sname}
//           // link=""
//     />


//    { Sdata.map(ncard)};


// <Card imgSrc = {Sdata[1].imgSrc}

//           title={Sdata[1].title}
//           sname={Sdata[1].sname}
//           // link=""
//     />

// <Card imgSrc = {Sdata[2].imgSrc}

// title={Sdata[2].title}
// sname={Sdata[2].sname}
// // link=""
// />






//   </>
//   ,
//     document.getElementById("root")
// );


import React from "react";
import  ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import IncDec from "./IncDec"
import ToDoListMu from "./ToDoListMu";


ReactDOM.render(

  // <App/>

  // <IncDec/>

  <ToDoListMu/>
  ,
  document.getElementById("root")
);
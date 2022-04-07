import {useReducer,useState}from 'react';


//let reducer =(initialData,action)=>{} function name
  let reducer =(name,increment)=>{
     //console.log(increment.type)
     //console.log(name)
     if(increment.type==='increment'){
      return name+1;
     }else if(increment.type==='decrement'){
       return name-1;

     }else{
       return name;
     }
     
     
     
}
function App() {
  //state
  const [name,setName]=useState(10)
  const [data,dispatch]=useReducer(reducer,name)

  //function
  let clickme=()=>{
    //alert('hello');
    dispatch({type:'increment'})
   
  }
  let clickme2=()=>{
    //alert('hello');
    dispatch({type:'decrement'})
   
  }
  //return statement
  return (
      <>
        {name}
        <br/>
        {data}
        <br/>
        <button onClick= {()=>{clickme()}}>Click Me</button>
        <button onClick= {()=>{clickme2()}}>Click Me</button>
      </>
    
  );
}

export default App;

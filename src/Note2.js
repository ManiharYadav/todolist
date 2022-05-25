import React,{useState} from 'react';
import "./Note.css";

export default function Note2() {
  const[text,settext]=useState("")
  const[item,setitem]=useState([])

  const[search,setsearch]=useState("")
  
  const[edittext,setedittext]=useState("")
  const[input,setinput]=useState()
  
  function handlechange(e){
      
      settext(e.target.value)
  }
  function add(){
    if(text ===""){
       alert("fill the details")
    }
    else{
     setitem([...item,text])
     settext("")
    }
  }
  function deleted(id){
      setitem(item.filter(function(values,index){
          return index!==id
      }))
  }
  function edit(id){
    item.find(function(values,index){
            if(index===id)
            return  setinput(values)  
        })
        
  
       setedittext(id)
}
   function handlechange2(e){
      
      setinput(e.target.value)
         
   }
  function update(){
    if(input === " "){
     alert("fill the inputs")
    }
    else{
      setitem(item.map(function(values,index){
        if(index===edittext){
          values= input
          
        }
        return values
    
  }))
      
    }
      setedittext(null)
      setinput("")
  }




  return (
    <div className='body'>
      <h1 className='data1'>TODO LIST</h1>
        
        <div className='container'>
      <input  className='data'  id='input' name="fname" type="text"  onChange={handlechange} value={text}></input><br></br>
       <button  className='data'  id='add' onClick={add}>ADD A Note</button>
      </div>
      {item.map(function(values,index){
         return(<div key={index}> { index!==edittext?<div className='items'><h1>{index}.</h1> <h1>{values}</h1> <button  id='delete' onClick={()=>deleted(index)} >DELETE</button> <button id='edit' onClick={()=>edit(index)}>edit</button> </div> : <div className='items2'><input   name="fname" type="text" onChange={handlechange2}   value={input}></input>
          <button  id='update' onClick={update}>UPDATE</button></div>} </div>)
      })}
    </div>
  );
}

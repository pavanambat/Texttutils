import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Successfully cleared Text", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Successfully Copied Text", "success");
    }
    const handleReverse = ()=>{
      let newText = text.split(" ").reverse().join(" ");
      setText(newText)
      props.showAlert("Successfully Reversed the Sentence", "success");
    }
    const [text, setText] = useState("");
    
  return (
    <>
   <div className='container' style = {{color :props.mode==="dark" ? "white" : "#042743"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor: props.mode==="dark" ? "grey" : "white", color :props.mode==="dark" ? "white" : "black",}} placeholder = "Enter Your Text" id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Conert to LowerCse</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary" onClick={handleReverse}>Reverse Text</button>

  </div>
  <div className="container my-3" style = {{color :props.mode==="dark" ? "white" : "#042743"}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").length} Minutes to Read </p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text: "Enter something in the above textarea"}</p>
  </div>

  </>
  )
}

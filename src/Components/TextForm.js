import React, { useState } from 'react'



export default function (props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("Clicked on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Click me for uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Click me for lowercase</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length}Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    
    </div>
    </>
  )
}

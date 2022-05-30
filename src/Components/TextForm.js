import React, { useState } from 'react'



export default function (props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("Clicked on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');

  return (
    
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Click me for uppercase</button>
    </div>
  )
}

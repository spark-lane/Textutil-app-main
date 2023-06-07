import React, { useState } from 'react';


export default function Textform(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  };
  const handleonchange = (Event) => {
    let newText = setText("");
    setText(Event.target.value);
  };
  const handleClear = () => {
    let newText = ("");
    setText(newText);
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("Enter text here" + "");


  return (
    <>
      <div className="form-floating">
        <textarea className="form-control" value={text} onChange={handleonchange} style={ {backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : '#042743' }} id="floatingTextarea" defaultValue={""} />

      </div>
      <div>
        <button type="button" className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button type="button" className="btn btn-secondary mx-1 my-3" onClick={handleloclick}>
          Convert to LowerCase
        </button>
        <button type="button" className="btn btn-danger mx-1 my-3" onClick={handleClear}>
          Clear text
        </button>
        <button type="button" className="btn btn-success mx-3 my-3" onClick={handleSpaces}>
          Clear spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Summary</h1>
        <p>{text ? text.split(" ").length : 0} word and {text ? text.length : 0}{" "} characters</p>
        <p>{text ? 0.008 * text.split(" ").length : 0} Minutes read </p>
        <p> Preview of your text</p>
        <p>{text}</p>

      </div>
    </>
  );
}

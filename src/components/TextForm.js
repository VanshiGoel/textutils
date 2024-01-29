import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('')
 
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper Case",'success')
    }
    const handleOnChange=(event)=>{
         setText(event.target.value);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted to Lower Case",'success')
    }
    const handleClearClick=()=>{
      setText('')
      props.showAlert("Text cleared",'success')
  }
  const handleCopy=()=>{
    let text=document.getElementById("exampleFormControlTextarea1")
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Text Copied",'success')
  }
  const removeExtra=()=>{
      let newtext=text.split(/[ ]+/)
      setText(newtext.join(" "))
      props.showAlert("Extra Spaces Removed",'success')
  }
  return (
    <>
    <div style={{color: props.mode==='light'?'black':'white'}} className='my-5'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='light'?'white':'#0d173f',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={removeExtra}>Remove Extra Spaces</button>
    </div>
    <div className="my-3 " style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
    </div>
</>
  )
}

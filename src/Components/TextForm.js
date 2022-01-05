import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("");
    
    const HandleUPCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const HandleLCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const HandleClear=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Clear textbox","success");
    }

    const HandleCopy=()=>{
       let newText=document.getElementById('myBox');
       newText.select();
       navigator.clipboard.writeText(newText.value);
       props.showAlert("Copyed to clipboard","success");
    }

    const HandleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed","success");
    }

    const HandleChange=(e)=>{
        setText(e.target.value);
    }
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={HandleChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUPCase}>Convert to UpperCase</button> 
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLCase}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleSpaces}>Remove Spaces</button>  
        </div>
        <div className="container my-3"style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((e)=>{return e.length!==0}).length} Minutes read</p>

            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something to preview here'}</p>


        </div>
        </>
    )
}

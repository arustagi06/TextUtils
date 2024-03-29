// jshint esversion:6
import React, {useState} from 'react';
import PropTypes from 'prop-types';
export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        if(text.length>0){
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
        }
        else{
            props.showAlert("Please enter text", "warning");
        }
    };
    const handleLoClick = ()=>{
        if(text.length>0){
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
        }
        else{
            props.showAlert("Please enter text", "warning");
        }
    };
    const handleTrimClick = ()=>{
        if(text.length>0){
        console.log("Trim was clicked");
        // let newText = text.split(/[  ]+/);
        // setText(newText.join(' '));
        let newText = text.replace(/\s+/g, " ");
        setText(newText);
        props.showAlert("Extra space removed", "success");
        }
        else{
            props.showAlert("Please enter text", "warning");
        }
    };
    const handleRemSpecial = ()=>{
        if(text.length>0){

            console.log("Remove Hyphen was clicked");
            let newText = text.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
            setText(newText);
            props.showAlert("Special characters removed", "success");
            // newText = newText.replace(/[\s_@.?,&$-]*/g, "-");
        }
        else{
            props.showAlert("Please enter text", "warning");
        }
    };
    const handleTitleClick = ()=>{
        console.log("TitleCase was clicked");
        // let newText = text.toLowerCase().split(" ");
        if(text.length>0){
        let newText = text.toLowerCase().replace(/[^A-Z0-9]+/ig, " ").split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
        }
        newText = newText.join(" ");
        
        console.log(newText);
        setText(newText);
        props.showAlert("Converted to TitleCase", "success");
    }
    else{
        props.showAlert("Please enter text", "warning");
    }
    };

    const handleCopy = ()=>{
        console.log("I am copy");
        let newText = document.getElementById('formText');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard!", "success");
        
    };
    const handleClear = ()=>{
        console.log("Remove text");
        let newText = '';
        setText(newText);
    };

    const handleOnChange = (e)=>{
        setText(e.target.value);
        
        console.log("On Change");
    };
    const [text, setText] = useState('');
    // text = "new text"; Wrong way to update the text
    // setText("new text"); Correct way to change the state

    return (
        <>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
            <label htmlFor="formText" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter the text here" style={{backgroundColor: props.mode==='light'?'white':'grey', placeholderTextColor: props.mode==='light'?'black':'white', color: props.mode==='light'?'black':'white'}} id="formText" rows="7"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary m-1" onClick={handleLoClick}>LowerCase</button>
            <button className="btn btn-primary m-1" onClick={handleTrimClick}>Remove Extra space</button>
            <button className="btn btn-primary m-1" onClick={handleRemSpecial}>Replace space with Hyphen</button>
            <button className="btn btn-primary m-1" onClick={handleTitleClick}>Title Case</button>
            <button className="btn btn-secondary m-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger m-1" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white' }}>
            <h3>Your text Summary</h3>
            <p>{text.split(' ').filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
            <p>{text.replace(/\s+/g, " ").length * 0.008 } minute read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter some text in the textarea to preview it here"}</p>

        </div>
        </>
    );
};

TextForm.propTypes = {
    heading: PropTypes.string,
    
}

TextForm.defaultProps = {heading: "Update heading text here"}

import React, {useState} from 'react'


export default function TextForm(props) {
    // This is the text for uppar case text to lower case
    const handleDownClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearText = () => {
        let clearText = ''
        setText(clearText)
        props.showAlert("Text has been cleared", "success")
    }

    // This is a finction for converting lower case to uppaercase
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    // This is a function for handling text into TextArea
    const handleOnChange = (event) => {
        console.log('Text was changed')
        setText(event.target.value)
    }

    // Copy text function
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been copied", "success")
    }

    // Handling Extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space has been removed", "success")
    }


    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            {/* Convert to upparcase */}
            <button className="btn btn-primary me-2" onClick={handleUpClick} >Convert to uppercase</button>

            {/* Conver to lower case */}
            <button className="btn btn-primary me-2" onClick={handleDownClick} >Convert to lowercase</button>

            {/* Copy text */}
            <button className="btn btn-primary me-2" onClick={handleCopy} >Copy Text</button>

            {/* Conver to lower case */}
            <button className="btn btn-primary me-2" onClick={handleClearText} >Clear Text</button>

            {/* Extra Space */}
            <button className="btn btn-primary me-2" onClick={handleExtraSpaces} >Remove extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} world, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minuter to read</p>
            <div className="bg-warning rounded p-3">
                <h3>Text Preview</h3>
                <p>{text.length > 0?text:'Enter something in text box above to preview it here'}</p>
            </div>
        </div>
        </>
    )
}

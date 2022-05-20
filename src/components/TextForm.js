import React, {useState} from 'react'


export default function TextForm(props) {
    // This is the text for uppar case text to lower case
    const handleDownClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearText = () => {
        let clearText = ''
        setText(clearText)
    }

    // This is a finction for converting lower case to uppaercase
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    // This is a function for handling text into TextArea
    const handleOnChange = (event) => {
        console.log('Text was changed')
        setText(event.target.value)
    }


    const [text, setText] = useState('');

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            {/* Convert to upparcase */}
            <button className="btn btn-outline-primary me-2" onClick={handleUpClick} >Convert to uppercase</button>

            {/* Conver to lower case */}
            <button className="btn btn-outline-info me-2" onClick={handleDownClick} >Convert to uppercase</button>

            {/* Conver to lower case */}
            <button className="btn btn-outline-danger me-2" onClick={handleClearText} >Clear Text</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} world, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minuter to read</p>
            <div className="bg-warning rounded p-3">
                <h3>Text Preview</h3>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

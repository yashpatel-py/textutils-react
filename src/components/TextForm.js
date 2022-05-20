import React, {useState} from 'react'


export default function TextForm(props) {
    // This is the text for uppar case text to lower case
    const handleDownClick = () => {
        // console.log('Lower case button was clicked' + text)
        let newText = text.toLowerCase()
        setText(newText)
    }

    // This is a finction for converting lower case to uppaercase
    const handleUpClick = () => {
        // console.log('Uppaer case button was clicked' + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    // This is a function for handling text into TextArea
    const handleOnChange = (event) => {
        console.log('Text was changed')
        setText(event.target.value)
    }


    const [text, setText] = useState('Enter text here..');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            {/* Convert to upparcase */}
            <button className="btn btn-outline-primary me-2" onClick={handleUpClick} >Convert to uppercase</button>

            {/* Conver to lower case */}
            <button className="btn btn-outline-info" onClick={handleDownClick} >Convert to uppercase</button>
        </div>
    )
}

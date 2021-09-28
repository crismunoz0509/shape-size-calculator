import { useState } from 'react'

const LengthByWidth = () => {

    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')

    return (
        <div>
            <form className="form"> 
                <div className="input-form">
                    <label>Length: </label>
                    <input type="text"></input>
                </div>
                <div className="input-form">
                    <label>Width: </label>
                    <input type="text"></input>
                </div>
                <input type="submit" value="Calculate"></input>
            </form>
        </div>
    )
}

export default LengthByWidth

import { useState } from 'react'

const SquareInputs = ({onCalc}) => {
    
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    
    const onCalculate = (e) => {
        e.preventDefault()

        onCalc(length, width)

    }

    return (
        <div>
            <form className="form" onSubmit={onCalculate}> 
                <div className="input-form">
                    <label>Length: </label>
                    <input type="text" value={length} onChange={(e) => setLength(e.target.value)} ></input>
                </div>
                <div className="input-form">
                    <label>Width: </label>
                    <input type="text" value={width} onChange={(e) => setWidth(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default SquareInputs

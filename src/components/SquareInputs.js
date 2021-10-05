import { useState } from 'react'

const SquareInputs = ({onCalc}) => {
    
    const [length, setLength] = useState(0);
    
    const onCalculate = (e) => {
        e.preventDefault()

        onCalc(length)

    }

    return (
        <div>
            <form className="form" onSubmit={onCalculate}> 
                <div className="input-form">
                    <label>Length/Width: </label>
                    <input type="text" value={length} onChange={(e) => setLength(e.target.value)} ></input>
                </div>
                <div>
                    <input type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default SquareInputs

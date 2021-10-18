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

                <svg id="shape-display" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <text x="13.5" y="2.5" style={{fontSize: "3px", textAnchor: "middle"}} >{length}</text>
                    <text x="-6.5" y="20" style={{fontSize: "3px", textAnchor: "end"}}>{length}</text>
                    <line x1="-3.5" y1="4" x2="31.5" y2="4" stroke="black" />
                    <line x1="-3.5" y1="35" x2="31.5" y2="35" stroke="black" />
                    <line x1="-3" y1="4" x2="-3" y2="35" stroke="black" />
                    <line x1="31" y1="4" x2="31" y2="35" stroke="black" />
                </svg>

                <div>
                    <input type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default SquareInputs

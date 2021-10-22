import { useState } from 'react'

const SquareInputs = ({onCalc}) => {
    const [focus, toggleFocus] = useState(false);
    const [length, setLength] = useState(0);
    
    const onCalculate = (e) => {
        e.preventDefault()

        onCalc(length)

    }

    const changeStrokeColor = () => {
        if(focus){
            toggleFocus(false)
        }else{
            toggleFocus(true)
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onCalculate}> 
                <div className="input-form">
                    <label>Length/Width: </label>
                    <input id="input-text" type="text" value={length} onChange={(e) => setLength(e.target.value)} onFocus={changeStrokeColor} onBlur={changeStrokeColor}></input>
                </div>

                <svg id="shape-display" viewBox="1.5 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <text id="line-text" x="13.5" y="2.5" style={{fontSize: "3px", textAnchor: "middle"}} >{length}</text>
                    <text id="line-text" x="-4.5" y="20" style={{fontSize: "3px", textAnchor: "end"}}>{length}</text>
                    <line id="lines" x1="-3.5" y1="35" x2="31.5" y2="35" stroke={focus ? "#363636" : "#575757"} />
                    <line id="lines" x1="-3" y1="3.5" x2="-3" y2="35.5" stroke={focus ? "#0061e0" : "#575757"} />
                    <line id="lines" x1="31" y1="3.5" x2="31" y2="35.5" stroke={focus ? "#363636" : "#575757"} />
                    <line id="lines" x1="-3.5" y1="4" x2="31.5" y2="4" stroke={focus ? "#0061e0" : "#575757"} />
                </svg>

                <div>
                    <input className="back-btn" type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default SquareInputs

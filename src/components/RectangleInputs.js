import { useState } from 'react'

const RectangleInputs = ({onCalc}) => {
    const [focus, toggleFocus] = useState(false);
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    
    const onCalculate = (e) => {
        e.preventDefault()

        onCalc(length, width)

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
                    <label>Length: </label>
                    <input id="input-text" type="text" value={length} onChange={(e) => setLength(e.target.value)} onFocus={changeStrokeColor} onBlur={changeStrokeColor}></input>
                </div>
                <div className="input-form">
                    <label>Width: </label>
                    <input id="input-text" type="text" value={width} onChange={(e) => setWidth(e.target.value)} onFocus={changeStrokeColor} onBlur={changeStrokeColor}></input>
                </div>

                <svg id="shape-display" viewBox="10 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <text id="line-text" x="22.5" y="2.5" style={{fontSize: "3px", textAnchor: "middle"}} >{length}</text>
                    <text id="line-text" x="-6.5" y="20" style={{fontSize: "3px", textAnchor: "end"}}>{width}</text>
                    <line id="lines" x1="-3.5" y1="35" x2="48.5" y2="35" stroke={focus ? "#363636" : "#575757"}/>
                    <line id="lines" x1="-3" y1="3.5" x2="-3" y2="35.5" stroke={focus ? "#0061e0" : "#575757"}/>
                    <line id="lines" x1="48" y1="3.5" x2="48" y2="35.5" stroke={focus ? "#363636" : "#575757"}/>
                    <line id="lines" x1="-3.5" y1="4" x2="48.5" y2="4" stroke={focus ? "#0061e0" : "#575757"}/>
                </svg>

                <div>
                    <input className="back-btn" type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default RectangleInputs
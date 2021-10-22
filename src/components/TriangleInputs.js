import { useState } from "react"

const TriangleInputs = ({onCalc}) => {

    const [focus, toggleFocus] = useState(false)

    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);

    const onCalculate = (e) => {
        e.preventDefault()

        onCalc(base, height)
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
                    <label>Base: </label>
                    <input id="input-text" type="text" value={base} onChange={(e) => setBase(e.target.value)} onFocus={changeStrokeColor} onBlur={changeStrokeColor}></input>
                </div>
                <div className="input-form">
                    <label>Height: </label>
                    <input id="input-text" type="text" value={height} onChange={(e) => setHeight(e.target.value)} onFocus={changeStrokeColor} onBlur={changeStrokeColor}></input>
                </div>

                <svg id="shape-display" viewBox="1 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <text id="line-text" x="13.5" y="39" style={{fontSize: "3px", textAnchor: "middle"}} >{base}</text>
                    <text id="line-text" x="-6.5" y="20" style={{fontSize: "3px", textAnchor: "end"}}>{height}</text>
                    <line id="lines" x1="5" y1="4.85" x2="5" y2="35" stroke={focus ? "#0061e0" : "#575757"} />
                    <line id="lines" x1="5" y1="4" x2="-9.59" y2="35" stroke={focus ? "#363636" : "#575757"} />
                    <line id="lines" x1="5" y1="4.5" x2="39.72" y2="35" stroke={focus ? "#363636" : "#575757"} />
                    <line id="lines" x1="-10" y1="35" x2="40" y2="35" stroke={focus ? "#0061e0" : "#575757"} />
                </svg>

                <div>
                    <input className="back-btn" type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default TriangleInputs

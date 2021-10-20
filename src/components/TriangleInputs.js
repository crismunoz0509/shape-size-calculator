import { useState } from "react"

const TriangleInputs = ({onCalc}) => {

    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);

    const onCalculate = (e) => {
        e.preventDefault()

        onCalc(base, height)
    }

    return (
        <div>
            <form className="form" onSubmit={onCalculate}>
                <div className="input-form">
                    <label>Base: </label>
                    <input type="text" value={base} onChange={(e) => setBase(e.target.value)}></input>
                </div>
                <div className="input-form">
                    <label>Height: </label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}></input>
                </div>

                <svg id="shape-display" viewBox="1 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <text x="13.5" y="39" style={{fontSize: "3px", textAnchor: "middle"}} >{base}</text>
                    <text x="-6.5" y="20" style={{fontSize: "3px", textAnchor: "end"}}>{height}</text>
                    <line id="lines" x1="-10" y1="35" x2="40" y2="35" stroke="black" />
                    <line id="lines" x1="5" y1="4" x2="-9.59" y2="35" stroke="black" />
                    <line id="lines" x1="5" y1="4.5" x2="39.72" y2="35" stroke="black" />
                </svg>

                <div>
                    <input className="back-btn" type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default TriangleInputs

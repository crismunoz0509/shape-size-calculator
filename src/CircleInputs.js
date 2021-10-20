import { useState } from "react";

const CircleInputs = ({onCalc}) => {

    const [radius, setRadius] = useState(0);

    const onCalculate = (e) => {
        e.preventDefault()

        onCalc(radius)
    }

    return (
        <div>
            <form className="form"onSubmit={onCalculate}>
                <div className="input-form">
                    <label>Radius: </label>
                    <input type="text" value={radius} onChange={(e) => setRadius(e.target.value)}></input>
                </div>

                <svg id="shape-display" viewBox="1 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle id="lines" cx="13" cy="20" r="18" stroke="black" stroke-width="1" fill="white" />
                    <line id="lines" x1="-5" y1="20" x2="12.5" y2="20" stroke="black" />
                    <text x="-2" y="19" style={{fontSize: "3px", textAnchor: "start"}} >{radius}</text>
                </svg>

                <div>
                    <input className="back-btn"  type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default CircleInputs

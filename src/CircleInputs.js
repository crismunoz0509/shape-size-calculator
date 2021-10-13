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
                <div>
                    <input type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default CircleInputs

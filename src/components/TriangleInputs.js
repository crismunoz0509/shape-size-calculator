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
                <div>
                    <input type="submit" value="Calculate"></input>
                </div>
            </form>
        </div>
    )
}

export default TriangleInputs

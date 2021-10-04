const Outputs = ({enterCalc, pastCalc}) => {
    return (
        <div>
            <div>
                <h1>{enterCalc}</h1>
            </div>
            <div className="output-log">
                <h2>Outputs: {
                        pastCalc.map((item, index) => ( (index ? ', ': '') + item ))
                    }</h2>
            </div>
        </div>
    )
}

export default Outputs

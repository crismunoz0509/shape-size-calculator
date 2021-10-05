import { Link } from 'react-router-dom';

const SelectCalculator = ( {switchBtn} ) => {
    return (
        <div className="select-menu">
            <Link to="/squareinput">
                <button className="back-btn" onClick={switchBtn}>Calculate Square Area</button>
            </Link>

            <Link to="/rectangleinput">
                <button className="back-btn" onClick={switchBtn}>Calculate Rectangle Area</button>
            </Link>

            
        </div>
    )
}

export default SelectCalculator

import { Link } from 'react-router-dom';

const Header = ( {btnShow, switchBtn} ) => {

    return (
        <div className="header-component">
            <div className="btn-header">
                <Link to="/">
                    {btnShow ? <></> : (<button className="back-btn" onClick={switchBtn}>back</button>)}
                </Link>
            </div>
            <div className="title-header">
                {btnShow ? (<h1>Select A Calculator</h1>) : (<h1>Enter Your Numbers</h1>)}
            </div>
            <div></div>
        </div>
    )
}

export default Header

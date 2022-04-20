import React from 'react'
import './PoweredBy.css'
import logo from './images/openweather.png'

const PoweredBy = ({loading}) => {
    return (
        <div>
            {!loading && <div className="powered__by">
                <h3>Powered By</h3>
                <img className="open__weather__app__logo" src={logo} alt="open-weather-logo.png"/>
            </div>}
        </div>
    )
}

export default PoweredBy;

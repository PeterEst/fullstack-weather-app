import React from 'react'
import "./Box.css"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const Box = ({name,status,temp,imgID,onDelete}) => {
    const handleDelete = (e) =>{
        e.preventDefault();

        axios.post(process.env.REACT_APP_BACKEND_API+'/delete',{name})
        .then((response) => {
            console.log(response);
            
          }, (error) => {
            console.log(error);
        });
        
        onDelete();
    }

    return (
        <div className="box">
            <img src={`https://openweathermap.org/img/wn/${imgID}.png`} alt="weathericon" />
            <div className="box__data">
                <form className="closeBtn" onClick={handleDelete} >
                    <CloseIcon />
                </form>
                <h1 className="h1__data">{name}</h1>
                <p>{status}</p>
                <p>{temp}°C</p>
            </div>
        </div>
    )
}

export default Box

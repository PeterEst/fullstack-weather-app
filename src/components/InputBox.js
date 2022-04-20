import React, { useState } from 'react'
import './InputBox.css'
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';

const InputBox = (props) => {
    const [inputData, setInputData] = useState("");

    const changeHandler = (event) =>{
        setInputData(event.target.value);
    };
    
    
    const sendData = () =>{
        axios.post(process.env.REACT_APP_BACKEND_API, {inputData})
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    };

    const handleSubmit = (event) =>{
        sendData();
        setInputData("");
        props.onSubmit();
        event.preventDefault();
    };

    const handleRefresh = async() =>{
        axios.get(process.env.REACT_APP_BACKEND_API+"/update").then((res) =>{
            console.log("Refresh Request Sent!");
            props.onSubmit();
        })
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <div className="inputContainer">
            <form onSubmit={handleSubmit}>
                <input type="text" name="country" value={inputData} placeholder="Enter Country" onChange={changeHandler}></input>
                <input  type="submit" value="Go" ></input>
                <div className="refresh__icon" title="Refresh" onClick={handleRefresh}>
                    <RefreshIcon />
                </div>
            </form>
        </div>
    )
}

export default InputBox

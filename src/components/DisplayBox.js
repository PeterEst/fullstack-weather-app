import React,{useState , useEffect} from 'react';
import Box from './Box';
import "./DisplayBox.css";
import axios from 'axios';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const DisplayBox = ({refreshToken ,loadingToken}) => {
    const [loading , setLoading] = useState(true)
    const [info , setInfo] = useState([]);
    const [deleteRefreshToken, setDeleteRefreshToken] = useState(0);
    loadingToken(loading);

    const deleteToken = () =>{
        setDeleteRefreshToken(deleteRefreshToken + 1);
    };

    useEffect(()=>{
        const fetchInfo= () =>{
            axios.get(process.env.REACT_APP_BACKEND_API).then((response) => {
                setInfo(response.data);
                setLoading(false);
              }, (error) => {
                console.log(error);
              });
        };
        setLoading(true);
        setTimeout(()=>{
            fetchInfo();
        },2500); 
    }, [refreshToken, deleteRefreshToken]);

    return (
        <div>
            <div className="loading__Icon">
                <RingLoader color={"#0660D6"} loading={loading} css={override} size={150} />
            </div>
            <div className="box__container">
                {!loading && info.map(eachInfo =>{
                    return <Box 
                        onDelete={deleteToken}
                        key={eachInfo._id}
                        name={eachInfo.name}
                        status={eachInfo.status}
                        temp={eachInfo.temp}
                        imgID={eachInfo.id}
                    />
                })}
            </div>
        </div>
    )
}

export default DisplayBox

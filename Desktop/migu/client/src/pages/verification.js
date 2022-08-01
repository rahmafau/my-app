import React ,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import success from "./success.png";
import "./verification.css"


const EmailVerify = () => {
	// const [validUrl, setValidUrl] = useState(true);
    let [ message, setMessage] = useState('Loading');
	let param = useParams();

	useEffect(() => {
        console.log(param.token)
        axios.patch(`http://localhost:3001/user/verified`, {} ,{       
            headers: {
                Authorization : `Bearer ${param.token}`
            }
        }).then((res) => {
            console.log(res.data)
            setMessage(res.data.message)

        }).catch(err => {
            console.log(err)
        })
    })

	return (
        
        <div className="container">
			<img src={success} alt="success_img" className={success} />
			<h1>{message}</h1>
            <a href="/login">Login</a>
		</div> 
    )
		
	;
};

export default EmailVerify;
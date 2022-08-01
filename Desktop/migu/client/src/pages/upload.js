import React, { useState } from "react";
import "./upload.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Upload() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [image, setImage] = useState([])

    let navigate = useNavigate()

    const upload = (currentId, setCurrentId) => {
        const formData = new FormData()
        formData.append("file", image[0])
        formData.append("upload_preset", "ml_default")
        //send the image to the cloudinary
        axios.post(`https://api.cloudinary.com/v1_1/danishmigu/image/upload`, formData)
        .then((response) => {
            const filename = response.data.public_id

            axios.post("http://localhost:3001/upload", {
                title: title,
                description: description,
                image: filename,
                author: localStorage.getItem("username")
            }).then(() => {
                navigate("/")
            })
        })

        // //editcaption
        // axios.patch("http://localhost:3001/upload", {
        //     title: title,
        //     description: description,
        //     author: localStorage.getItem("username")
        // }).then(() => {
        //     navigate("/")
        // })


    }

    return (
        <div className="Upload">
        <h1>Create a post</h1>    
        <div className="UploadForm">
            <input
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
            <input type="text" placeholder="Caption" 
            onChange={(event) => {setDescription(event.target.value)}}
            />
            <input type="file" 
            onChange={(e) => {setImage(e.target.files)}}
            />
            <button onClick={upload}>Upload</button>
        </div>
    </div>
    )
}

export default Upload
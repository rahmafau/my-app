import React, { useState, useEffect } from "react";
import "./Post.css";
import Comment from "../img/comment.png";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Heart from "../img/like.png";
import NotLike from "../img/notlike.png";
import { useSelector } from "react-redux";
import Axios from "axios";
import { Image } from "cloudinary-react";
import moment from 'moment'

const Post = ({ }) => {//masukin parameter data
  // const { user } = useSelector((state) => state.authReducer.authData);
  // const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState([])
  let [uploads, setUploads] = useState([])
  let [comments, setComments] = useState([1, 2, 3])

  useEffect(() => {
    Axios.get("http://localhost:3001/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);
  
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);
    
  useEffect(() => {
    Axios.get("http://localhost:3001/upload").then((response) => {
      setUploads(response.data);
      
    });
  }, []);
    
  let likePost = (id, key) => {
    let tempLikes = uploads;
    tempLikes[key].likes = tempLikes[key].likes + 1;
    
    Axios.post("http://localhost:3001/upload/like", {
      userLiking: localStorage.getItem("username"),
      postId: id,
    }).then((response) => {
      setUploads(tempLikes);
    });
  };

  let handleComment = () => {
    
  }

  

  // const handleLike = () => {
    
  //   likePost(data._id, user._id);
  //   setLiked((prev) => !prev);
  //   liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  // };
  return (
    <div className="Post">
      {uploads.map((val, key) => {
        return (
      <div>
      <Image cloudName="danishmigu" publicId={val.image} />
      <span style={{fontSize: "20px"}}>{moment(val.image.createdAt).fromNow()}</span>
      <div className="postReact">
        <img
          src= {Heart}//{liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => { likePost(val.id, key)}}
        />
        <img src={Edit} alt="" onClick={() => {}}/>
        <img src={Delete}  alt="" />
      </div>

      <span style={{ color: "black", fontSize: "20px" }}>
        {val.likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{val.title} / by @{val.author}</b>
        </span>
        <span>{val.description}</span>
      </div>
      <div className="comment">
        <input placeholder="Comment" onChange={(e) => setComments(e.target.value)}></input>
        <img src={Comment} alt="" onClick={handleComment}/>        
          {
            comments.map((c, i) => (
              <div key={i} >
                comment {i}
              </div>
            ))
          }
      </div>
    </div>
        )
      })}
      
    </div>
  );
};

export default Post;
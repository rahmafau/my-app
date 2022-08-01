import React from "react";
import "./ProfileCard.css";
import Cover from "../img/cover.jpg";
import Profile from "../img/profileImg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileCard = ({}) => {//masukin parameter location
//   const { user } = useSelector((state) => state.authReducer.authData);
//   const posts = useSelector((state)=>state.postReducer.posts)
//   const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
            {/* <img src={
                user.coverPicture
                ? serverPublic + user.coverPicture
                : serverPublic + "defaultCover.jpg"
            } alt="CoverImage"/>
            <img
            src={user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
            }
          alt="ProfileImage"/> */}
          <img src={Cover} alt="CoverImage"/>
          <img src={Profile} alt="ProfileImage"/>
      </div>
      <div className="ProfileName">
        <span>rahma</span>
        <span>Mom of an adorable son</span>
        <span></span>
        <span></span>
        <a href="/infocard">
            <button
              className="button"
              size="small"> edit profile
            </button>
            </a>
        <span></span>
            {/* <span>{user.firstname} {user.lastname}</span>
            <span>{user.worksAt? user.worksAt : 'Write about yourself'}</span> */}
      </div>

        {/* {location === "profilePage" ? (
            ""
        ) : (
            <span>
            <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                My Profile
            </Link>
            </span>
        )} */}
    </div>    
  );
};

export default ProfileCard;
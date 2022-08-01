import React from "react";
import PostSide from "../components/PostSide";
import ProfileCard from "../components/profileCard";
import ProfileLeft from "../components/ProfileLeft";
import "./profile.css";
function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location = 'profilePage'/>
      <PostSide/>
      </div>
      
    </div>
  );
};

export default Profile;

// import React, { useEffect, useState } from "react";
// import './profile.css';
// import { Image } from 'cloudinary-react';
// import Axios from 'axios';

// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { uploadImage } from "../../actions/UploadAction";
// import { updateUser } from "../../actions/UserAction";

// const ProfileModal = () => {
  

//   return (
//     <Modal
//       overlayColor={
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[9]
//           : theme.colors.gray[2]
//       }
//       overlayOpacity={0.55}
//       overlayBlur={3}
//       size="55%"
//       opened={modalOpened}
//       onClose={() => setModalOpened(false)}
//     >
//       <form className="infoForm" onSubmit={handleSubmit}>
//         <h3>Your Info</h3>
//         <div>
//           <input
//             value={formData.firstname}
//             onChange={handleChange}
//             type="text"
//             placeholder="First Name"
//             name="firstname"
//             className="infoInput"
//           />
//           <input
//             value={formData.lastname}
//             onChange={handleChange}
//             type="text"
//             placeholder="Last Name"
//             name="lastname"
//             className="infoInput"
//           />
//         </div>

//         <div>
//           <input
//             value={formData.worksAt}
//             onChange={handleChange}
//             type="text"
//             placeholder="Works at"
//             name="worksAt"
//             className="infoInput"
//           />
//         </div>

//         <div>
//           <input
//             value={formData.livesIn}
//             onChange={handleChange}
//             type="text"
//             placeholder="Lives in"
//             name="livesIn"
//             className="infoInput"
//           />
//           <input
//             value={formData.country}
//             onChange={handleChange}
//             type="text"
//             placeholder="Country"
//             name="country"
//             className="infoInput"
//           />
//         </div>

//         <div>
//           <input
//             value={formData.relationship}
//             onChange={handleChange}
//             type="text"
//             className="infoInput"
//             placeholder="Relationship status"
//             name="relationship"
//           />
//         </div>

//         <div>
//           Profile image
//           <input type="file" name="profileImage" onChange={onImageChange} />
//           Cover image
//           <input type="file" name="coverImage" onChange={onImageChange} />
//         </div>

//         <button className="button infoButton" type="submit">
//           Update
//         </button>
//       </form>
//     </Modal>
//   );
// };

// export default ProfileModal;
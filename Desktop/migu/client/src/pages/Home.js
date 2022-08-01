import React from "react";
import PostSide from "../components/PostSide";
import ProfileSide from "../components/profileSide";

import "./Home.css";

function Home ()  {
  return (
    <div className="Home">
      <ProfileSide/>
      <PostSide />
      
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { Image } from "cloudinary-react";
// import Axios from "axios";
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

// function Home() {
//   const [uploads, setUploads] = useState([]);

//   useEffect(() => {
//     if (!localStorage.getItem("loggedIn")) {
//       localStorage.setItem("loggedIn", false);
//     }
//   }, []);

//   useEffect(() => {
//     Axios.get("http://localhost:3001/upload").then((response) => {
//       setUploads(response.data);
//     });
//   }, []);

//   const likePost = (id, key) => {
//     var tempLikes = uploads;
//     tempLikes[key].likes = tempLikes[key].likes + 1;

//     Axios.post("http://localhost:3001/upload/like", {
//       userLiking: localStorage.getItem("username"),
//       postId: id,
//     }).then((response) => {
//       setUploads(tempLikes);
//     });
//   };

//   return (
//     <div className="Home">
//       {uploads.map((val, key) => {
//         return (
//           <div className="Post">
//             <div className="Image">
//               <Image cloudName="danishmigu" publicId={val.image} />
//             </div>
//             <div className="Content">
//               <div className="title">
//                 {" "}
//                 {val.title} / by @{val.author}
//               </div>
//               <div className="description">{val.description}</div>
//             </div>
//             <div className="Engagement">
//               <ThumbUpOffAltIcon
//                 id="likeButton"
//                 onClick={() => {
//                   likePost(val.id, key);
//                 }}
//               />
//               {val.likes}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Home;
import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import imageProfile from "./imageProfile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  const showName = (fullname) =>
    alert("Hello from the other side, My name is " + fullname);
  return (
    <div className="col-md-4 text-center mx-auto my-5">
      <div className="card " style={{ ...cardStyle }}>
        <ProfileComponent
          showName={showName}
          //image={imageProfile}
          //fullname="John bogeyman"
          profession="Designer & Web developper"
          bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        >
          <div>
            <img
              src={imageProfile}
              className="card-img-top"
              alt="imageProfil"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)" }}
            />
          </div>
        </ProfileComponent>

        <div className="my-3">
          <a href="https://www.github.com" className="px-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="icon"
              style={{ fontSize: "22px", color: "#333" }}
            />
          </a>
          <a href="https://www.instagram.com" className="px-2">
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon"
              style={{ fontSize: "22px", color: "#333" }}
            />
          </a>
          <a href="https://www.linkedin.com" className="px-2">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon"
              style={{ fontSize: "22px", color: "#333" }}
            />
          </a>
          <a href="https://www.twitter.com" className="px-2">
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon"
              style={{ fontSize: "25px", color: "#333" }}
            />
          </a>
        </div>

        <div className="card-footer">
          <div className="stats d-flex justify-content-around">
            <div className="stat">
              <span className="label" style={{ ...labelStyle }}>
                Following
              </span>
              <span className="value" style={{ ...valueStyle }}>
                56K
              </span>
            </div>
            <div className="stat">
              <span className="label" style={{ ...labelStyle }}>
                Followers
              </span>
              <span className="value" style={{ ...valueStyle }}>
                940
              </span>
            </div>
            <div className="stat">
              <span className="label" style={{ ...labelStyle }}>
                Likes
              </span>
              <span className="value" style={{ ...valueStyle }}>
                320
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  position: "relative",
  fontFamily: "'Exo 2', sansSerif",
  boxShadow: "0 0 100px rgb(0 0 0 / 30%)",
};
/*
const followStyle = {
  position: "absolute",
  top: "18vw",
  right: "25px",
  width: "50px",
  height: "50px",
  background: "linear-gradient(to left, #2D77C1, #68FAC2)",
  borderRadius: "100%",
  border: "none",
  boxShadow: "0 10px 15px rgb(110 221 235 / 53%)",
};*/
const labelStyle = {
  display: "block",
  textTransform: "uppercase",
  fontWeight: "300",
  fontSize: "14px",
  letterSpacing: "1px",
  color: "#95989A",
};
const valueStyle = {
  display: "block",
  fontWeight: "700",
  fontSize: "22px",
  marginTop: "5px",
};
export default App;

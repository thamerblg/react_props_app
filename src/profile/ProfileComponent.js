import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
  //onsole.log(props);
  const { fullname, profession, bio, showName } = props;
  return (
    <div>
      <div className="follow">
        <button
          href="#!"
          className="btn-follow"
          onClick={(e) => {
            showName(fullname);
          }}
          style={{ ...followStyle }}
        >
          <span className="sr-only">Follow</span>
        </button>
      </div>

      {props.children}

      <h2 className="name my-3" style={{ ...nameStyle }}>
        {fullname}
      </h2>
      <h4 className="job my-3" style={{ ...jobStyle }}>
        {profession}
      </h4>
      <div className="bio my-3 px-3" style={{ ...bioStyle }}>
        {bio}
      </div>
    </div>
  );
};
const nameStyle = {
  fontSize: "24px",
  fontWeight: "700",
  textTransform: "uppercase",
  margin: "0 auto",
};
const jobStyle = {
  fontSize: "18px",
  fontWeight: "300",
  marginTop: "5px",
  color: "#919191",
};
const bioStyle = {
  fontSize: "16px",
  color: "#7B7B7B",
  fontWeight: "300",
  margin: "10px auto",
  lineHeight: "20px",
};

ProfileComponent.defaultProps = {
  fullname: "John weak",
  profession: "Default Profession",
  bio: "Default Bio",
};

ProfileComponent.propTypes = {
  image: PropTypes.string,
  fullname: PropTypes.string,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};
const followStyle = {
  position: "absolute",
  zIndex: 11,
  top: "18vw",
  right: "25px",
  width: "50px",
  height: "50px",
  background: "linear-gradient(to left, #2D77C1, #68FAC2)",
  borderRadius: "100%",
  border: "none",
  boxShadow: "0 10px 15px rgb(110 221 235 / 53%)",
};
export default ProfileComponent;

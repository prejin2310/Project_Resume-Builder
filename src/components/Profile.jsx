import React from "react";
import { useBasicInfo } from "../Context/StatesProvider";

const Profile = () => {
  const { profile, setProfile } = useBasicInfo();
  return (
    <>
      <div className="profile">
        <div className="profile_header">
          <h2 className="colorh">Profile</h2>
          <p className="text-muted">
            Featuring a professional summary introduces you to hiring managers.
          </p>
          <textarea
            name="profile"
            id=""
            cols="80"
            rows="10"
            placeholder="write about yourself (atleast 50 words)"
            minLength={50}
            className="p-2"
            onChange={(e) => setProfile(e.target.value)}
          />
         
        </div>
      </div>
    </>
  );
};

export default Profile;

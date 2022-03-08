import React from "react";
import UserDelete from "../Components/Userinfo/UserDelete";
import UserinfoEdit from "../Components/Userinfo/UserinfoEdit";
import UserinfoRecentList from "../Components/Userinfo/UserinfoRecentList";
import UserinfoRecord from "../Components/Userinfo/UserinfoRecord";
import UserinfoRecent from "../Components/Userinfo/UserinfoRecent";
function Userinfo() {
    return (
        <>
            <UserinfoEdit />
            <UserinfoRecord />
            <UserinfoRecentList />
            <UserinfoRecent />
            {/* <UserDelete /> */}
        </>
    );
}
export default Userinfo;

import React from "react";
import UserDelete from "../Components/Userinfo/UserDelete";
import UserinfoEdit from "../Components/Userinfo/UserinfoEdit";
import UserinfoRecent from "../Components/Userinfo/UserinfoRecent";
import UserinfoRecord from "../Components/Userinfo/UserinfoRecord";

function Userinfo() {
    return (
        <>
            <UserinfoEdit />
            <UserinfoRecord />
            <UserinfoRecent />
            <UserDelete />
        </>
    );
}
export default Userinfo;

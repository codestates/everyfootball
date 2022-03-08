import React from "react";

import UserinfoEdit from "../Components/Userinfo/UserinfoEdit";
import UserinfoRecord from "../Components/Userinfo/UserinfoRecord";
import UserinfoRecent from "../Components/Userinfo/UserinfoRecent";
function Userinfo() {
    return (
        <>
            <UserinfoEdit />
            <UserinfoRecord />
            <UserinfoRecent />
        </>
    );
}
export default Userinfo;

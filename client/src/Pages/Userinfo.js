import React from "react";
import UserinfoEditList from "../Components/Userinfo/UserinfoEditList";
import UserinfoRecentList from "../Components/Userinfo/UserinfoRecentList";
import UserinfoRecordList from "../Components/Userinfo/UserinfoRecordList";

function Userinfo() {
    return (
        <>
            <UserinfoEditList />
            <UserinfoRecordList />
            <UserinfoRecentList />
        </>
    );
}
export default Userinfo;

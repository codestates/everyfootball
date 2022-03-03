import React from "react";
import UserinfoEditList from "../Components/Userinfo/UserinfoEditList";
import UserinfoRecentList from "../Components/Userinfo/UserinfoRecentList";
import UserinfoRecordList from "../Components/Userinfo/UserinfoRecordList";
import Header from "../Components/Mainpage/Header";
import Footer from "../Components/Mainpage/Footer";

function Userinfo() {
    return (
        <>
            <Header />
            <UserinfoEditList />
            <UserinfoRecordList />
            <UserinfoRecentList />
            <Footer />
        </>
    );
}
export default Userinfo;

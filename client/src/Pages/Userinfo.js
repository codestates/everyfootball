import React from "react";
import UserinfoEdit from "../Components/Userinfo/UserinfoEdit";
import UserinfoRecent from "../Components/Userinfo/UserinfoRecent";
import UserinfoRecord from "../Components/Userinfo/UserinfoRecordList";
import Header from "../Components/Mainpage/Header";
import Footer from "../Components/Mainpage/Footer";

function Userinfo() {
    return (
        <>
            <Header />
            <UserinfoEdit />
            <UserinfoRecord />
            <UserinfoRecent />
            <Footer />
        </>
    );
}
export default Userinfo;

import React from "react";
import UserDelete from "../Components/Userinfo/UserDelete";
import UserinfoEdit from "../Components/Userinfo/UserinfoEdit";
import UserinfoRecent from "../Components/Userinfo/UserinfoRecent";
import UserinfoRecord from "../Components/Userinfo/UserinfoRecord";
import Header from "../Components/Mainpage/Header";
import Footer from "../Components/Mainpage/Footer";

function Userinfo() {
    return (
        <>
            <Header />
            <UserDelete />
            <UserinfoEdit />
            <UserinfoRecord />
            <UserinfoRecent />
            <Footer />
        </>
    );
}
export default Userinfo;

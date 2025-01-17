import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Team from "@/pages/Team";
import Login from "@/pages/Login";
import UserProfile from "@/pages/UserProfile";

function MainRouter() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        {/* todo */}
        {/* <Route path="/account" element={<Account/>} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default MainRouter;

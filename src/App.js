import React, { useEffect, useState } from "react";
import UserAuth from "./auth/UserAuth";
import NavBar from "./navbar/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupPage from './auth/SignupPage'
import Postspage from './posts/Postspage';
import Home from './home/Home'
import { AuthProvider } from "./contexts/AuthContext";
import Profile from "./profile/Profile";
import UpdateProfile from "./profile/UpdateProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import forgotPassword from "./auth/forgotPassword";
import Chat from "./chat/Chat";
import UpcomingEvents from "./upcoming events/EventsAhead";
import Profiledata from "./profile/Profiledata";
import Addprofiledata from "./profile/Addprofiledata";
import Editprofiledata from "./profile/Editprofiledata";
import Users from "./users/Users";
import Announcementspage from "./announcements/Announcementspage"
import CreateAnnouncement from "./announcements/CreateAnnouncement";
import Particles from "./components/Particles";

import "./animation.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/Posts" exact component={Postspage} />
          <Route path="/Announcements" exact component={Announcementspage} />
          <Route path="/UserAuth" exact component={UserAuth} />
          <Route path="/SignupPage" exact component={SignupPage} />
          <Route path="/forgotPassword" exact component={forgotPassword} />
          {/* <Particles/> */}
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/Profile" exact component={Profiledata} />
          <PrivateRoute path="/Editprofiledata" exact component={Editprofiledata} />
          <Route path="/Addprofiledata" exact component={Addprofiledata} />
          <Route path="/UpdateProfile" exact component={UpdateProfile} />
          <Route path="/Chat" exact component={Chat} />
          <Route path="/UpcomingEvents" exact component={UpcomingEvents}/>
          <Route path="/Users" exact component={Users} />
          <Route path="/CreateAnnouncement" exact component={CreateAnnouncement} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Donate from "./Components/Donate";
import LandingPage from "./Components/LandingPage";
import NewCampaign from "./Components/NewCampaign";
import UpdateCampaign from "./Components/UpdateCampaign";
import CampaignStarted from "./Components/CampaignStarted";
import DonatedSuccessfully from "./Components/DonatedSuccessfully";
import CampaignCard from "./Components/CampaignCard";
import HowitWorks from "./Components/HowitWorks";
import Categories from "./Components/Categories";
import SideBar from "./Components/SideBar";

import Profile from "./Components/Sidebar/Userdata/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import MyCampaigns from "./Components/Sidebar/Userdata/MyCampaigns";
import FavCampaigns from "./Components/Sidebar/Userdata/FavCampaigns";
import TotalDonations from "./Components/Sidebar/Userdata/TotalDonations";
import TotalRcv from "./Components/Sidebar/Userdata/TotalRcv";

function App() {
  return (
    <Routes>
      <Route path="/HowitWorks" element={<HowitWorks />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/NewCampaign" element={<NewCampaign />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />

      <Route path="/TotalRcv" element={<TotalRcv />} />
      <Route path="/TotalDonations" element={<TotalDonations />} />
      <Route path="/FavCampaigns" element={<FavCampaigns />} />
      <Route path="/MyCampaigns" element={<MyCampaigns />} />
      <Route path="/" element={<Sidebar />} />
    </Routes>
  );
}

export default App;

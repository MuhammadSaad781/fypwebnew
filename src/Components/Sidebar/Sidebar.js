import React from "react";
import Navbar from "../Navbar";
import img from "../Sidebar/Sidebarimage/donated.png";
import Avatar from "@mui/material/Avatar";
import CampaignIcon from "@mui/icons-material/Campaign";
import CampaignCard from "../CampaignCard";
import { useNavigate } from "react-router-dom";
import Sidebarnav from "./Sidebarnav";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <Sidebarnav />
    </div>
  );
}

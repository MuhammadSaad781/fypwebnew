import React from "react";

import Navbar from "../Navbar";
import img from "../Sidebar/Sidebarimage/donated.png";
import Avatar from "@mui/material/Avatar";
import CampaignIcon from "@mui/icons-material/Campaign";
import CampaignCard from "../CampaignCard";
import { useNavigate } from "react-router-dom";
export default function Sidebarnav() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <div class="sidenav">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src={img}
              sx={{ width: 100, height: 100, marginTop: 10, cursor: "pointer" }}
              onClick={() => navigate("/Profile")}
            />
          </div>
          <div className="row">
            <button
              className="btn"
              style={{
                color: "white",
                marginTop: 20,
                borderColor: "white",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/MyCampaigns")}
            >
              My Campaigns
            </button>
            <button
              className="btn"
              style={{
                color: "white",
                marginTop: 20,
                borderColor: "white",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/FavCampaigns")}
            >
              Favourite Campaigns
            </button>
            <button
              className="btn"
              style={{
                color: "white",
                marginTop: 20,
                borderColor: "white",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/TotalDonations")}
            >
              Total Donations
            </button>
            <button
              className="btn"
              style={{
                color: "white",
                marginTop: 20,
                borderColor: "white",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/TotalRcv")}
            >
              Total Recievings
            </button>
            <button
              className="btn"
              style={{
                color: "white",
                marginTop: 20,
                borderColor: "white",
                fontWeight: "bold",
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

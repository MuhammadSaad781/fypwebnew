import React from "react";
import Navbar from "./Navbar";
import newcampaign from "../images/newcampaign.png";

import CampaignForm from "./forms/CampaignForm";
export default function NewCampaign() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class=" newcampaignimage container">
        <img src={newcampaign} class="image rounded img-fluid" alt="..." />
      </div>
      <CampaignForm />
    </div>
  );
}

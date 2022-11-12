import React from "react";
import Navbar from "../../Navbar";
import profileimage from "./sampleimage/saad.jpg";
import { Button, Checkbox, Grid } from "@mui/material";
export default function Profile() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={profileimage}
          class="rounded-circle m-3"
          style={{
            width: "17%",
            height: 250,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#242F9B", fontSize: 20, fontWeight: "bold" }}>
          Name
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Muhammad Saad</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#242F9B", fontSize: 20, fontWeight: "bold" }}>
          Email
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Ch.saad781@gmail.com</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#242F9B", fontSize: 20, fontWeight: "bold" }}>
          Password
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>******</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            "&.MuiButton-contained": {
              backgroundColor: "#E9DB62",
              color: "black",
            },
            borderRadius: "50px",
            marginBottom: "2rem",
          }}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

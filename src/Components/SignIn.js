import React from "react";
import login from "../images/login.png";
import SignInform from "./forms/SignInform";

import Navbar from "./Navbar";

export default function SignIn() {
  return (
    <div>
      <Navbar />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={login} class="rounded img-fluid m-5" alt="..." />
          </div>
          <div class="col mt-5">
            <SignInform />
          </div>
        </div>
      </div>
    </div>
  );
}

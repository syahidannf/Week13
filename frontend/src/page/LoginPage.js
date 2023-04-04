import React from "react";
import LoginCard from "../components/LoginCard";
import MyNav from "../components/MyNav";

export default function LoginPage() {
  return (
    <React.Fragment>
      <MyNav title="Books" />
      <LoginCard />
    </React.Fragment>
  );
}

import React from "react";
import RegistCard from "../components/RegisterCard";
import MyNav from "../components/MyNav";

export default function RegistPage() {
  return (
    <React.Fragment>
      <MyNav title="Books" />
      <RegistCard />
    </React.Fragment>
  );
}

import React from "react";
// import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MobileBanner from "../MobileBanner";

function Wrapper() {
  const { width } = useWindowDimensions();

  // console.log(width);
  return <>{width > 800 ? <Outlet /> : <MobileBanner />}</>;
}

export default Wrapper;

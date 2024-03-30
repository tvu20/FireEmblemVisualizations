import React from "react";

import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

import "./about.css";

import getColor from "../../utils/colors";
import { DESC } from "../../utils/descriptions";

function WhatIsFEPage() {
  const listTerms = () => {
    return Object.values(DESC).map((value) => {
      return (
        <>
          <p>
            <span className="fe-page-object">{value.name}:</span>{" "}
            {value.description}
          </p>
        </>
      );
    });
  };

  return (
    <>
      <NavBar color={getColor("menu")} />
      <div className="about-page">
        <div className="about-page__left">
          <div className="about-page__content">
            <h2>Fire Emblem: A Brief Introduction</h2>
            <p>
              Fire Emblem is a Japanese fantasy role-playing game franchise
              developed by Intelligent Systems and published by Nintendo. The
              series began on the Nintendo Entertainment System in 1990, and
              currently consists of 17 mainline entries as well as various
              spin-off titles. The series has been cited as an inspiration for
              many other tactical role-playing games and has been featured in
              other titles such as the Super Smash Bros franchise.
            </p>
            <h3>Key terms</h3>
            {listTerms()}
          </div>
        </div>
        <div className="about-page__right">
          <Footer vertical />
        </div>
      </div>
    </>
  );
}

export default WhatIsFEPage;

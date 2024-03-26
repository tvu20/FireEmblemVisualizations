import React, { useState } from "react";

import linefull from "../../../assets/gender/line-full.png";
import linenoa from "../../../assets/gender/line-no-avatar.png";
import linenor from "../../../assets/gender/line-no-remakes.png";

import "./gender.css";

const data = [
  { id: "1", tabTitle: "All Games", tabContent: linefull },
  { id: "2", tabTitle: "All Games (no avatars)", tabContent: linenoa },
  { id: "3", tabTitle: "Excluding Remakes", tabContent: linenor },
];

function LineTabs(props) {
  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id
          ? "gender-line-tab-title gender-line-tab-title--active"
          : "gender-line-tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = data.map((item) => (
    <img
      style={visibleTab === item.id ? {} : { display: "none" }}
      src={item.tabContent}
      alt={item.tabTitle}
    ></img>
  ));

  return (
    <div className="gender-line-tabs">
      <ul className="gender-line-tabs-titles">{listTitles}</ul>
      <div className="gender-line-tab-content">{listContent}</div>
    </div>
  );
}

export default LineTabs;

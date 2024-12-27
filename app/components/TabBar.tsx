import React from "react";
import styles from "../style.module.scss";

interface TabBarProps {
  onTabClick: (index: number) => void;
}

const TabBar: React.FC<TabBarProps> = ({ onTabClick }) => {
  const tabs = [
    "Branding",
    "Digital Marketing",
    "Web Development",
    "App Development",
    "Ad Making",
    "Content Management",
  ];

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => onTabClick(index)}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabBar;

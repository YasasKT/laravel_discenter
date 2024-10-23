"use client";
import React from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";
import "@/css/AdminTopSection.css";
import { CgMenu } from "react-icons/cg";

export interface TopSectionProps {
  title?: string;
  toggleSidebar?: () => void;
  isLayoutShifted?: boolean;
}

const TopSection: React.FC<TopSectionProps> = ({
  title,
  toggleSidebar,
  isLayoutShifted=false,
}) => {
  return (
    <div className="page-top">
        <div className="title-header">
        {!isLayoutShifted && (
          <div className="menu-icon">
            <CgMenu size={20} onClick={toggleSidebar} />
          </div>
        )}
          <h1>{title}</h1>
          <div className="title-separator"></div>
        </div>
      </div>
  );
};

export default TopSection;

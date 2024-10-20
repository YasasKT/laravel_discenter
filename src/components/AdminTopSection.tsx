"use client";
import React from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";
import '@/css/AdminTopSection.css';

interface TopSectionProps {
    title: string;
    pageLabel: string;
    buttonText: string;
    onButtonClick: () => void;
}

const TopSection: React.FC<TopSectionProps> = ({ title, pageLabel, buttonText, onButtonClick }) => {
    return (
        <div className="page-top">
            <div className="page-header">
                <div className="title-header">
                    <h1>{title}</h1>
                    <hr className="underline" />
                </div>
                <div className="next-text">
                    <h2 className="page-label">{pageLabel}</h2>
                    <button className="create-new" onClick={onButtonClick}>
                        <span className="new-icon"><HiMiniPlusCircle /></span>
                        <span className="new-text">{buttonText}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopSection;
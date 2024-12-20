"use client";

import { useState, useEffect } from "react";
import HeroSection from "./heroProfile";
import "@/css/Profile.css";
import { UserProfile } from "../models/userProfile";
import { getUserProfile, updateUserProfile, changeUserPassword } from "../network/userProfile_api";

export default function Profile() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getUserProfile();
                setUser(profile);
            } catch (err) {
                setError("Failed to load profile. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleEditProfile = async () => {
        const updatedProfile = {
            fullName: "New Name",
            phone: "0778545114",
        };

        try {
            const profile = await updateUserProfile(updatedProfile);
            setUser(profile);
            alert("Profile updated successfully!");
        } catch (err) {
            alert("Failed to update profile. Please try again.");
        }
    };

    const handleChangePassword = async () => {
        const currentPassword = prompt("Enter your current password:");
        const newPassword = prompt("Enter your new passowrd:");

        if (currentPassword && newPassword) {
            try {
                const success = await changeUserPassword(currentPassword, newPassword);
                if (success) alert("Password changed successfully!");
            } catch (err) {
                alert("Failed to change password. Please try again.");
            }
        }
    };
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>;
    return (
        <div>
            <HeroSection />
            <div className="profilePage-container">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src={user?.profilePic || "/img/default-avatar.jpg"} alt="Profile" />
                </div>

                <div className="profile-details">
                    <div className="detail-row1">
                        <div className="detail-prof">
                            <h4>Full Name</h4>
                            <p>{user?.fullName}</p>
                        </div>
                        <div className="detail-prof">
                            <h4>Email Address</h4>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <div className="detail-row2">
                        <div className="detail-prof">
                            <h4>Birthday</h4>
                            <p>{user?.birthday}</p>
                        </div>
                        <div className="detail-prof">
                            <h4>Phone Number</h4>
                            <p>{user?.phone}</p>
                        </div>
                        <div className="detail-prof">
                            <h4>Gender</h4>
                            <p>{user?.gender}</p>
                        </div>
                    </div>
                </div>
                <div className="profile-actions">
                    <button className="edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
                    <button className="change-password-btn" onClick={handleChangePassword}>Change Password</button>
                </div>
            </div>
            </div>
        </div>
    );
}
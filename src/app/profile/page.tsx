"use client";
import HeroSection from "./heroProfile";
import "@/css/Profile.css";

export default function Profile() {
    return (
        <div>
            <HeroSection />
            <div className="profilePage-container">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="/img/profile-avatar.jpg" alt="Profile" />
                </div>

                <div className="profile-details">
                    <div className="detail-row1">
                        <div className="detail-prof">
                            <h4>Full Name</h4>
                            <p>Haru Katt</p>
                        </div>
                        <div className="detail-prof">
                            <h4>Email Address</h4>
                            <p>Harukatt120@gmail.com</p>
                        </div>
                    </div>
                    <div className="detail-row2">
                        <div className="detail-prof">
                            <h4>Birthday</h4>
                            <p>11/07/2023</p>
                        </div>
                        <div className="detail-prof">
                            <h4>Phone Number</h4>
                            <p>0711242069</p>
                        </div>
                        <div className="detail-prof">
                            <h4>Gender</h4>
                            <p>Male</p>
                        </div>
                    </div>
                </div>
                <div className="profile-actions">
                    <button className="edit-profile-btn">Edit Profile</button>
                    <button className="change-password-btn">Change Password</button>
                </div>
            </div>
            </div>
        </div>
    );
}
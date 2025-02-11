import React from "react";
import "./styles.css";

const Header: React.FC = () => {

    return (
        <div className="header">
            <a href="#" className="header_logo">ЛОГОТИП</a>
            <div className="header_img">
                <button className="img">
                    <img  src="/public/notification.png"
                              alt="Notification"/>
                </button>
                <button className="img">
                    <img  src="/public/unknownUser.png"
                              alt="Notification"/>
                </button>
            </div>
        </div>
    )
}

export default Header;

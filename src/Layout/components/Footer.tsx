import React from "react";
import "./styles.css";

const Footer: React.FC = () => {

    return (
        <div className="footer">
            <div className="footer_copyright" >
                <img  src="/public/icon.png"
                          alt="Notification"/>
                <span>2018-2023 Платформа, все права защищены</span>
            </div>
            <div className="footer_menu">
                <ul className="menu_list">
                    <li className="menu_item">
                        <a href="#" className="item">Контактная информация</a>
                        </li>
                    <li className="menu_item">
                        <a href="#" className="item">Конфиденциальность</a>
                    </li>
                    <li className="menu_item">
                        <a href="#" className="item" >Пользовательское соглашение</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;

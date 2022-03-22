import React, { useState } from "react";
import './index.scss'

import { Layout } from 'antd';
import {
    MenuUnfoldOutlined
} from '@ant-design/icons';

export default function Navbar(props) {
    const { Header } = Layout;
    const [dropdownOpen, setDropdownOpen] = useState(true)

    function toggleSidebar() {
        props.onCollapsed()
    }

    function toggleMenu() {
        setDropdownOpen(!dropdownOpen)
    }

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
        window.location.reload(false);
    }

    return (
        <>
            <Header id="navbar">
                <MenuUnfoldOutlined className='trigger' onClick={toggleSidebar} />
                <div>Project</div>
                <div className="right-menu">
                    <img 
                        className="profile-icon"
                        alt="logo"
                        onClick={toggleMenu}
                        src='data:image/png;base64,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'
                    />
                </div>
            </Header>
            <div className="dropdown-menu" hidden={dropdownOpen}>
                <p className="dropdown-item">Settings</p>
                <p className="dropdown-item" onClick={handleLogout}>Log Out</p>
            </div>
        </>
    );
};
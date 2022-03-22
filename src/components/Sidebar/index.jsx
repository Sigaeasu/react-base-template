import React from 'react';
import './index.scss'

import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

export default function Sidebar(props) {
    const { SubMenu } = Menu;
    const { Sider } = Layout;

    return (
        <>
            <Sider 
                trigger={null} 
                collapsible 
                collapsed={props.collapsed}
            >
                <div className="logo" />
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={['1']}
                >
                    <SubMenu 
                        key="1" 
                        icon={<UserOutlined />} 
                        title="subnav "
                    >
                        <Menu.Item key="11">option1</Menu.Item>
                        <Menu.Item key="12">option2</Menu.Item>
                        <Menu.Item key="13">option3</Menu.Item>
                        <Menu.Item key="14">option4</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
}
import React from "react"
import {
    Routes,
    Route,
} from "react-router-dom";
import { Layout } from 'antd';
import './index.scss'

import Sample from '../../views/Sample'

export default function Content() {
    const { Content } = Layout;

    return (
        <>
            <Content id="content">
                <Routes>
                    <Route path="/sample" element={<Sample />} />
                </Routes>
            </Content>
        </>
    );
}
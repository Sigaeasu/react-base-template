import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './index.scss'

import { 
    Typography, 
    Input,
    Button
} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { Title } = Typography;

    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        username: null,
        password:null
    })

    const handleUsernameChange = (event) => {
        setForm({
            ...form,
            username: event.target.value
        })
    }
    
    const handlePasswordChange = (event) => {
        setForm({
            ...form,
            password: event.target.value
        })
    }

    const updateLocalStorage = (value) => {
        localStorage.removeItem("isAuthenticated");
        localStorage.setItem("isAuthenticated", true);
        localStorage.removeItem("user");
        localStorage.setItem("user", value.data);
    }

    const hanldeSignIn = async () => {
        if (!form.username || form.username.length === 0 || !form.password || form.password.length === 0) {
            toast.error('Username/password is missing!!!');
        } else {
            setIsLoading(true)
            try {
                updateLocalStorage(form)
                setIsLoading(false)
                dispatch({type: "_NOTIFICATION", message: "Login Success"})
                return navigate("/");
            } catch (error) {
                dispatch({ type: "_ERROR", show: true, response: error.response })
                setIsLoading(false)
            }
        }
    }

    return (
        <div id='background'>
            <div id='container'>
                <div id='form'>
                    <Title className='text-center'>LOGIN</Title>

                    <Title level={5} style={{marginBottom: '0px'}}>USERNAME</Title>
                    <Input 
                        placeholder="Username" 
                        onChange={handleUsernameChange}
                    />

                    <Title level={5} style={{marginBottom: '0px', marginTop: '20px'}}>PASSWORD</Title>
                    <Input.Password
                        placeholder="Password" 
                        onChange={handlePasswordChange}
                        iconRender={visible => 
                            (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)
                        }
                    />

                    <Button 
                        className='login_right_container-button' 
                        type="primary" 
                        id='button' 
                        onClick={hanldeSignIn}
                        loading={isLoading}
                    >
                        <span className='font-bold'>SIGN IN</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
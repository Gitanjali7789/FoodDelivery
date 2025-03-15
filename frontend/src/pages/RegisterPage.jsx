import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/userActions';

const RegisterPage = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            dispatch(register(name, email, password));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl mb-4">Register</h1>
            {error && <div className="text-red-500">{error}</div>}
            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input 
                        type="text" 
                        className="w-full p-2 border" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input 
                        type="email" 
                        className="w-full p-2 border" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input 
                        type="password" 
                        className="w-full p-2 border" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Confirm Password</label>
                    <input 
                        type="password" 
                        className="w-full p-2 border" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
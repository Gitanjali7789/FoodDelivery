import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';

const LoginPage = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl mb-4">Login</h1>
            {error && <div className="text-red-500">{error}</div>}
            <form onSubmit={submitHandler}>
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
                <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
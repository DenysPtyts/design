import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

export function App(){
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
        handleLogin();
        }
    };

    const handleLogin = () => {
        navigate('/admin');
    };

    return(
        <div className='Main'>
            <input type='text' placeholder='Login' className='login' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
            <button onClick={handleLogin} disabled={inputValue.trim() === ''}>Login</button>
        </div>
    )
}
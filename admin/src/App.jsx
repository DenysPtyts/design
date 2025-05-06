import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

export function App(){
    // const [inputValue, setInputValue] = useState('');
    const [values, setValues] = useState({
        post: '',
        password: ''
    });
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    const role = res.data.user.post;
                    switch (role) {
                        case 'admin':
                            navigate('/admin');
                            break;
                        case 'manager':
                            navigate('/manager');
                            break;
                        case 'user':
                            navigate('/user');
                            break;
                        default:
                            alert('Невідома роль користувача');
                    }
                }else {
                    alert(res.data.Error || "Login failed");
                }
            })
            .catch(err => {
                console.log(err);
                alert("Помилка сервера");
            });
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    };

    return(
        <div className='Main'>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='post'
                placeholder='Login'
                className='login'
                value={values.post}
                onChange={handleChange}
            />
            <input
                type='password'
                name='password'
                placeholder='Password'
                className='login'
                value={values.password}
                onChange={handleChange}
            />
            <button
                disabled={values.post.trim() === '' || values.password.trim() === ''}
            >
                Login
            </button>
        </form>
    </div>
    )
}
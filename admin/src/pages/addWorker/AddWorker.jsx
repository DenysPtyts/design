import './AddWorker.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

function AddWorker(){
    const [values, setValues] = useState({
        workerName: '',
        workerSurname: '',
        post: '',
        cardID: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/addworker', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/')
            }else{
                alert("Error");
            }
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="worker">
            <form onSubmit={handleSubmit}>
                <div className="container">
                <Link to='/admin'>
                    <button className='btn-back'>Back</button>
                </Link>
                    <h2>Add Worker</h2>
                    <div className="form">
                        <input type='text' placeholder="Ім'я" 
                        onChange={e => setValues({...values, workerName: e.target.value})} />
                        <input type='text' placeholder='Прізвище' onChange={e => setValues({...values, workerSurname: e.target.value})}/>
                        <input type='text' placeholder='Роль' onChange={e => setValues({...values, post: e.target.value})} />
                        <input type='number' placeholder='Card ID' onChange={e => setValues({...values, cardID: e.target.value})} />
                        <input type='password' placeholder='Пароль' onChange={e => setValues({...values, password: e.target.value})} />
                    </div>
                    <div>
                        <button className="btn-add">Додати</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddWorker
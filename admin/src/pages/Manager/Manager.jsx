import './Manager.css'
import { Link } from 'react-router-dom'
import AvaAdmin from '../../images/admin.png'

export function Manager(){
    return(
        <div className="manager">
            <Link to='/'>
            <button className='btn-back'>Back</button>
            </Link>
            <div className="container">
                <div className="img-employe">
                    <img src={AvaAdmin} alt='' />
                </div>
                <div className="name">
                    <span>Птиць Денис</span>
                    <p>Роль: Менеджер</p>
                </div>
            </div>
            <div className="buttons">
                <Link to='/manager'>
                    <button className='delete'>Delete Worker</button>
                </Link>
                <Link to='/manager'>
                    <button className='upd'>Update Worker</button>
                </Link>
                <Link to='/analis'>
                    <button className='analis'>Analis</button>
                </Link>
            </div>
        </div>
    )
}

export default Manager
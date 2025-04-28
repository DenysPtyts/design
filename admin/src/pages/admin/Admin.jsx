import { Link } from 'react-router-dom'
import AvaAdmin from '../../images/admin.png'
import './Admin.css'

export function Admin(){
    return(
        <div className="Admin">
            <div className="container">
                <div className="img-employe">
                    <img src={AvaAdmin} alt='' />
                </div>
                <div className="name">
                    <span>Гнатів Святослав</span>
                    <p>Роль: Адміністратор</p>
                </div>
            </div>
            <div className="buttons">
                <Link to='/admin'>
                    <button className='delete'>Delete Worker</button>
                </Link>
                <Link to='/admin'>
                    <button className='upd'>Update Worker</button>
                </Link>
                <Link to='/admin'>
                    <button className='add'>Add Worker</button>
                </Link>
                <Link to='/analis'>
                    <button className='analis'>Analis</button>
                </Link>
            </div>
        </div>
    )
}
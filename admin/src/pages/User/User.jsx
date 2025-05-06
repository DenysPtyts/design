import { Link } from 'react-router-dom'
import AvaAdmin from '../../images/admin.png'
import './User.css'

function User(){
    return(
        <div className="user">
            <Link to='/'>
            <button className='btn-back'>Back</button>
            </Link>
            <div className="container">
                <div className="img-employe">
                    <img src={AvaAdmin} alt='' />
                </div>
                <div className="name">
                    <span>Sharpe Jayson</span>
                    <p>Роль: user</p>
                </div>
            </div>
            <div className="buttons">
                <Link to='/user'>
                    <button className='analis'>Analis</button>
                </Link>
            </div>
        </div>
    )
}

export default User
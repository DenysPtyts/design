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
                <button className='delete'>Delete Worker</button>
                <button className='upd'>Update Worker</button>
                <button className='add'>Add Worker</button>
            </div>
        </div>
    )
}
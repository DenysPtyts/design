import './Admin.css'

export function Admin(){
    return(
        <div className="Admin">
            <div className="person">
                <span>Name:</span>
                <span>Last Name:</span>
                <span>Time:</span>
                <span>ID:</span>
            </div>
            <div className="buttons">
                <button className='delete'>Delete Worker</button>
                <button className='upd'>Update Worker</button>
                <button className='add'>Add Worker</button>
            </div>
        </div>
    )
}
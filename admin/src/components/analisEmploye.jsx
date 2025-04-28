function AnalisEmploye(props){
    const defenitions = props.data;

    return(
        <div className="analis-employe">
            {defenitions.map((item, idx) =>
            <div className="analis-cart" key={idx}>
                <img src={"./img/" + item.img} />
                <div className="data">
                    <h3 className="id">ID: {item.id}</h3>
                    <h3 className="last-name">Last Name: {item.LastName}</h3>
                    <h3 className="name">Name: {item.Name}</h3>
                    <p className="time">Time: {item.Time}</p>
                </div>
            </div>
            )}
        </div>
    )
}

export default AnalisEmploye
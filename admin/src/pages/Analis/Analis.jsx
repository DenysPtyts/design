import './Analis.css'
import { useState } from 'react'
import Person from '../../data/person.json'
import AnalisEmploye from '../../components/analisEmploye'
import { Link } from 'react-router-dom';


function Analis(){
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPersons = Person.filter(person => 
        person.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.LastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.Time.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>
            <Link to='/admin'>
                <button className='btn-back'>Back</button>
            </Link>
            <div className="analis">
                <input placeholder='Search' className='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <AnalisEmploye data={filteredPersons} />
            </div>
        </>
    )
}

export default Analis
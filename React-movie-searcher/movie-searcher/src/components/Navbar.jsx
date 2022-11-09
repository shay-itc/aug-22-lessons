import { useState } from 'react'
import './Navbar.css';


function Navbar({ onSearch }) {
    const [searchKey, setSearchKey] = useState('');

    const onSubmit = () => {
        console.log('onSubmit')

        onSearch(searchKey);
    }

    return (
        <nav className='nav-bar'>
            <input className='input'
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}></input>
            <button className='button' onClick={onSubmit}>Submit</button>
        </nav>)


}

export default Navbar
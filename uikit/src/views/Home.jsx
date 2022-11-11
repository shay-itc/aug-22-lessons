import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const [counter, setCounter] = useState(0);

    console.log('counter', counter)

    return (
        <div>
            Home
            <button onClick={() => { setCounter(counter + 1) }}>Click me</button>
            <br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home;
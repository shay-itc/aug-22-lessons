import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import InnerComponent from '../components/InnerComponent';
import { SomeContext } from '../SomeContext'


function Home() {

    const [counter, setCounter] = useState(0);

    const { myState } = useContext(SomeContext);

    console.log('counter', counter)

    return (
        <div>
            Home
            <br />
            {myState}
            <br />
            <InnerComponent />
            {/* <button onClick={() => { setCounter(counter + 1) }}>Click me</button>
            <br />
            <Link to="/contact">Contact</Link> */}
        </div>
    )
}

export default Home;
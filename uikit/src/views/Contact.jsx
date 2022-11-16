import { Link, useParams } from 'react-router-dom';

function Contact() {

    const { type, model } = useParams();

    console.log(type, model);

    return (
        <div>
            Contact
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}

export default Contact;
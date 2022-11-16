import { useContext } from "react";
import { SomeContext } from '../SomeContext'

function InnerComponent(props) {

    const { myState, setMyState } = useContext(SomeContext);

    return (
        <div style={{ margin: '10px', backgroundColor: '#e0e0e0' }}>
            Inner Component
            <br />
            {myState}
            <br />
            <button onClick={() => {
                setMyState('Set from inner')
            }}>Inner Button</button>
        </div>
    )
}

export default InnerComponent;
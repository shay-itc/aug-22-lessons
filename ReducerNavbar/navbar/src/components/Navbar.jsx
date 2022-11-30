import { useReducer } from "react"
import "./Navbar.css"

function NavnarReducer(state, action) {

    console.log('state before', JSON.stringify(state))
    switch (action.type) {
        case 'addItem':
            state.itemsList.push({ title: 'New Item' });
            console.log('state after', state)
            return { ...state };
        case "toggleTheme":
            console.log('theme before', state.theme)
            state.theme = state.theme == 'light' ? 'dark' : 'light';
            console.log('theme after', state.theme)
            return { ...state };
    }
}

export default function Navbar() {

    const [state, dispatch] = useReducer(NavnarReducer, {
        itemsList: [],
        theme: 'light'
    })

    console.log('state', state)

    return (
        <nav className="navbar"
            style={{ backgroundColor: state.theme == 'light' ? '#e3e3e3' : '#333' }}>

            {
                state.itemsList.map((item) => {
                    return (
                        <div className="menu-item">
                            {item.title}
                        </div>
                    );
                })
            }

            <button className="menu-button" onClick={() => { dispatch({ type: 'addItem' }) }}>Add Item</button>
            <button className="menu-button" onClick={() => { dispatch({ type: 'toggleTheme' }) }}>Change Theme</button>

        </nav >
    )
}


// When clicking the change theme button - toggle between
// dark and light background color for the navbar
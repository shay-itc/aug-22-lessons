import { useEffect, useState } from "react";
import { useReducer } from "react"
import "./Navbar.css"

function NavnarReducer(state, action) {

    console.log('action', action)
    switch (action.type) {
        case 'addItem':
            state.itemsList.push({ title: 'New Item' });
            return { ...state };
        case "toggleTheme":
            state.theme = state.theme == 'light' ? 'dark' : 'light';
            return { ...state };
        case "toggleSubmenu":
            if (state.menuIndex == action.payload.index) {
                state.menuIndex = null;
            } else {
                state.menuIndex = action.payload.index;
            }
            return { ...state };
    }
}

export default function Navbar() {

    const [state, dispatch] = useReducer(NavnarReducer,
        {
            itemsList: [],
            theme: 'light',
            menuIndex: null
        }
    )

    console.log(state)

    useEffect(() => {
        // if (myInterval) clearInterval(myInterval)

        // myInterval = setInterval(() => {
        //     console.log('Interval')

        // }, 1000)

        // return () => {
        //     clearInterval(myInterval)
        // }
    }, [])


    return (
        <nav className="navbar"
            style={{ backgroundColor: state.theme == 'light' ? '#e3e3e3' : '#333' }}>

            {
                state.itemsList.map((item, index) => {
                    return (
                        <div className="menu-item" onClick={() => {
                            dispatch({ type: 'toggleSubmenu', payload: { index } })
                        }}>
                            {item.title}
                            {
                                state.menuIndex == index
                                    ? (
                                        <div className="submenu-item">
                                            <ul>
                                                <li>Sub Item</li>
                                                <li>Sub Item</li>
                                                <li>Sub Item</li>
                                                <li>Sub Item</li>
                                            </ul>
                                        </div>) : null
                            }
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
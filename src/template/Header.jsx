import React from 'react'
import './Header.css'
import bandeiraBrasil from './../assets/bandeiraBrasil.png'
import bandeiraEua from './../assets/bandeiraEua.png'

export default function Header() {
    return (
        <header className='header'>
            <div className='linguagens'>
                <img src={bandeiraBrasil} alt="BR" style={{ width: '40px', height: '24px'}}/>
                <img src={bandeiraEua} alt="US" style={{width: '40px', height:'24px'}}/>
            </div>
        </header>
    )
}
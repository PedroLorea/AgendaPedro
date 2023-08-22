import React from 'react'
import './Header.css'
import bandeiraBrasil from './../assets/bandeiraBrasil.png'
import bandeiraEua from './../assets/bandeiraEua.png'
import { useTranslation } from 'react-i18next'

export default function Header() {

    const {i18n} = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return (
        <header className='header'>
            <div className='logoFooter'>AgendaPedro</div>
            <div className='linguagens'>
                <img onClick={() => changeLanguage("pt-BR")} src={bandeiraBrasil} alt="BR" style={{ width: '40px', height: '24px'}}/>
                <img onClick={() => changeLanguage("en-US")} src={bandeiraEua} alt="US" style={{width: '40px', height:'24px'}}/>
            </div>
        </header>
    )
}
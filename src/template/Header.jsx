import React, { useState } from 'react';
import './Header.css';
import bandeiraBrasil from './../assets/bandeiraBrasil.png';
import bandeiraEua from './../assets/bandeiraEua.png';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    return (
        <header className='header'>
            <div className='logoFooter'>AgendaPedro</div>   
            <div className='linguagens'>
                <img 
                    onClick={() => changeLanguage("pt-BR")} 
                    src={bandeiraBrasil} 
                    alt="BR" 
                    style={{ width: '58px', height: '35px', opacity: selectedLanguage === "pt-BR" ? 1 : 0.6 
                    }}
                />
                <img 
                    onClick={() => changeLanguage("en-US")} 
                    src={bandeiraEua} 
                    alt="US" 
                    style={{ width: '58px', height: '35px', opacity: selectedLanguage === "en-US" ? 1 : 0.6 
                    }}
                />
            </div>
        </header>
    );
}

import './../styles/Home.css';
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Home(props) {
  const { t } = useTranslation()



  return (
    <div className='containerHome'>
      <div className="home">
        <div className="logoHome">
          AgendaPedro
        </div>
          <button className="buttonEntrar" onClick={props.showAgenda}>
            {t('ENTRAR')}
          </button>
      </div>
    </div>
  )
}

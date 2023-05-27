import React from "react"
import { Link } from 'react-router-dom';
import './Nav.css'
import ChecklistIcon from '@mui/icons-material/Checklist';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

export default function Nav() {
    return (
        <nav className="nav">


            <Link className="link" to="/todo"><div><ChecklistIcon fontSize="large"/><span>To-do</span></div></Link>


            <Link className="link" to="/postit"><div><PostAddOutlinedIcon fontSize="large"/> <span>Post-it</span></div></Link>


            <Link className="link" to="/objetivos"><div><SportsScoreIcon fontSize="large"/> <span>Objetivos</span></div></Link>


            <Link className="link" to="/frases"><div><ElectricBoltIcon fontSize="large"/> <span>Frases</span></div></Link>


        </nav>
    )
}
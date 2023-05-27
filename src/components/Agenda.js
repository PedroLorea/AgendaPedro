import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from '../pages/Todo';
import PostIt from '../pages/PostIt';
import Calendario from '../pages/Calendario';
import Objetivos from '../pages/Objetivos';
import Nav from '../template/Nav';
import Main from '../template/Main';
import './../styles/Agenda.css'



export default function Agenda() {
    return (
        <div className='containerAgenda'>
        <Router>
            <Nav className="navAgenda"/>
            <Main className="mainAgenda">
                <Routes>
                    <Route path='/todo' Component={Todo} />
                    <Route path='/postit' Component={PostIt} />
                    <Route path='/calendario' Component={Calendario} />
                    <Route path='/objetivos' Component={Objetivos} />
                </Routes>
            </Main>
        </Router>
        </div>
    )
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from '../pages/Todo';
import PostIt from '../pages/PostIt';
import Frases from '../pages/Frases';
import Objetivos from '../pages/Objetivos';
import Nav from '../template/Nav';
import Main from '../template/Main';
import './../styles/Agenda.css'


export default function Agenda(props) {

    return (
        <div className='containerAgenda'>
        <Router>
            <Nav className="navAgenda" {...props}/>
            <Main className="mainAgenda">
                <Routes>
                    <Route path='/todo' Component={Todo} />
                    <Route path='/postit' Component={PostIt} />
                    <Route path='/objetivos' Component={Objetivos} />
                    <Route path='/frases' Component={Frases} />
                </Routes>
            </Main>
        </Router>
        </div>
    )
}
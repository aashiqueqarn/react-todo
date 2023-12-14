import { NavLink } from "react-router-dom";
import '@styles/navbar.css';

export function Navbar()  {
    return (
        <section className="navComponent">
            <nav className="nav-wrapper">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink className={(navData) => (navData.isActive ? "active-style" : 'none')} to={'/'}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={(navData) => (navData.isActive ? "active-style" : 'none')} to={'/tasks'}>Tasks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={(navData) => (navData.isActive ? "active-style" : 'none')} to={'/taskForm'}>Add Task</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
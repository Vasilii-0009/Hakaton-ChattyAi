import './NavItem.css'
import { NavLink } from 'react-router-dom';

function NavItem({text, icon, isСollapsed}) {
   return (
      <NavLink to="/recording" className={({ isActive }) => `${isActive ? 'nav-item nav-item_active' : 'nav-item'}`}>
         <div className={`nav-item__icon nav-item__icon_${icon}`}/>
         <p className={`${isСollapsed ? 'nav-item__text nav-item__text_hidden' : 'nav-item__text'}`}>{text}</p>
      </NavLink>
   )
}

export default NavItem;
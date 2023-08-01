import './Sidebar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';

function Sidebar() {
  const [isСollapsed, setIsСollapsed] = useState(false)

  function handleCollapseSidebar() {
    setIsСollapsed(!isСollapsed)
  }

  return (
    <div className={`${isСollapsed ? 'sidebar sidebar_collapsed' : 'sidebar'}`}>
      <Link to='/'>
        <div className='sidebar__header'> 
          <div className='sidebar__logo'/>
          <div className={`${isСollapsed ? 'sidebar__text-wrapper sidebar__text-wrapper_hidden' : 'sidebar__text-wrapper'}`}>
            <p className='sidebar__text'>Chatty AI</p>
            <p className='sidebar__sub-text'>Version 1.0</p>
          </div>
        </div>
      </Link>
        
      <nav className='sidebar__nav'>
            <NavItem icon={"sidebar-chat"} text={"Чат"} isСollapsed={isСollapsed} />
      </nav>

      <div className='sidebar__footer'>
        <button onClick={handleCollapseSidebar} className='sidebar__btn'>
          <div className='sidebar__btn-icon'/>
          <p className={`${isСollapsed ? 'sidebar__btn-text sidebar__btn-text_hidden' : 'sidebar__btn-text'}`}>Скрыть меню</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar

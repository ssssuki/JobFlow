import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import links from '../utlis/links'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'


const SmallSidebar = () => {
//   const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className='sidebar-container show-sidebar' 
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={()=>console.log('sidebar')}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          {/* <NavLinks toggleSidebar={toggleSidebar} /> */}
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
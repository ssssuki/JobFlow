import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import logo from '../assets/images/logo.svg'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
          <img src={logo} height='30' alt="JobFlow" className="logo" />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
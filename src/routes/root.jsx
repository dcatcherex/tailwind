
import TopMenuBar from './../components/TopMenuBar';
import BottomMenuBar from './../components/BottomMenuBar';
import { Outlet } from 'react-router-dom';



const root = () => {
  return (
    <div>
      
      <div>
        <TopMenuBar  />
      </div>
      <div className='bg-violet-100 pt-16'>
        <Outlet />
      </div>
      <div>
        <BottomMenuBar />
      </div>
    </div>
  )
}

export default root
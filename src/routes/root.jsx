
import TopMenuBar from './../components/TopMenuBar';
import BottomMenuBar from './../components/BottomMenuBar';
import { Outlet } from 'react-router-dom';



const root = () => {
  return (
    <div>
      
      <div>
        <TopMenuBar  />
      </div>
      <div>
        <BottomMenuBar />
      </div>
      <div className='bg-violet-100 '>
        <Outlet />
      </div>
      
    </div>
  )
}

export default root
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

function Layouts(props) {
   return (
      <div className="layouts">
         <Navbar />
         <main>
            <Outlet />
         </main>
      </div>
   );
}

export default Layouts;

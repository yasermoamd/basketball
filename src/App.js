import { Route, Routes } from 'react-router-dom';
import {BottomNavigation, Navbar, Sidebar} from './components';
 import { Home, Podcasts, NbaNews, Search, NcaaNews, Draftss } from './pages';
 
function App() {
  return (
    <div className=" ">
       <div className='fixed w-full'><Navbar /></div>

       <div className='tablet'>
        <Sidebar />
       </div>
       <div><BottomNavigation /></div>
       <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/draftss' element={<Draftss />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/podcasts' element={<Podcasts />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/ncaa_news' element={<NcaaNews />}  />
        <Route path='/search' element={<Search />}  />
       </Routes>
    </div>
  );
}

export default App;

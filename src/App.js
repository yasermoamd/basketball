import React from 'react';
import { Navigate, Route,  Routes } from "react-router-dom";
import { Home, Podcasts, NbaNews, Search, NcaaNews, Draftss } from './pages';
import Layout from './layout/Layout';
import ContactUs from './pages/contact_us';

function App() {
  return (
   <Layout>
     <Routes>
        <Route index path='/' element={<Home />}  />
        <Route path='/draftss' element={<Draftss />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/podcasts' element={<Podcasts />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/ncaa_news' element={<NcaaNews />}  />
        <Route path='/search' element={<Search />}  />
        <Route path='/contact_us' element={<ContactUs />}  />
        <Route path='*' element={<Navigate to='/' />}  />
       </Routes>
    </Layout>
  );
}

export default App;

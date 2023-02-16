import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
import { Home, Podcasts, NbaNews, Search, NcaaNews, Draftss } from './pages';
import Layout from './layout/Layout';
import Admin from './admin/Admin';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route index path='/' element={<Home />}  />
        <Route path='/draftss' element={<Draftss />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/podcasts' element={<Podcasts />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/ncaa_news' element={<NcaaNews />}  />
        <Route path='/search' element={<Search />}  />

        <Route path='/admin' element={<Admin />}  />

        <Route path='*' element={<Navigate to='/' />}  />
       </Route>
    )
);
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
       </Routes>
    </Layout>
  );
}

export default App;

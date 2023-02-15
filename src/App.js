import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home, Podcasts, NbaNews, Search, NcaaNews, Draftss } from './pages';
import RootLayout from './layout/RootLayout';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route  path='/' element={<RootLayout />}  />
        <Route index path='/' element={<Home />}  />
        <Route path='/draftss' element={<Draftss />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/podcasts' element={<Podcasts />}  />
        <Route path='/nba_news' element={<NbaNews />}  />
        <Route path='/ncaa_news' element={<NcaaNews />}  />
        <Route path='/search' element={<Search />}  />
       </Route>
    )
);
function App() {
  return (
    <div>
       <RouterProvider router={router}   />
    </div>
  );
}

export default App;

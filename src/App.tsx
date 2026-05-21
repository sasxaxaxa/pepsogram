import './styles/_reset.scss'
import './styles/_global.scss'
import './styles/_main.scss'
import Header from "./components/layouts/Header.tsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import GalleryPage from './pages/GalleryPage.tsx'
import RegistrationPage from "./pages/RegistrationPage.tsx";
import CommunityPage from "./pages/CommunityPage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/community" element={<CommunityPage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/favourites" element={<div>Понравившееся</div>}/>
            <Route path="/user" element={<div>Профиль</div>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

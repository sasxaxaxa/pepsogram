import './styles/_reset.scss'
import './styles/_global.scss'
import './styles/_main.scss'
import Header from "./components/layouts/Header.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<div>Главная страница</div>} />
            <Route path="/gallery" element={<div>Галерея</div>} />
            <Route path="/favourites" element={<div>Понравившееся</div>} />
            <Route path="/community" element={<div>Сообщество</div>} />
            <Route path="/user" element={<div>Профиль</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

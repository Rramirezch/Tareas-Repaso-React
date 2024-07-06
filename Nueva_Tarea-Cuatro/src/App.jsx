import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/characterPage';
import RickyCharacter from './pages/rickyCharacters'
import Episodes from './pages/episodePage';
import NotFoundPage from './pages/404';
import Personaje from './pages/personaje'



function App() {
  

  return (
    <Router>
      <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
      </ul>
      <div>
        <switch>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/RickyCharacter" exact element={<RickyCharacter />} />
            <Route path="/Episodes" exact element={<Episodes />} />
            <Route path="/Personaje" exact element={<Personaje />} />
            <Route path='*' element={<NotFoundPage/>} />

          </Routes>
      </switch>
      </div>
    </Router>
  )

}

export default App
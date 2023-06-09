import Titulo from './pages/Titulo'
import About from './pages/About'
import State from './pages/State';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){

  const nome = "Thiago"
  const paragrafo = "Parágrafo de teste"
  const cor = "white"
  const soma = 20;
  const name = 'John Doe';
  const urlimg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';


  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home nome={nome}/>}/>
            <Route path="/input" element={<State color="white" texto="Texto" />}/>
            <Route path="/titulo" element={<Titulo nome={nome} paragrafo={paragrafo} cor={cor}/>}/>
            <Route path="/about" element={<About soma={soma} name={name} urlimg={urlimg} color={"purple"} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
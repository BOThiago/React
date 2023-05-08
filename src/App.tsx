import Titulo from './Titulo'
import About from './About'
import State from './State';
import Navbar from './NavBar';
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){

  const nome = "Thiago"
  const paragrafo = "Parágrafo de teste"
  const cor = "red"
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
            <Route path="/input" element={<State color="yellow" texto="Texto" />}/>
            <Route path="/titulo" element={<Titulo nome={nome} paragrafo={paragrafo} cor={cor}/>}/>
            <Route path="/about" element={<About soma={soma} name={name} urlimg={urlimg} color={"purple"} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
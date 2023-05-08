import Titulo from './Titulo'

function App(){
  return (
    <div>
      <h1>Hello World</h1>
      <Titulo nome="Thiago1" paragrafo={"teste"}/>
      <Titulo nome="Thiago2" paragrafo={""} />
      <Titulo nome="Thiago3" paragrafo={""} />
      <Titulo nome="Thiago4" paragrafo={""} />
    </div>
  )
}

export default App
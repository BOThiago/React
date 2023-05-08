function Titulo({nome, paragrafo}){
    // let name = 'Thiago'
    // const soma = 10 + 10
    // const urlimg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'

    return (
        <div>
            <h1>Titulo</h1>
            <h1>Oi eu sou {nome ? nome : "Fulano"}</h1>
            { paragrafo ?
            <p>Teste</p>
            :
            <p></p>
        }
            {/* <p>Oi eu sou um {soma}</p>
            <p>Meu nome é {name}</p>
            <img src={urlimg} alt="" width={150}/> */}
        </div>
    )
}

export default Titulo
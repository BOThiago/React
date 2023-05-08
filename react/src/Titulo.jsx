function Titulo({nome, paragrafo, cor}){
    return (
        <div>
            <h1 style={{color: cor}}>Titulo</h1>
            <h1>Oi eu sou {nome ? nome : "Fulano"}</h1>
            { paragrafo ?
            <p>{paragrafo}</p>
            :
            <p></p>
        }
        </div>
    )
}

export default Titulo
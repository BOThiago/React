function Titulo({nome, paragrafo, cor}){
    return (
        <div className="texto">
            <h1 className="titulo" style={{color: cor}}>Título</h1>
            <h1 className="titulo">Oi eu sou {nome ? nome : "Fulano"}</h1>
            { paragrafo ?
            <p className="descricao-titulo">{paragrafo}</p>
            :
            <p></p>
        }
        </div>
    )
}

export default Titulo
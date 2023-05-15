interface homeProps{
    nome: string,
}

function Home({nome}: homeProps) {
    return (
        <div>
            <h1>Bem-Vindo, {nome}!</h1>
        </div>
    )
}

export default Home
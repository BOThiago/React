interface AboutProps {
    soma: number;
    name: string;
    urlimg: string;
    color: string;
}

function About({soma, name, urlimg, color}: AboutProps){
    return (
        <div id="about" >
            <h1 className="titulo" style={{color: color}}>Sobre mim</h1>
            <p className="descricao">Meu nome é {name}</p>
            <p className="descricao">A soma é {soma + soma}</p>
            <img src={urlimg} alt="" width={150}/>
        </div>
    )
}

export default About
interface AboutProps {
    soma: number;
    name: string;
    urlimg: string;
    color: string;
}

function About({soma, name, urlimg, color}: AboutProps){
    return (
        <div>
            <h1 style={{color: color}}>Sobre mim</h1>
            <p>Meu nome é {name}</p>
            <p>A soma é {soma + soma}</p>
            <img src={urlimg} alt="" width={150}/>
        </div>
    )
}

export default About
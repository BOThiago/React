import { useState } from "react"

interface StateProps {
    color: string,
    texto: string,
}

function State({color}: StateProps){

    const [texto, setTexto] = useState("Texto")
    const [inputText, setInputText] = useState("")

    function onClick(){
        setTexto(inputText)
    }

    return (
        <div>
            <h1 style={{color: color}}>{texto}</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
            <button onClick={onClick}>UseState Button</button>
        </div>
    )
}

export default State
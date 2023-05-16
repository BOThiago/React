import { useState } from "react"
import Button from "../components/Button/Button"
import "../style.css"

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
        <div id="state">
            <h1 className="descricao" style={{color: color}}>{texto}</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
            <Button onClick={onClick} children="Change Text"/>
        </div>
    )
}

export default State
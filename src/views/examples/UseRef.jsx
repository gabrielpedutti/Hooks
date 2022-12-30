import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2) {
    return [...s1].map(function(e, i) {
        return `${e}${s2[i] || ""}`
    }).join("")
}
// [...s1] = Cria um array com cada letra da string separada.
// O map esta percorrendo cada letra do array e concatenando ela com a letra da segunda cadeia de string de acordo com o index (i) que vem do map (index do elemento atual do map)
const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    // count.current = count.current + 1  --> Esse trecho funciona, pois useRef não renderiza toda vez que há uma alteração formando um looping infinito como o useState. Porém da forma acima irá somar 1 ao contador em QUALQUER renderização gerada na página;
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])
    //Utilizando o useEffect você garante que só será somado 1 ao contador apenas quando value1 for alterado.
    useEffect(function() {
        count.current++
        myInput1.current.focus()
    }, [value2])
    
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" 
                    ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input" 
                    ref={myInput2}
                    value={value2} onChange={e => setValue2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef

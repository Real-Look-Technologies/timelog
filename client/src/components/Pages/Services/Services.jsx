import './Services.css'
import React from 'react'

export default function Services(){
    return(
    <div className='Services'>
        <div className='Normal'>
            <h1 className='title'>TIME LOG</h1>
            <h2 className='subtitle'>NORMAL</h2>
            <div className='blocks'>
                <div className='blocktext'>
                    Qualidade e segurança no transporte de cargas
                </div>
                <div className='blocktext'>
                    Solução para sua demanda que não tem urgência
                </div>
                <div className='blocktext'>
                    Assistencia porta-a-porta
                </div>
            </div>
        </div>
        <div className='Rapido'>
            <h1 className='title'>TIME LOG</h1>
            <h2 className='subtitle'>RÁPIDO</h2>
            <div className='blocks'>
                <div className='blocktext'>
                    Foco na sua urgência
                </div>
                <div className='blocktext'>
                    Você define o prazo
                </div>
                <div className='blocktext'>
                    Solução Personalizada
                </div>
                <div className='blocktext'>
                    Entrega rápida em todo o Brasil
                </div>
            </div>
        </div>
    </div>
    )
}
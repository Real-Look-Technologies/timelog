import React from 'react';
import './about-style.css';
import whitebg from '../../resources/whitebg.png';

export default function About() {
    return(
        <main>
            <img src={whitebg} alt='Background' className='whitebg.png'/>
            <section id="about">
                <h1>Apresentando a você um novo conceito no ramo logístico</h1>
                <p>
                    Se você não quer mais desperdiçar seu tempo, chama a TIME LOG! Trabalhamos em todos os modais de transportes com alta performance, 
                    agregando dinamismo e qualidade para cada demanda.
                </p>
                <p>
                    Uma empresa especializada em soluções variadas e personalizadas de logística.
                </p>
                <p>
                    Trabalhamos em todos os modais de transportes com alta performance, agregando dinamismo e qualidade para cada demanda.
                </p>
            </section>

            <section id="services">
                <h2>Serviços</h2>
                <ul>
                    <li>
                        <strong>Time Log Normal:</strong> Serviço voltado para quem precisa de uma solução logística, rodo ou aéreo conforme peso e prazo necessário.
                    </li>
                    <li>
                    <strong>Time Log Urgente:</strong> Serviço voltado para quem não pode esperar, para quem precisa de uma rápida solução, com toda segurança e prazo definido.
                    </li>
                </ul>
            </section>

            <section id="topics">
                <ul>
                <li>Rastreamento Completo Omnichannel Porta-a-porta</li>
                <li>Logística Personalizada</li>
                <li>Soluções Completas</li>
                <li>Atendimento Diferenciado</li>
                </ul>
            </section>

            <section id="services-container">
                <h2>Serviços</h2>
                <ul>
                    <li>
                        <strong>Time Log Normal:</strong> Serviço voltado para quem precisa de uma solução logística, rodo ou aéreo conforme peso e prazo necessário.
                    </li>
                    <li>
                        <strong>Time Log Urgente:</strong> Serviço voltado para quem não pode esperar, para quem precisa de uma rápida solução, com toda segurança e prazo definido.
                    </li>
                </ul>
            </section>

            <section id="topics-container">
                <ul>
                    <li>Rastreamento Completo Omnichannel Porta-a-porta</li>
                    <li>Logística Personalizada</li>
                    <li>Soluções Completas</li>
                    <li>Atendimento Diferenciado</li>
                </ul>
            </section>

        </main>

    );

}
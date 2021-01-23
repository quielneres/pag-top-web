import React, {useState} from "react";
import Layout from '../components/Layout'
import ReactFullpage from "@fullpage/react-fullpage";
import Link from "next/link";

const originalColors = ['#5cabff', '#fff', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];


export default function Home() {
    const [sectionsColor] = useState(originalColors)
    //
    // const onLeave =( {origin, destination, direction}) =>{
    //     console.log("onLeave", { origin, destination, direction });
    //     // arguments are mapped in order of fullpage.js callback arguments do something
    //     // with the event
    // }

    return (
        <Layout>
            <ReactFullpage
                navigation
                // onLeave={this.onLeave.bind(this)}
                sectionsColor={sectionsColor}
                render={comp =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <h1 className="title">
                                    Pag{' '}
                                    <Link href="/">
                                        <a>Toop!</a>
                                    </Link>
                                </h1>

                                <p className="description">
                                    Sua solucao de pagamentos
                                </p>


                            </div>
                            <div className="section">
                                <div className="grid">
                                    <a href="#" className="card">
                                        <h3>Pagamentos &rarr;</h3>
                                        <p>Pagar ficou mais facil! Receba e faca pagamentos atraves de boletos.</p>
                                    </a>

                                    <a href="#" className="card">
                                        <h3>Limpa Nome &rarr;</h3>
                                        <p>Comece 2021 com o nome limpo!</p>
                                    </a>

                                    <a
                                        href="#"
                                        className="card"
                                    >
                                        <h3>Seu Dinheiro &rarr;</h3>
                                        <p>Nos cuidamos para que voce posso gerir seu dinheiro.</p>
                                    </a>

                                    <a
                                        href="#"
                                        className="card"
                                    >
                                        <h3>Vantagens &rarr;</h3>
                                        <p>
                                            Faça seu cadastro e aproveite as vantagens de seu um associado.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }
            />
            <style jsx>{`
                    .container {
                      min-height: 100vh;
                      padding: 0 0.5rem;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    }

                    main {
                      padding: 5rem 0;
                      flex: 1;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    }

                    footer {
                      width: 100%;
                      height: 100px;
                      border-top: 1px solid #eaeaea;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }

                    footer img {
                      margin-left: 0.5rem;
                    }

                    footer a {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }

                    a {
                      color: inherit;
                      text-decoration: none;
                    }

                    .title a {
                      color: #0070f3;
                      text-decoration: none;
                    }

                    .title a:hover,
                    .title a:focus,
                    .title a:active {
                      text-decoration: underline;
                    }

                    .title {
                      margin: 0;
                      line-height: 1.15;
                      font-size: 4rem;
                    }

                    .title,
                    .description {
                      text-align: center;
                    }

                    .description {
                      line-height: 1.5;
                      font-size: 1.5rem;
                    }

                    code {
                      background: #fafafa;
                      border-radius: 5px;
                      padding: 0.75rem;
                      font-size: 1.1rem;
                      font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                    }

                    .grid {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-wrap: wrap;

                      margin-top: 3rem;
                    }

                    .card {
                      margin: 1rem;
                      flex-basis: 45%;
                      padding: 1.5rem;
                      text-align: left;
                      color: inherit;
                      text-decoration: none;
                      border: 1px solid #eaeaea;
                      border-radius: 10px;
                      transition: color 0.15s ease, border-color 0.15s ease;
                    }

                    .card:hover,
                    .card:focus,
                    .card:active {
                      color: #0070f3;
                      border-color: #0070f3;
                    }

                    .card h3 {
                      margin: 0 0 1rem 0;
                      font-size: 1.5rem;
                    }

                    .card p {
                      margin: 0;
                      font-size: 1.25rem;
                      line-height: 1.5;
                    }

                    .logo {
                      height: 1em;
                    }

                    @media (max-width: 600px) {
                      .grid {
                        width: 100%;
                        flex-direction: column;
                      }
                    }
                  `}</style>

            <style jsx global>{`
                    html,
                    body {
                      padding: 0;
                      margin: 0;
                      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }

                    * {
                      box-sizing: border-box;
                    }
                  `}</style>
        </Layout>
    )
}


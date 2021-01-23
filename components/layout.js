import React, {Component} from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from 'next/head'
import Navbar from './Navbar'

// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionsColor: [...originalColors],
            fullpages: [
                {
                    text: "Section 1asda"
                },
                {
                    text: "Section 2"
                },
                {
                    text: 'Section 3',
                }
            ]
        };
    }

    // onLeave(origin, destination, direction) {
    //     console.log("onLeave", { origin, destination, direction });
    //     // arguments are mapped in order of fullpage.js callback arguments do something
    //     // with the event
    // }

    handleChangeColors() {
        const newColors =
            this.state.sectionsColor[0] === "yellow"
                ? [...originalColors]
                : ["yellow", "blue", "white"];
        this.setState({
            sectionsColor: newColors
        });
    }

    handleAddSection() {
        this.setState(state => {
            const { fullpages } = state;
            const { length } = fullpages;
            fullpages.push({
                text: `section ${length + 1}`,
                id: Math.random()
            });

            return {
                // fullpages: [...fullpages]
            };
        });
    }

    handleRemoveSection() {
        this.setState(state => {
            const { fullpages } = state;
            const newPages = [...fullpages];
            newPages.pop();

            return { fullpages: newPages };
        });
    }

    moveSectionDown(){
        fullpage_api.moveSectionDown();
    }

    render() {
        const { fullpages } = this.state;

        if (!fullpages.length) {
            return null;
        }

        const Menu = () => (
            <div
                className="menu"
                style={{
                    position: "fixed",
                    top: 0,
                    width: '100%',
                    zIndex: 100
                }}
            >
                <style jsx>{ `
                    .actions{
                        list-style-type: none;
                    }
                    .actions button{
                        padding: .93em 1.87em;
                        background: #35495e;
                        border-radius: 5px;
                        border: 0;
                        color: #fff;
                        margin: 7px;
                        font-size: 15px;
                        cursor: pointer;
                    }
                    .actions button:hover{
                        background: #fff;
                        color: #35495e;
                    }
                 ` }</style>

                <Navbar />
                <ul className="actions">
                    <li>
                        <button onClick={() => this.handleAddSection()}>Add Section</button>
                        <button onClick={() => this.handleRemoveSection()}>
                            Remove Section
                        </button>
                        <button onClick={() => this.handleChangeColors()}>
                            Change background colors
                        </button>
                        <button onClick={() => this.moveSectionDown()}>
                            Move Section Down
                        </button>
                    </li>
                </ul>
            </div>
        );

        return (
            <div className="App">
                <Head>
                    <title>Pag Toop</title>
                    <link href="/styles/styles.css" rel="stylesheet" />
                </Head>
                <Menu />
                { this.props.children}
            </div>
        );
    }
}

export default Layout;


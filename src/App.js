// import "bulma/css/bulma.css";
import "./App.css";
import TextArea, { Label } from "./components/TextArea";
import React, { useState } from "react";
import marked from "marked";
import { Helmet } from "react-helmet";

marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
});

const boilerplate = `# Hello
This is a markdown parser made with [Create React App](https://reactjs.org/) and [ Marked npm library](https://www.npmjs.com/package/marked).
Create with 💖 by [ **Ranjan Kumar** ](https://github.com/Ranjankumar666/nexter)

#### About Me
I am a aspiring web developer trying to learn as much as I can....`;

const App = () => {
    const [raw, setRaw] = useState(boilerplate);
    const [parsed, setParsed] = useState(marked(boilerplate));
    const [showHTML, setShowHTML] = useState(false);

    const handlerRaw = (e) => {
        const value = e.target.value;
        setRaw(value);
        setParsed(marked(value));
    };

    const handlerShowHTML = () => {
        setShowHTML((prevState) => !prevState);
    };

    return (
        <div className="container">
            <Helmet>
                <meta property="og:title" title="Markdown Parser" />
                <meta
                    property="og:url"
                    content="https://markdown-parser-3391d.web.app/"
                />
            </Helmet>
            <TextArea
                name="markdown_raw"
                label="Enter the markdown"
                placeholder="Enter...."
                inputHandler={handlerRaw}
                value={raw}
            ></TextArea>
            <div className="col">
                <Label label="Parsed Markdown"></Label>
                <button
                    onClick={handlerShowHTML}
                    className="btn-flat red lighten-3 margin-small"
                >
                    {showHTML ? "Show Parsed" : "Show html"}
                </button>
            </div>
            {raw.length !== 0 &&
                (!showHTML ? (
                    <div
                        className="parsed_markdown red lighten-5 z-depth-1"
                        dangerouslySetInnerHTML={{
                            __html: parsed,
                        }}
                    ></div>
                ) : (
                    <div className="parsed_markdown red lighten-5 z-depth-1">
                        {parsed}
                    </div>
                ))}
        </div>
    );
};

export default App;

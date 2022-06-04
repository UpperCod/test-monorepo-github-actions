import { render } from "react-dom";
import { Brand } from "@component/component-1/react";
import { Component2 } from "@component/component-2/react";

function App() {
    return (
        <>
            <h1>React app</h1>
            <Brand color="tomato"></Brand>
            <Component2></Component2>
        </>
    );
}

render(<App></App>, document.querySelector("#app"));

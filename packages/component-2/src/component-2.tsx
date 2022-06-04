import { c, css } from "atomico";

function component2() {
    return <host shadowDom></host>;
}

component2.props = {
    show: Boolean,
};

component2.styles = css`
    @import "./component-2.css";
`;

export const Component2 = c(component2);

customElements.define("component-2", Component2);

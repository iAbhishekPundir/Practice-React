import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Namaste React using JSX🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeadingComponent = () => {
    return(
        <h1>This is my first functional component</h1>
    )
}
root.render(heading);
root.render(<HeadingComponent/>);

import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Namaste React using JSX🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => <h2 className="title">This is my title for this page</h2>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>This is my first functional component</h1>
    </div>
  );
};
root.render(heading);
root.render(<HeadingComponent />);

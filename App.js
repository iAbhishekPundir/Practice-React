const div = 
React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"}, 
        [React.createElement("h1",{}, "This is h1 heading"),
        React.createElement("h2",{}, "This is h2 heading")]),
        React.createElement("div",{id:"child2"}, 
        [React.createElement("h1",{}, "This is h1 heading"),
        React.createElement("h2",{}, "This is h2 heading")])]
        );


// const heading = React.createElement("h1", {
//     id: "heading"
// }, "Namaste from React!");

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(div);
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import HeaderComponent from "./src/HeaderComponent";
import Body from "./src/Body";

//const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!!");
// const parent = React.createElement("div",{id:"parent"}, [
//     React.createElement("div",{id:"child1"}, [
//         React.createElement("h1",{}, "i am h1 tag"),
//         React.createElement("h2",{}, "i am h2 tag")
//     ]),
//     React.createElement("div",{id:"child2" }, [
//         React.createElement("h1",{}, "i am h1 tag"),
//         React.createElement("h2",{}, "i am h2 tag")
//     ])])

// const Title = () => <h1>Namaste React</h1>

// component composition
// const HeaderComponent = () => ( <div id="container">
//     <Title />
//     <h1> Header Component </h1>
// </div> )

const Applayout = () =>{ 
    return(
        <div className="container">
            <HeaderComponent />
            <Body />
        </div>
    )
}

// const jsxHeading = (<h1 id="heading" tabIndex="5">Namaste React</h1>);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout />);
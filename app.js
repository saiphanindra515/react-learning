import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

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

const Body = () =>{
    return(
        <div className="bodyContainer">
            <div className="search">Search</div>
            <div className="res-container">
                <RestroCard />
                <RestroCard />
                <RestroCard />
                <RestroCard />
                <RestroCard />
                <RestroCard />
                <RestroCard />
            </div>
        </div>
    )
}

const RestroCard = () => {
    return(
        <div className="res-card">
            <div className="res-img">
                <img src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/u2aycylttqjfrcs4clzb" />
            </div>
            <div className="res-details">
                <h3>Paradise</h3>
                <h4>Nakkalagutta, Hanamkonda</h4>
                <h4>4.0</h4>
                <h4>30 mins</h4>
            </div>
        </div>
    )
}

const HeaderComponent = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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
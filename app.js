import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import HeaderComponent from "./src/HeaderComponent";
import Body from "./src/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/About";
import RestaurantMenu from "./src/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/store"; 

const Instamart = lazy(() => import ("./src/Instamart"));

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
    const [user, setUser] = useState({
        name: "Suhruda",
        email: "suvvi@gmail.com"
    })

    return(
        <Provider store={store}>
        <UserContext.Provider value={{user}}>
        <div className="container">
            <HeaderComponent />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },{
                path: "/instamart",
                element: 
                    <Suspense>
                        <Instamart />
                    </Suspense>
                
            }
        ]
    }
])

// const jsxHeading = (<h1 id="heading" tabIndex="5">Namaste React</h1>);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
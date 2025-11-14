import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu.tsx";
import MobileMenu from './components/mobilemenu.tsx';
import Home from "./home";
import About from "./about";
import Contact from "./contact.tsx";
import Footer from "./components/footer";
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Index extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { viewportWidth: window.visualViewport.width };
    }

    render()
    {
        if(this.state.viewportWidth > 640)
        {
            return (
                <>
                    <Menu/>
                    <Home/>
                    <About/>
                    <Contact/>
                    <Footer/>               
                </>
            );
        }
        else
        {
            return (
                <>
                    <MobileMenu/>
                    <Home/>
                    <About/>
                    <Contact/>
                    <Footer/>               
                </>
            );
        }
    }

    componentDidMount()
    {
        window.addEventListener("resize", () => {
            this.setState({viewportWidth: window.visualViewport.width});
        });
    }
}

function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    );
}

// create the root using the element of id "root" in index.html
// add "App" to the root
// App renders the "Index" component at the index url
// Index is a single page and renders all the components in the page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
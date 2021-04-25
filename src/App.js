import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Welcome, About, Projects, Contact } from './pages';
import { Footer } from './outline';


function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Switch>
                    <Route exact path = "/"><Welcome /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/projects"><Projects /></Route>
                    <Route path="/contact"><Contact /></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App;
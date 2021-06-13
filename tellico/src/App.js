import React from 'react';
// Global Styles
import GlobalStyle from './components/GlobalStyles';
// import Pages
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Services from './components/Services';
// Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Nav />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/services">
          <Services />
        </Route>

        <Route exact path="/about">
          <AboutUs />
        </Route>

        <Route exact path="/gallery">
          <Gallery />
        </Route>

        <Route exact path="/contact">
          <ContactUs />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

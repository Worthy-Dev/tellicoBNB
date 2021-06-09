import React from 'react';
// Global Styles
import GlobalStyle from './components/GlobalStyles';
// import Pages
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Services from './pages/Services';
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

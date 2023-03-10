import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Components/calculator';
import Home from './Components/Home';
import Quote from './Components/quote';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/math-magician" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

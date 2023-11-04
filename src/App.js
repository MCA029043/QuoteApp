import React from 'react';
import Navbar from './component/navbar';
import Footer from './component/footer';
import './App.css';
import QuotePage from './QuotePage';

function App() {
   return (
      <div className="App">
         <Navbar />
         <QuotePage />
         <Footer />
      </div>
   );
}

export default App;

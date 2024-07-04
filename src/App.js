import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home.js';
import Footer from './Footer.js';
import AboutUsPage from './AboutUsPage.js';
// import Login from './Login.js';
import Contactus from './contactus.js';
import Bproducts from './bproducts.js';
import Shredderproducts from './shredderproducts.js';
import Tyrecutting from './tyrecutting.js';
import Tyrefolding from './Tyrefolding.js';
import Baler from './Baler.js';
import Plasticbalers from './Plasticbaler.js';
import Cbpsb from './Card board and paper scrap balers.js';
import Metalbalers from './Metalbalers.js';
import Tyreshredder from './Tyreshredder.js';
import Metalshredder from './Metalshredder.js';
import Plasticshredder from './plasticshredder.js';
import Paperandcardboardshredder from './paperandcardboardshredder.js';



function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <div>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/AboutUsPage" element={<AboutUsPage />} /> 
                      {/* <Route path="/Login" element={<Login />} /> */}
                      <Route path="/contact" element={<Contactus />} />
                      <Route path='/bproducts' element ={<Bproducts/>}/>
                      <Route path='/shredderproducts' element={<Shredderproducts/>}/>
                      <Route path="/Tyre cutting" element={<Tyrecutting />} />
                      <Route path="/Tyre Folding" element={<Tyrefolding />} />
                      <Route path="/Baler" element={<Baler />} />
                      <Route path='/Plasticbalers' element={<Plasticbalers/>}/>
                      <Route path='/cbpsb' element={<Cbpsb/>}/>
                      <Route path='/metalbalers' element={<Metalbalers/>}/>
                      <Route path='/tyreshredder' element={<Tyreshredder/>}/>
                      <Route path='/metalshredder' element={<Metalshredder/>}/>
                      <Route path='/plasticshredder' element={<Plasticshredder/>}/>
                      <Route path='/paperandcardboardshredder' element={<Paperandcardboardshredder/>}/>

                  </Routes>
              </div>
             <Footer/>
              
          </div>
      </Router>
  );
}

export default App;
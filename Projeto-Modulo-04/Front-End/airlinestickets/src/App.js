import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Destinos from './components/pages/Destinos'
import Contatos from './components/pages/Contatos'
import Promocoes from './components/pages/Promocoes'
import Administracao from './components/pages/Administracao'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
// import ComprasCliente from './components/pages/ComprasCliente'



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="row w-100 p-0 m-0 justify-content-center align-content-center mb-5">
          <Routes>
            <Route path="/" element={<Home />}> Home </Route>
            <Route path="/Destinos" element={<Destinos />}> Destinos </Route>
            <Route path="/Promocoes" element={<Promocoes />}> Promoções </Route>
            <Route path="/Contatos" element={<Contatos />} > Contatos </Route>
            <Route path="/Administracao" element={<Administracao />}> Administracao </Route>
            {/* <Route path="/ComprasCliente" element={<ComprasCliente/>}>Compras Cliente</Route> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
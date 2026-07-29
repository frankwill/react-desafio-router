import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produtos from "./components/Produtos"
import Contato from "./components/Contato"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />}>Produtos</Route>
            <Route path="contato" element={<Contato />}>Contato</Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import './App.css'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <header className="navbar navbar-expand-lg encabezado">
        <div className="container-fluid">

          <img className="tamLogo" src="/jubilus.ico" alt="logo"/>

          <h1 className="colorJubilus">
              JuBILuS
          </h1>

          <NavbarComponent/>
          
        </div>
      </header>
      
      <ItemListContainer greeting = {'Cervecería Artesanal Jubilus'}/>

    </>
  )
}

export default App


import './App.css'

//Componentes
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  // terminar os dados dinamico

  const product = {
    productName : "AIR",
    brandLogo : "https://i.ibb.co/q7RKcZk/nike.png",
    brandName : "Nike",
    price : 100,
    inStock : true, 
    title : 'AIR STRUCTURE 1',
    description : "From the Flymesh upper to the triple-density foam midsole, the Nike Air Zoom Structure 19 Men's Running Shoe offers plenty of support and the response you need for a smooth, stable ride that feels ultra fast.",
    imageDescription : 'Best Shoes in the world'
  }

//fetch
  return (
    <ProductCard product={product}/>
  )
}

export default App

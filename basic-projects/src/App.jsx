
import './App.css'
import RandomColor from './components/2.RandomColor'
import Accordian from './components/1.Accordian'
import StarRating from './components/3.star-rating'

function App() {

  return (
    <div className="App">
      <Accordian></Accordian>
      <RandomColor></RandomColor>
      <StarRating noOfStars={10}></StarRating>
      </div>
  )
}
export default App

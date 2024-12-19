
import './App.css'
import RandomColor from './components/2.RandomColor'
import Accordian from './components/1.Accordian'
import StarRating from './components/3.star-rating'
import ImageSlider from './components/4.image-slider'
import LoadMoreData from './components/5.load-more-data'

function App() {

  return (
    <div className="App">
      <Accordian></Accordian>
      <RandomColor></RandomColor>
      <StarRating noOfStars={10}></StarRating>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}></ImageSlider>
      <LoadMoreData></LoadMoreData>
      </div>
  )
}
export default App

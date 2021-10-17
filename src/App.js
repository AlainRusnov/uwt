import Navbar from '../src/components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Carousel  from '../src/components/carousel/Carousel';
import './App.css';
import Button from '../src/components/button/Button';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const gamesData = [
  {title:"Far Cry 6",src:"assets/images/farcry6.jpg"},
  {title:"Assassin's Creed Valhalla",src:"assets/images/ac-valhalla.jpg"},
  {title:"Ghost Recon Frontline",src:"assets/images/ghostrecon.webp"},
  {title:"Rocksmith+",src:"assets/images/rocksmith.webp"},
  {title:"Riders Republic",src:"assets/images/riders-republic.jpg"},
  {title:"Watch Dogs Legion",src:"assets/images/watch-dogs-legion.jpg"},
  {title:"Scott Pilgrim",src:"assets/images/scott-pilgrim.jpg"},
  {title:"Immortals",src:"assets/images/immortals.jpg"},
  {title:"Agos",src:"assets/images/agos.jpg"},
  {title:"Prince of Persia",src:"assets/images/pop.jpg"},
]

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
    </Router>
    <div className="games--wrapper">
      <div className="explore--title">
        <h2>explore more games</h2>
      </div>
      <Carousel data={gamesData}/>
      <div className="button--wrapper">
        <Button label={"View All Games"} />
      </div>
    </div>
    <div className="news--container">
      <div className="explore--title">
        <h2>Latest News</h2>
      </div>
      <div className="button--wrapper">
          <Button label={"All News"} />
      </div>
    </div>
    <div className="featured--container">
      <div className="explore--title">
        <h2>Featured Videos</h2>
      </div>
      <div className="featured-videos">
        <div className="video--card">
          <img src="assets/images/featured-videos-sample-1.jpg" alt="vid1" className="video--thumbnail" ></img>
        </div>
        <div className="video--card">
          <img src="assets/images/featured-videos-sample-2.jpg" alt="vid2" className="video--thumbnail"></img>
          Assassin's Creed Valhalla world premiere trailer
        </div>
        <div className="video--card">
          <img src="assets/images/featured-videos-sample-3.jpg" alt="vid3" className="video--thumbnail"></img>
        </div>
      </div>
      <div className="button--wrapper">
          <Button label={"View All Trailers"} />
      </div>
    </div>
    </>
  );
}

export default App;

 

import GalleryFooter from "./components/layout/GalleryFooter";
import GalleryImages from "./components/pages/GalleryImages";
import GalleryHeader from "./components/layout/GalleryHeader";
import GalleryNavbar from "./components/layout/GalleryNavbar"; 
import "./styles/index.scss";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GalleryAbout from "./components/pages/GalleryAbout"; 
 






function App() {
 
      

  return (
    <>
    <Router>
        <GalleryNavbar/> 
        <GalleryHeader/> 
            <Switch>
                <Route path="/" exact component={ GalleryImages }/>  
                <Route path="/about" exact component={ GalleryAbout }/> 
            </Switch>
        <GalleryFooter/> 
    </Router>
    </>
  );
}

export default App;

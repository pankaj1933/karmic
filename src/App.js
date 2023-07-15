import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNav from './componets/MyNav';
import LabsHeroSec from './componets/LabsHeroSec';
import ProjectSection from './componets/ProjectSection';
import MoonHover from './componets/MoonHover';
import ProjectTwo from './componets/ProjectTwo';
import AboutSection from './componets/AboutSection';


function App() {
  return (
    <>
    <MyNav/>
    <LabsHeroSec/>
    <ProjectSection/>
    <MoonHover/>
    <ProjectTwo/>
    <AboutSection/>
    </>

  );
}

export default App;

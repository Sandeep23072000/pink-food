import './App.css';
import Experience from './Components/Experience/Experience';
import Feedback from './Components/Feedback/Feedback';
import Hygienic from './Components/Hygienic/Hygienic';
import Navbar from './Components/Navbar/Navbar';
import Story from './Components/Story/Story';
import Sustainable from './Components/Sustainable/Sustainable';

function App() {
  return (
    <>
    <Navbar />
    <Experience />
    <Story />
    <Feedback />
    <Sustainable />
    <Feedback />
    <Hygienic />
    </>
  );
}

export default App;
